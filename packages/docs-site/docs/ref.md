# Penrose Overview

For more information on any of the items summarized below, please use the navigation. More detailed documentation and example snippets for several aspects of Penrose (such as, types, shapes, and functions) can be found on the [wiki](https://github.com/penrose/penrose/wiki/).

Penrose effortlessly creates beautiful diagrams using a 'trio':

- A **Domain-specific Language (.domain) program**.  
  This describes the **domain** in which the diagram is defined. E.g., Euclidian geometry, Set theory, etc. Penrose supports a large and growing set of domains. And if you don't see the domain you need, you can create one yourself.
- A **Substance (.substance) program**.  
  Defines the **objects** and **relationships** for this particular diagram within the domain you selected.
- A **Style** (.style) program  
  This tells Penrose how to display the objects and relationships for the domain you selected.

## Often, you only need to write the Substance program

To create a new diagram, you simply create a short and simple Substance program that describes the domain objects and their relationships. Often these are so short, you may not even realize you are writing a program. Here's an example:

```
  Set A, B, C, D, E
  AutoLabel All
```

The beauty of Penrose is you get to "stand atop giants" by using the existing Style and Domain program library for many common domains. You only need to modify a Style or Domain program if you want to add or change the way the domain is displayed (Style) or if you need to define new relationships or domain object types (Domain).

## Why write a program instead of dragging shapes around?

There are plenty of visual design tools. While popular, these tools tend to lack composability, generality, and re-use. Creators spend a large amount of time moving shapes around trying to get everything "just right." The more complex the diagram, the longer it takes to solve. And for the next diagram, they get to do the same work all over again.

Graphical specification also demands that you already know how to visualize a particular abstract idea, and it ties mathematical content to one specific visual representation.

Penrose, instead, provides the level of abstraction needed to separate content from visualization, which is extremely powerful.

Penrose already understands the diagram's domain and how to style the diagram. You just define the objects and relationships. Penrose goes to work by converting the three programs into an optimization problem that it solves using symbolic differentiation. If you need to add a new shape, it's not a painstaking exercise -- Penrose automatically creates a new diagram that meets all of your constraints.

## Domain Language

These domains are supported "out of the box" as examples, but you can create your own, too.

- Geometry
- Sets
- Graph
- Linear Algebra
- Circuits
- Molecules
- Word Cloud

The Domain Language specifies for a given domain the types of objects, predicates, and functions that comprise diagrams in this domain. These will be referred to in the Substance and Style programs, which are domain-specific.

## Substance Language

The Substance language is what you work with to create a diagram within an existing domain. Here you define and name which domain objects will be in the diagram and use the predicates and functions defined in the domain-specific language to define the relationships among the objects. At this point, you aren't too concerned with how to draw the diagram: that is the job of the Style program.

## Style Language

Style programs are specific to a domain and are characterized by Shapes, Shape Properties, and Functions. Shapes are graphical objects that are displayed on a canvas. Examples are [Circle](/docs/ref/style/shapes/circle), [Rectangle](/docs/ref/style/shapes/rectangle), and [Line](/docs/ref/style/shapes/line). Each shape has properties such as color, size, and position. Functions are used by Style programs to express relationships among shapes, properties and/or the canvas.

### Shapes

Shapes in a Style program represent graphical objects that are rendered as output on a canvas. For example, a circle, a rectangle, a line, and text are examples of these shapes. Each shape has properties that may be set by the Style program, computed, or solved by Penrose using a constraint function.

### Functions

Functions in a Style program calculate a value or model a constraint. An example of a constraint is a triangle comprised of three lines where each line's endpoints are constrained to be connected to the endpoints of the other two other sides; thus, three lines plus the set of constraints results in a triangle.
