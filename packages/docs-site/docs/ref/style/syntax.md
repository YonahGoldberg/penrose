# Syntax and Semantics

Given a _domain_ schema (specifying the domain of the diagram) and a _substance_ program (specifying _what_ to draw), the _style_ schema describes the recipe of drawing the objects and relations on a canvas.

A _style_ schema is composed of _blocks_, of which there are two types:

- _namespaces_, which can be used to help program organization;
- _style blocks_, which carry out the meat of the diagram generation.

## Namespaces

A namespace is a collection of value assignments. The syntax for its declarations is as follows:

```
namespace_name {
    field_1 = expr_1
    field_2 = expr_2
    ...
}
```

Values declared within a namespace can be read outside of the namespace using the "dot" operator:

```
namespace_name.field_name
```

Hence they are also called _global_ variables. Overwriting these values is not allowed.

### Canvas Preamble Block

Each _style_ schema _must_ contain a _canvas preamble block_, a special type of namespace which describes the width and height of the canvas. For example, preamble block

```
canvas {
    width = 800
    height = 700
}
```

tells Penrose that the drawing canvas should have a width of 800 pixels and a height of 700 pixels.

## Style Blocks

Style blocks are the most important component in a _style_ schema, since they actually describe _how_ to draw elements of a diagram. The syntax for style blocks is as follows:

```
forall list_object_declarations
where list_relations {
    list_body_expressions
}
```

where

- `list_object_declarations` is a **semicolon**-separated list of object declarations, similar to the object declarations in the _substance_ schema. Each object declaration has syntax `type_name object_name`. The names declared in `list_object_declarations` are referred to as _style variables_.
- `list_relations` is a **semicolon**-separated list of constraints (about objects in `list_object_declaration`) that must be satisfied in order for this style block to be triggered.
- `list_body_expressions` are statements that represent the computational and graphical aspects of the diagrams that are triggered when this style block is triggered.

If `list_relations` is empty, then the clause `where ...` needs to be omitted.

In the set-theory example, a style block may look like

```
forall Set x {
    ...
}
```

or

```
forall Set x; Set y
where IsSubset (x, y) {
    ...
}
```

### Matching style block against substance program in general

Penrose functions by matching a style block against a _substance_ program. In a nutshell, given a style block

```
forall Set x; Set y
where IsSubset (x, y) {
    ...
}
```

the Penrose compiler searches through the _substance_ program to find sets of objects consistent with `Set x; Set y` such that `IsSubset(x, y)` is satisfied. This is done through generating mappings from _style variables_ to _substance variables_, which are the objects in the _substance_ program.

For instance, consider a simple set-theory _substance_ program that works with the previous style block:

```
Set A, B, C
IsSubset (A, B)
IsSubset (B, C)
```

By matching the style block against the _substance_ program, we essentially consider six possible mappings (note that repeated elements are not allowed), some of which are valid and some are invalid:

| Mapping          | `IsSubset(x, y)` becomes | Satisfied by _substance_ |
| :--------------- | :----------------------- | ------------------------ |
| `x -> A; y -> B` | `IsSubset(A, B)`         | Yes                      |
| `x -> A; y -> C` | `IsSubset(A, C)`         | No                       |
| `x -> B; y -> A` | `IsSubset(B, A)`         | No                       |
| `x -> B; y -> C` | `IsSubset(B, C)`         | Yes                      |
| `x -> C; y -> A` | `IsSubset(C, A)`         | No                       |
| `x -> C; y -> B` | `IsSubset(C, B)`         | No                       |

Here, Penrose filters out mappings which do not satisfy the constraints listed in the _style_ block, and keeps a list of _good_ mappings (in this example, two mappings are kept). For each _good_ mapping, the body of the _style_ block (`list_body_expressions`) is executed, where each instance of the _style_ variables (`x` and `y`) is substituted with the corresponding _substance_ variables (once with `A` and `B`, once with `B` and `C`).

### Object Declarations

In the list of object declarations in a _style_ block, we can declare two types of objects, which are matched differently by the Penrose compiler.

#### Substance objects

We can declare a _substance_ object, whose object name is surrounded by backticks. For instance,

```
forall Set `A` {
    ...
}
```

can only be mapped to the _substance_ object with the exact same name (`A`) provided that the types match (subtyping allowed). In other words, given _substance_ program

```
Set A, B, C
```

matching the _style_ block against the _substance_ block yields only one valid mapping: `` `A` -> A ``.

#### Style objects

If an object name is not surrounded by backticks, then this object is a _style_ object with a _style_ variable. As seen before, the Penrose compiler will try to map _style_ variables to any _substance_ objects, provided that their types match (subtyping allowed).

### Allowed Relations

A _style_ block supports three types of relations, two of which can also be seen in the _substance_ program.

#### Predicate Applications

Just like in the _substance_ program, each predicate application has syntax

```
predicate_name (argument_list)
```

where elements of `argument_list` can refer to objects declared in `list_object_declarations`, or be other predicate applications. The types must still match, allowing subtyping.

Optionally, one can give an alias to a predicate application:

```
predicate_name (argument_list) as alias_name
```

If such an alias is set, then `alias_name` will be accessible in the style block body, and it will always refer to the version of the predicate application within the _substance_ program.

##### Symmetry

If a predicate is declared as symmetric, then it gets special treatment.
Suppose we have the following domain schema:

```
type Atom
type Hydrogen <: Atom
type Oxygen <: Atom
symmetric predicate Bond (Atom, Atom)
```

and the following style block:

```
forall Hydrogen h; Oxygen o
where Bond (h, o) {
    ...
}
```

The style block will successfully match the following substance schema:

```
Hydrogen H
Oxygen O
Bond (O, H)
```

where `Bond (h, o)` in the style block matches against `Bond (O, H)` in the substance schema. Because Bond is declared symmetric, when Penrose looks for `Bond (h, o)`, it also looks for `Bond (o, h)` and finds a match. In other words, the matching algorithm handles the equivalence between `Bond (h, o)` and `Bond (o, h)` correctly.

#### Function and Constructor Applications

Each function or constructor application has syntax

```
object_name := function_name (argument_list)
```

We do not allow aliasing for function and constructor applications. Arguments in `argument_list` must have types that match the domain argument types, similar to the substance schema.

#### Object Property Relations

Aside from predicate applications and function (constructor) applications, Penrose also supports a predicate-like relation that checks whether an object has a certain property, say `label`. For instance, we may write

```
forall Set s
where s has label {
    ... some code that uses s.label
}
```

If a certain `Set A` in the _substance_ program does not have a label (perhaps due to `NoLabel` declarations), then `s` will not be mapped to `A`, thus preventing an access of nonexistent properties.

### Matching Deduplication

The matching algorithm is designed to avoid duplicated mappings. If two mappings give us the same set of matched objects (in the _substance_ program) and the equivalent set of matched substance relations (predicate applications and function or constructor applications), then the algorithm only triggers on one of them.

For instance, say Penrose tries to match the _style_ block

```
forall Set x; Set y {
    ...
}
```

against _substance_ program

```
Set A, B
```

Then, only one of mappings `x -> A; y -> B` and `x -> B; y -> A` triggers the Style block.

### Style Block Body

The body of a style block lists out computations, shape declarations, and constraint / objective definitions that define how to draw elements of a diagram.

#### Assignments

In _style_ block bodies, we can assign an expression to a field:

```
field = expression
```

where `field` can either be

- A single identifier, which denotes a local assignment, not accessible outside of this matching; or
- An object name (defined in `list_object_declarations`) or predicate application alias, followed by a dot operator and an identifier, which denotes an assignment bound to a _substance_ instance of object or predicate application after we substitute in the mapping. These assignments are accessible if the same _substance_ object or predicate application is matched again.

For example, consider the following _style_ block:

```
forall MyType t1; MyType t2
where MyPredicate (t1, t2) as r1 {
	x = ... // this is a local assignment
	t1.a = ... // this is bound to the substance instance of `MyType t1`
	r1.c = ... // this is bound to the substance instance of `MyPredicate (t1, t2)`
}
```

On the other hand, `expression` is either a mathematical expression, or a shape definition, both of which can refer to global, local, and other variables bound to _substance_ instance of objects and predicate applications. Shape declarations have syntax

```
shape_name {
    property_name_1 : value_1
    property_name_2 : value_2
}
```

A full list of available shapes and their properties can be found in the Shape Library.

#### Constraints and Objectives

A good diagram must satisfy some basic constraints, while trying to optimize upon some objectives (specifying diagram beauty). We declare these constraints and objectives within the style blocks. A constraint declaration has syntax

```
ensure constraint_name (argument_list)
```

and an objective declaration has syntax

```
encourage objective_name (argument_list)
```

where `argument_list` may refer to constant values, global / local variables, and other variables bound to _substnace_ instances of objects and predicate applications. A full list of available constraints and objectives can be found [here](./functions).

We also provide syntax sugar expressions for some commonly-used objectives and constraints. In particular,

- `a > b` is the syntax sugar for the constraint / objective `greaterThan(a, b)`,
- `a == b` is the syntax sugar for the constraint / objective `equal(a, b)`, and
- `a < b` is the syntax sugar for the constraint / objective `lessThan(a, b)`.

#### Layering

We can specify the layering between two shapes (particularly useful when two shapes overlap) using layering statements: either

```
layer shape_1 above shape_2
```

or

```
layer shape_1 below shape_2
```

where `shape_1` and `shape_2` can be variables assigned to shapes.

#### Reserved Variables

Within a _style_ block body, some variable names are reserved for metadata purposes:

- `match_count` is an integer that refers to the number of times that this _style_ blocks will be triggered (or matched) in total; and
- `match_id` is the 1-indexed ordinal of this current matching.

These values can directly be read or overwritten within the style block body, or overwritten, if needed.
