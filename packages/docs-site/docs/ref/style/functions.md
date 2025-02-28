# Style Functions

## Constraint Functions

### collinear

▸ **collinear**(`c1`, `c2`, `c3`): `IVarAD`

Require that three points be collinear.
Depends on the specific ordering of points.

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `c1` | `IVarAD`[] |
| `c2` | `IVarAD`[] |
| `c3` | `IVarAD`[] |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:420](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L420)

---

### collinearUnordered

▸ **collinearUnordered**(`c1`, `c2`, `c3`): `IVarAD`

Require that three points be collinear.
Does not enforce a specific ordering of points, instead it takes the arrangement of points that is most easily satisfiable.

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `c1` | `IVarAD`[] |
| `c2` | `IVarAD`[] |
| `c3` | `IVarAD`[] |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:436](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L436)

---

### disjointScalar

▸ **disjointScalar**(`c`, `left`, `right`): `IVarAD`

Make scalar `c` disjoint from a range `left, right`.

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `c`     | `any` |
| `left`  | `any` |
| `right` | `any` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:395](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L395)

---

### perpendicular

▸ **perpendicular**(`q`, `p`, `r`): `IVarAD`

Require that the vector defined by `(q, p)` is perpendicular from the vector defined by `(r, p)`.

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `q`  | `IVarAD`[] |
| `p`  | `IVarAD`[] |
| `r`  | `IVarAD`[] |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:409](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L409)

---

### atDist

▸ `Static` **atDist**(`__namedParameters`, `__namedParameters`, `distance`): `IVarAD`

Require that shape `s1` is at a distance of `distance` from shape `s2`.

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `__namedParameters` | [`string`, `any`] |
| `__namedParameters` | [`string`, `any`] |
| `distance`          | `number`          |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:571](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L571)

---

### contains

▸ `Static` **contains**(`__namedParameters`, `__namedParameters`, `padding?`): `IVarAD`

Require that a shape `s1` contains another shape `s2`,
based on the type of the shape, and with an optional `padding` between the sizes of the shapes
(e.g. if `s1` should contain `s2` with margin `padding`).

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `padding`           | `number`          | `0.0`         |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:548](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L548)

---

### contains1D

▸ `Static` **contains1D**(`__namedParameters`, `__namedParameters`): `IVarAD`

Require that an interval `[l1, r1]` contains another interval `[l2, r2]`. If not possible, returns 0.

#### Parameters

| Name                | Type                 |
| :------------------ | :------------------- |
| `__namedParameters` | [`IVarAD`, `IVarAD`] |
| `__namedParameters` | [`IVarAD`, `IVarAD`] |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:384](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L384)

---

### disjoint

▸ `Static` **disjoint**(`__namedParameters`, `__namedParameters`, `padding?`): `IVarAD`

Require that a shape `s1` is disjoint from shape `s2`,
based on the type of the shape, and with an optional `padding` between them
(e.g. if `s1` should be disjoint from `s2` with margin `padding`).

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `padding`           | `number`          | `0.0`         |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:522](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L522)

---

### disjointIntervals

▸ `Static` **disjointIntervals**(`__namedParameters`, `__namedParameters`): `IVarAD`

Make two intervals disjoint. They must be 1D intervals (line-like shapes) sharing a y-coordinate.

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `__namedParameters` | [`string`, `any`] |
| `__namedParameters` | [`string`, `any`] |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:611](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L611)

---

### equal

▸ `Static` **equal**(`x`, `y`): `IVarAD`

Require that the value `x` is equal to the value `y`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `IVarAD` |
| `y`  | `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:341](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L341)

---

### greaterThan

▸ `Static` **greaterThan**(`x`, `y`, `padding?`): `IVarAD`

Require that the value `x` is greater than the value `y` with optional padding `padding`

#### Parameters

| Name      | Type     | Default value |
| :-------- | :------- | :------------ |
| `x`       | `IVarAD` | `undefined`   |
| `y`       | `IVarAD` | `undefined`   |
| `padding` | `number` | `0`           |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:355](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L355)

---

### greaterThanSq

▸ `Static` **greaterThanSq**(`x`, `y`): `IVarAD`

Require that the value `x` is greater than the value `y`, with steeper penalty

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `IVarAD` |
| `y`  | `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:370](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L370)

---

### inRange

▸ `Static` **inRange**(`x`, `x0`, `x1`): `IVarAD`

Require that the value `x` is in the range defined by `[x0, x1]`.

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `IVarAD` |
| `x0` | `IVarAD` |
| `x1` | `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:377](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L377)

---

### lessThan

▸ `Static` **lessThan**(`x`, `y`, `padding?`): `IVarAD`

Require that the value `x` is less than the value `y` with optional padding `padding`

#### Parameters

| Name      | Type     | Default value |
| :-------- | :------- | :------------ |
| `x`       | `IVarAD` | `undefined`   |
| `y`       | `IVarAD` | `undefined`   |
| `padding` | `number` | `0`           |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:348](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L348)

---

### lessThanSq

▸ `Static` **lessThanSq**(`x`, `y`): `IVarAD`

Require that the value `x` is less than the value `y`, with steeper penalty

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `IVarAD` |
| `y`  | `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:362](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L362)

---

### maxSize

▸ `Static` **maxSize**(`__namedParameters`, `limit`): `IVarAD`

Require that a shape have a size less than some constant maximum, based on the type of the shape.

#### Parameters

| Name                | Type                 |
| :------------------ | :------------------- |
| `__namedParameters` | [`string`, `any`]    |
| `limit`             | `number` \| `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:482](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L482)

---

### minSize

▸ `Static` **minSize**(`__namedParameters`, `limit?`): `IVarAD`

Require that a shape have a size greater than some constant minimum, based on the type of the shape.

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `limit`             | `number`          | `50`          |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:475](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L475)

---

### onCanvas

▸ `Static` **onCanvas**(`__namedParameters`, `canvasWidth`, `canvasHeight`): `IVarAD`

Require that `shape` is on the canvas

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `any`    |
| `canvasWidth`       | `IVarAD` |
| `canvasHeight`      | `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:453](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L453)

---

### overlapping

▸ `Static` **overlapping**(`__namedParameters`, `__namedParameters`, `overlap?`): `IVarAD`

Require that shape `s1` overlaps shape `s2` with some overlap `overlap`.
based on the type of the shape, and with an optional `overlap` between them
(e.g. if `s1` should be overlapping `s2` with margin `overlap`).

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `padding`           | `number`          | `0.0`         |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:491](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L491)

---

### smallerThan

▸ `Static` **smallerThan**(`__namedParameters`, `__namedParameters`, `relativePadding?`): `IVarAD`

Require that shape `s1` is smaller than `s2` with some relative padding `relativePadding`.

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `relativePadding`   | `number`          | `0.4`         |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:584](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L584)

---

### touching

▸ `Static` **touching**(`__namedParameters`, `__namedParameters`, `padding?`): `IVarAD`

Require that shape `s1` is touching shape `s2`.
based on the type of the shape, and with an optional `padding` between them
(e.g. if `s1` should be touching `s2` with margin `padding`).

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `padding`           | `number`          | `0.0`         |

#### Returns

`IVarAD`

#### Defined in

[contrib/Constraints.ts:535](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Constraints.ts#L535)

## Objective Functions

### above

▸ `Static` **above**(`__namedParameters`, `__namedParameters`, `offset?`): `IVarAD`

Encourage the center of `sBottom` to be below the center of `sTop`.

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `offset`            | `number`          | `100`         |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:396](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L396)

---

### below

▸ `Static` **below**(`__namedParameters`, `__namedParameters`, `offset?`): `IVarAD`

Encourage the center of `sTop` to be above the center of `sBottom`.
Only works for shapes with property `center`.

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `offset`            | `number`          | `100`         |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:380](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L380)

---

### centerArrow

▸ `Static` **centerArrow**(`__namedParameters`, `__namedParameters`, `__namedParameters`): `IVarAD`

Try to center the arrow `arr` between the shapes `s2` and `s3` (they can also be any shapes with a center).

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `__namedParameters` | [`string`, `any`] |
| `__namedParameters` | [`string`, `any`] |
| `__namedParameters` | [`string`, `any`] |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:528](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L528)

---

### centerLabel

▸ `Static` **centerLabel**(`__namedParameters`, `__namedParameters`, `w`, `padding?`): `IVarAD`

Try to center a label `s2` with respect to some shape `s1`.

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `w`                 | `number`          | `undefined`   |
| `padding`           | `number`          | `10`          |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:580](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L580)

---

### centerLabelAbove

▸ `Static` **centerLabelAbove**(`__namedParameters`, `__namedParameters`, `w`): `IVarAD`

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `__namedParameters` | [`string`, `any`] |
| `__namedParameters` | [`string`, `any`] |
| `w`                 | `number`          |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:551](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L551)

---

### equal

▸ `Static` **equal**(`x`, `y`): `IVarAD`

Encourage the inputs to have the same value: `(x - y)^2`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `IVarAD` |
| `y`  | `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:346](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L346)

---

### greaterThan

▸ `Static` **greaterThan**(`x`, `y`): `IVarAD`

Encourage x to be greater than or equal to y: `max(0,y - x)^2`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `IVarAD` |
| `y`  | `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:351](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L351)

---

### leftwards

▸ `Static` **leftwards**(`__namedParameters`, `__namedParameters`, `offset?`): `IVarAD`

Encourage the center of `sLeft` to be leftwards to the center of `sRight`.

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `offset`            | `number`          | `100`         |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:412](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L412)

---

### lessThan

▸ `Static` **lessThan**(`x`, `y`): `IVarAD`

Encourage x to be less than or equal to y: `max(0,x - y)^2`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `IVarAD` |
| `y`  | `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:356](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L356)

---

### maximal

▸ `Static` **maximal**(`x`): `IVarAD`

Encourage the input value to be close to infinity

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:341](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L341)

---

### minimal

▸ `Static` **minimal**(`x`): `IVarAD`

Encourage the input value to be close to negative infinity

#### Parameters

| Name | Type     |
| :--- | :------- |
| `x`  | `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:336](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L336)

---

### near

▸ `Static` **near**(`__namedParameters`, `__namedParameters`, `offset?`): `IVarAD`

Try to place shape `s1` near shape `s2` (putting their centers at the same place).

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `offset`            | `number`          | `10.0`        |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:481](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L481)

---

### nearPt

▸ `Static` **nearPt**(`__namedParameters`, `x`, `y`): `IVarAD`

Try to place shape `s1` near a location `(x, y)`.

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `__namedParameters` | [`string`, `any`] |
| `x`                 | `any`             |
| `y`                 | `any`             |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:491](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L491)

---

### nonDegenerateAngle

▸ `Static` **nonDegenerateAngle**(`__namedParameters`, `__namedParameters`, `__namedParameters`, `strength?`, `range?`): `IVarAD`

Repel the angle between the p1-p0 and p1-p2 away from 0 and 180 degrees.
NOTE: angles more than `range` degrees from 0 or 180 deg are considered satisfied.

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `strength`          | `number`          | `20`          |
| `range`             | `number`          | `10`          |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:499](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L499)

---

### pointLineDist

▸ `Static` **pointLineDist**(`point`, `__namedParameters`, `padding`): `IVarAD`

try to make distance between a point and a segment `s1` = padding.

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `point`             | `IVarAD`[]        |
| `__namedParameters` | [`string`, `any`] |
| `padding`           | `IVarAD`          |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:609](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L609)

---

### repel

▸ `Static` **repel**(`__namedParameters`, `__namedParameters`, `weight?`): `IVarAD`

Try to repel shapes `s1` and `s2` with some weight.

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `weight`            | `number`          | `10.0`        |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:453](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L453)

---

### repelPt

▸ `Static` **repelPt**(`weight`, `a`, `b`): `IVarAD`

Repel point `a` from another scalar `b` with weight `weight`.

#### Parameters

| Name     | Type       |
| :------- | :--------- |
| `weight` | `IVarAD`   |
| `a`      | `IVarAD`[] |
| `b`      | `IVarAD`[] |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:361](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L361)

---

### repelScalar

▸ `Static` **repelScalar**(`c`, `d`): `IVarAD`

Repel scalar `c` from another scalar `d`.

#### Parameters

| Name | Type                 |
| :--- | :------------------- |
| `c`  | `number` \| `IVarAD` |
| `d`  | `number` \| `IVarAD` |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:367](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L367)

---

### rightwards

▸ `Static` **rightwards**(`__namedParameters`, `__namedParameters`, `offset?`): `IVarAD`

Encourage the center of `sRight` to be rightwards to the center of `sLeft`.

#### Parameters

| Name                | Type              | Default value |
| :------------------ | :---------------- | :------------ |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `__namedParameters` | [`string`, `any`] | `undefined`   |
| `offset`            | `number`          | `100`         |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:428](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L428)

---

### sameCenter

▸ `Static` **sameCenter**(`__namedParameters`, `__namedParameters`): `IVarAD`

Encourage shape `s1` to have the same center position as shape `s2`.

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `__namedParameters` | [`string`, `any`] |
| `__namedParameters` | [`string`, `any`] |

#### Returns

`IVarAD`

#### Defined in

[contrib/Objectives.ts:444](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Objectives.ts#L444)

## Computation Functions

### MathE

▸ `Static` **MathE**(`_context`): `IFloatV`<`IVarAD`\>

Base e of the natural logarithm.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2942](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2942)

---

### MathPI

▸ `Static` **MathPI**(`_context`): `IFloatV`<`IVarAD`\>

Ratio of the circumference of a circle to its diameter.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2952](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2952)

---

### abs

▸ `Static` **abs**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return the absolute value of the number `x`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2874](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2874)

---

### acos

▸ `Static` **acos**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `acos(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1787](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1787)

---

### acosh

▸ `Static` **acosh**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `acosh(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1777](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1777)

---

### angleBetween

▸ `Static` **angleBetween**(`_context`, `u`, `v`): `IFloatV`<`IVarAD`\>

Return the unsigned angle between vectors `u, v`, in radians.
Assumes that both u and v have nonzero magnitude.
The returned value will be in the range [0,pi].

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `u`        | `IVarAD`[] |
| `v`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2292](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2292)

---

### angleFrom

▸ `Static` **angleFrom**(`_context`, `u`, `v`): `IFloatV`<`IVarAD`\>

Return the signed angle from vector `u` to vector `v`, in radians.
Assumes that both u and v are 2D vectors and have nonzero magnitude.
The returned value will be in the range [-pi,pi].

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `u`        | `IVarAD`[] |
| `v`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2305](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2305)

---

### angleOf

▸ `Static` **angleOf**(`_context`, `v`): `IFloatV`<`IVarAD`\>

Return the angle made by the vector `v` with the positive x-axis.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `v`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2933](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2933)

---

### arc

▸ `Static` **arc**(`_context`, `pathType`, `start`, `end`, `radius`, `rotation`, `largeArc`, `arcSweep`): `IPathDataV`<`IVarAD`\>

Return series of elements that can render an arc SVG. See: https://css-tricks.com/svg-path-syntax-illustrated-guide/ for the "A" spec.

**`returns:`** Elements that can be passed to Path shape spec to render an SVG arc

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `pathType` | `string`  |
| `start`    | `Pt2`     |
| `end`      | `Pt2`     |
| `radius`   | `Pt2`     |
| `rotation` | `IVarAD`  |
| `largeArc` | `IVarAD`  |
| `arcSweep` | `IVarAD`  |

#### Returns

`IPathDataV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2201](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2201)

---

### arcSweepFlag

▸ `Static` **arcSweepFlag**(`_context`, `__namedParameters`, `start`, `end`): `IFloatV`<`IVarAD`\>

Return 0 if direction of rotation is CCW, 1 if direction of rotation is CW.

**`returns:`** 0 or 1 depending on CCW or CW rotation

#### Parameters

| Name                | Type       |
| :------------------ | :--------- |
| `_context`          | `Context`  |
| `__namedParameters` | `IVarAD`[] |
| `start`             | `Pt2`      |
| `end`               | `Pt2`      |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2272](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2272)

---

### asin

▸ `Static` **asin**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `asin(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1797](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1797)

---

### asinh

▸ `Static` **asinh**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `asinh(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1807](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1807)

---

### atan

▸ `Static` **atan**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `atan(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1817](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1817)

---

### atan2

▸ `Static` **atan2**(`_context`, `x`, `y`): `IFloatV`<`IVarAD`\>

Return `atan2(y,x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |
| `y`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1827](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1827)

---

### atanh

▸ `Static` **atanh**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `atanh(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1837](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1837)

---

### average

▸ `Static` **average**(`_context`, `xs`): `IFloatV`<`IVarAD`\>

Return the average of the floats in the list `xs`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `xs`       | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2589](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2589)

---

### average2

▸ `Static` **average2**(`_context`, `x`, `y`): `IFloatV`<`IVarAD`\>

Return the average of floats `x` and `y`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |
| `y`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2579](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2579)

---

### barycenter

▸ `Static` **barycenter**(`_context`, `a`, `b`, `c`): `IVectorV`<`IVarAD`\>

Return the barycenter of the triangle with vertices `a`, `b`, `c`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `a`        | `IVarAD`[] |
| `b`        | `IVarAD`[] |
| `c`        | `IVarAD`[] |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2690](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2690)

---

### cbrt

▸ `Static` **cbrt**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `cbrt(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1847](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1847)

---

### ceil

▸ `Static` **ceil**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `ceil(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1857](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1857)

---

### checkFloat

▸ `Static` **checkFloat**(`x`): `void`

#### Parameters

| Name | Type  |
| :--- | :---- |
| `x`  | `any` |

#### Returns

`void`

#### Defined in

[contrib/Functions.ts:2985](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2985)

---

### chevron

▸ `Static` **chevron**(`_context`, `__namedParameters`, `padding`, `ticks`): `IPtListV`<`IVarAD`\>

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `_context`          | `Context`         |
| `__namedParameters` | [`string`, `any`] |
| `padding`           | `IVarAD`          |
| `ticks`             | `IVarAD`          |

#### Returns

`IPtListV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2385](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2385)

---

### circumcenter

▸ `Static` **circumcenter**(`_context`, `p`, `q`, `r`): `IVectorV`<`IVarAD`\>

Return the circumcenter of the triangle with vertices `p`, `q`, `r`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `p`        | `IVarAD`[] |
| `q`        | `IVarAD`[] |
| `r`        | `IVarAD`[] |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2706](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2706)

---

### circumradius

▸ `Static` **circumradius**(`_context`, `p`, `q`, `r`): `IFloatV`<`IVarAD`\>

Return the circumradius of the triangle with vertices `p`, `q`, `r`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `p`        | `IVarAD`[] |
| `q`        | `IVarAD`[] |
| `r`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2748](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2748)

---

### concat

▸ `Static` **concat**(`_context`, ...`strings`): `IStrV`

Concatenate a list of strings

#### Parameters

| Name         | Type       |
| :----------- | :--------- |
| `_context`   | `Context`  |
| `...strings` | `string`[] |

#### Returns

`IStrV`

#### Defined in

[contrib/Functions.ts:2072](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2072)

---

### cos

▸ `Static` **cos**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `cos(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1867](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1867)

---

### cosh

▸ `Static` **cosh**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `cosh(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1877](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1877)

---

### cross2D

▸ `Static` **cross2D**(`_context`, `u`, `v`): `IFloatV`<`IVarAD`\>

Return the 2D cross product of `u` and `v`, equal to the determinant of the 2x2 matrix [u v]

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `u`        | `IVarAD`[] |
| `v`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2316](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2316)

---

### cubicCurveFromPoints

▸ `Static` **cubicCurveFromPoints**(`_context`, `pathType`, `pts`): `IPathDataV`<`IVarAD`\>

Given a list of points `pts`, returns a `PathData` that can be used as input to the `Path` shape's `pathData` attribute to be drawn on the screen.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `pathType` | `string`  |
| `pts`      | `Pt2`[]   |

#### Returns

`IPathDataV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2125](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2125)

---

### derivative

▸ `Static` **derivative**(`_context`, `optDebugInfo`, `varName`): `IFloatV`<`any`\>

Return the derivative of `varName`.
NOTE: This is a special system function. Don't change it!

#### Parameters

| Name           | Type            |
| :------------- | :-------------- |
| `_context`     | `Context`       |
| `optDebugInfo` | `IOptDebugInfo` |
| `varName`      | `string`        |

#### Returns

`IFloatV`<`any`\>

#### Defined in

[contrib/Functions.ts:1612](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1612)

---

### derivativePreconditioned

▸ `Static` **derivativePreconditioned**(`_context`, `optDebugInfo`, `varName`): `IFloatV`<`any`\>

Return the L-BFGS preconditioned derivative of `varName`.
NOTE: This is a special system function. Don't change it!

#### Parameters

| Name           | Type            |
| :------------- | :-------------- |
| `_context`     | `Context`       |
| `optDebugInfo` | `IOptDebugInfo` |
| `varName`      | `string`        |

#### Returns

`IFloatV`<`any`\>

#### Defined in

[contrib/Functions.ts:1651](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1651)

---

### dot

▸ `Static` **dot**(`_context`, `v`, `w`): `IFloatV`<`IVarAD`\>

Return the dot product of `v` and `w`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `v`        | `IVarAD`[] |
| `w`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2037](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2037)

---

### exp

▸ `Static` **exp**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `exp(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1887](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1887)

---

### expm1

▸ `Static` **expm1**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `expm1(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1897](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1897)

---

### floor

▸ `Static` **floor**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `floor(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1907](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1907)

---

### furthestFrom

▸ `Static` **furthestFrom**(`pts`, `candidates`): `IVarAD`[]

Returns the point in `candidates` farthest from the points in `pts` (by sum).
Note: With the current autodiff system you cannot make discrete choices -- TODO debug why this code doesn't terminate in objective/gradient compilation
Do not use this!

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `pts`        | `IVarAD`[][] |
| `candidates` | `IVarAD`[][] |

#### Returns

`IVarAD`[]

#### Defined in

[contrib/Functions.ts:3042](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L3042)

---

### get

▸ `Static` **get**(`_context`, `xs`, `i`): `IFloatV`<`any`\>

Return `i`th element of list `xs, assuming lists only hold floats.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `xs`       | `IVarAD`[] |
| `i`        | `number`   |

#### Returns

`IFloatV`<`any`\>

#### Defined in

[contrib/Functions.ts:1691](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1691)

---

### getVar

▸ `Static` **getVar**(`_context`, `xs`, `i`): `IFloatV`<`any`\>

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `xs`       | `IVarAD`[] |
| `i`        | `IVarAD`   |

#### Returns

`IFloatV`<`any`\>

#### Defined in

[contrib/Functions.ts:1699](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1699)

---

### hsva

▸ `Static` **hsva**(`_context`, `h`, `s`, `v`, `a`): `IColorV`<`IVarAD`\>

Return a paint color of elements `h`, `s`, `v`, `a` (hue, saturation, value, opacity).

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `h`        | `IVarAD`  |
| `s`        | `IVarAD`  |
| `v`        | `IVarAD`  |
| `a`        | `IVarAD`  |

#### Returns

`IColorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1746](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1746)

---

### incenter

▸ `Static` **incenter**(`_context`, `p`, `q`, `r`): `IVectorV`<`IVarAD`\>

Return the incenter of the triangle with vertices `p`, `q`, `r`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `p`        | `IVarAD`[] |
| `q`        | `IVarAD`[] |
| `r`        | `IVarAD`[] |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2786](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2786)

---

### innerPointOffset

▸ `Static` **innerPointOffset**(`_context`, `pt1`, `pt2`, `pt3`, `padding`): `IVectorV`<`IVarAD`\>

Return a point located at `padding` of a line `s1` offset by `padding` in its normal direction (for making right angle markers).

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `pt1`      | `IVarAD`[] |
| `pt2`      | `IVarAD`[] |
| `pt3`      | `IVarAD`[] |
| `padding`  | `IVarAD`   |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2416](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2416)

---

### inradius

▸ `Static` **inradius**(`_context`, `p`, `q`, `r`): `IFloatV`<`IVarAD`\>

Return the inradius of the triangle with vertices `p`, `q`, `r`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `p`        | `IVarAD`[] |
| `q`        | `IVarAD`[] |
| `r`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2818](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2818)

---

### intersectingSideSize

▸ `Static` **intersectingSideSize**(`_context`, `start`, `end`, `__namedParameters`): `IFloatV`<`IVarAD`\>

Figure out which side of the rectangle `[t1, s1]` the `start->end` line is hitting, assuming that `start` is located at the rect's center and `end` is located outside the rectangle, and return the size of the OTHER side. Also assuming axis-aligned rectangle. This is used for arrow placement in box-and-arrow diagrams.

**`deprecated`** Don't use this function, it does not fully work

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `_context`          | `Context`         |
| `start`             | `VecAD`           |
| `end`               | `VecAD`           |
| `__namedParameters` | [`string`, `any`] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2518](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2518)

---

### length

▸ `Static` **length**(`_context`, `__namedParameters`): `IFloatV`<`IVarAD`\>

Return the length of the line or arrow shape `[type, props]`.

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `_context`          | `Context`         |
| `__namedParameters` | [`string`, `any`] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2061](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2061)

---

### lineLength

▸ `Static` **lineLength**(`_context`, `__namedParameters`): `IFloatV`<`IVarAD`\>

Return the length of the line or arrow shape `[type, props]`.

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `_context`          | `Context`         |
| `__namedParameters` | [`string`, `any`] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2047](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2047)

---

### lineLineIntersection

▸ `Static` **lineLineIntersection**(`_context`, `a0`, `a1`, `b0`, `b1`): `IVectorV`<`IVarAD`\>

Return the intersection of a line passing through
`a0` and `a1` with a line passing through `b0` and `b1`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `a0`       | `IVarAD`[] |
| `a1`       | `IVarAD`[] |
| `b0`       | `IVarAD`[] |
| `b1`       | `IVarAD`[] |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2328](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2328)

---

### log

▸ `Static` **log**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `log(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1917](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1917)

---

### log10

▸ `Static` **log10**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `log10(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1937](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1937)

---

### log1p

▸ `Static` **log1p**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `log1p(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1947](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1947)

---

### log2

▸ `Static` **log2**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `log2(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1927](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1927)

---

### makePath

▸ `Static` **makePath**(`_context`, `start`, `end`, `curveHeight`, `padding`): `IPathDataV`<`IVarAD`\>

#### Parameters

| Name          | Type                 |
| :------------ | :------------------- |
| `_context`    | `Context`            |
| `start`       | [`IVarAD`, `IVarAD`] |
| `end`         | [`IVarAD`, `IVarAD`] |
| `curveHeight` | `IVarAD`             |
| `padding`     | `IVarAD`             |

#### Returns

`IPathDataV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1582](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1582)

---

### max

▸ `Static` **max**(`_context`, `x`, `y`): `IFloatV`<`IVarAD`\>

Return the max of the numbers `x`, `y`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |
| `y`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2860](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2860)

---

### midpoint

▸ `Static` **midpoint**(`_context`, `start`, `end`): `IVectorV`<`IVarAD`\>

Return a point located at the midpoint between pts `start` and `end`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `start`    | `IVarAD`[] |
| `end`      | `IVarAD`[] |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2350](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2350)

---

### midpointOffset

▸ `Static` **midpointOffset**(`_context`, `__namedParameters`, `padding`): `ITupV`<`IVarAD`\>

Return a point located at the midpoint of a line `s1` but offset by `padding` in its normal direction (for labeling).

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `_context`          | `Context`         |
| `__namedParameters` | [`string`, `any`] |
| `padding`           | `IVarAD`          |

#### Returns

`ITupV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2365](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2365)

---

### min

▸ `Static` **min**(`_context`, `x`, `y`): `IFloatV`<`IVarAD`\>

Return the min of the numbers `x`, `y`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |
| `y`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2867](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2867)

---

### mul

▸ `Static` **mul**(`_context`, `m`, `v`): `IVectorV`<`IVarAD`\>

Multiply a matrix `m` and a vector `v` (where `v` is implicitly treated as a column vector).

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `_context` | `Context`    |
| `m`        | `IVarAD`[][] |
| `v`        | `IVarAD`[]   |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2671](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2671)

---

### none

▸ `Static` **none**(`_context`): `IColorV`<`any`\>

Return a paint of none (no paint)

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |

#### Returns

`IColorV`<`any`\>

#### Defined in

[contrib/Functions.ts:1765](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1765)

---

### norm

▸ `Static` **norm**(`_context`, `v`): `IFloatV`<`IVarAD`\>

Return the Euclidean norm of the vector `v`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `v`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2901](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2901)

---

### normalize

▸ `Static` **normalize**(`_context`, `v`): `IVectorV`<`IVarAD`\>

Return the normalized version of vector `v`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `v`        | `IVarAD`[] |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2082](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2082)

---

### normsq

▸ `Static` **normsq**(`_context`, `v`): `IFloatV`<`IVarAD`\>

Return the Euclidean norm squared of the vector `v`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `v`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2908](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2908)

---

### orientedSquare

▸ `Static` **orientedSquare**(`_context`, `__namedParameters`, `__namedParameters`, `intersection`, `len`): `IPathDataV`<`IVarAD`\>

Given two orthogonal segments that intersect at `intersection`, and a size `len`
return a path comprised of three points that describe a perpendicular mark at the angle where the segments intersect.

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `_context`          | `Context`         |
| `__namedParameters` | [`string`, `any`] |
| `__namedParameters` | [`string`, `any`] |
| `intersection`      | `Pt2`             |
| `len`               | `IVarAD`          |

#### Returns

`IPathDataV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2487](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2487)

---

### pathFromPoints

▸ `Static` **pathFromPoints**(`_context`, `pathType`, `pts`): `IPathDataV`<`IVarAD`\>

Given a list of points `pts`, returns a `PathData` that can be used as input to the `Path` shape's `pathData` attribute to be drawn on the screen.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `pathType` | `string`  |
| `pts`      | `Pt2`[]   |

#### Returns

`IPathDataV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2092](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2092)

---

### perpPathFlat

▸ `Static` **perpPathFlat**(`len`, `__namedParameters`, `__namedParameters`): [`VecAD`, `VecAD`, `VecAD`]

Given two perpendicular vectors `[startR, endR]` and `[startL, endL]`, return a path that describes a perpendicular mark between them.

#### Parameters

| Name                | Type               |
| :------------------ | :----------------- |
| `len`               | `IVarAD`           |
| `__namedParameters` | [`VecAD`, `VecAD`] |
| `__namedParameters` | [`VecAD`, `VecAD`] |

#### Returns

[`VecAD`, `VecAD`, `VecAD`]

#### Defined in

[contrib/Functions.ts:3001](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L3001)

---

### pow

▸ `Static` **pow**(`_context`, `x`, `y`): `IFloatV`<`IVarAD`\>

Return `pow(x,y)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |
| `y`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1957](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1957)

---

### ptOnLine

▸ `Static` **ptOnLine**(`_context`, `p1`, `p2`, `r`): `IVectorV`<`IVarAD`\>

Find the point that is located at dist r along a line between p1 and p2.

**`returns:`** vector representation of the point of intersection

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `p1`       | `IVarAD`[] |
| `p2`       | `IVarAD`[] |
| `r`        | `IVarAD`   |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2254](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2254)

---

### quadraticCurveFromPoints

▸ `Static` **quadraticCurveFromPoints**(`_context`, `pathType`, `pts`): `IPathDataV`<`IVarAD`\>

Given a list of points `pts`, returns a `PathData` that can be used as input to the `Path` shape's `pathData` attribute to be drawn on the screen.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `pathType` | `string`  |
| `pts`      | `Pt2`[]   |

#### Returns

`IPathDataV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2108](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2108)

---

### rgba

▸ `Static` **rgba**(`_context`, `r`, `g`, `b`, `a`): `IColorV`<`IVarAD`\>

Return a paint color of elements `r`, `g`, `b`, `a` (red, green, blue, opacity).

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `r`        | `IVarAD`  |
| `g`        | `IVarAD`  |
| `b`        | `IVarAD`  |
| `a`        | `IVarAD`  |

#### Returns

`IColorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1710](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1710)

---

### rot90

▸ `Static` **rot90**(`_context`, `v`): `Object`

Rotate a 2D vector `v` by 90 degrees counterclockwise.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `v`        | `IVarAD`[] |

#### Returns

`Object`

| Name       | Type       |
| :--------- | :--------- |
| `contents` | `IVarAD`[] |
| `tag`      | `string`   |

#### Defined in

[contrib/Functions.ts:2964](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2964)

---

### rot90v

▸ `Static` **rot90v**(`__namedParameters`): `IVarAD`[]

Rotate a 2D point `[x, y]` by 90 degrees clockwise.

#### Parameters

| Name                | Type       |
| :------------------ | :--------- |
| `__namedParameters` | `IVarAD`[] |

#### Returns

`IVarAD`[]

#### Defined in

[contrib/Functions.ts:3033](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L3033)

---

### rotateBy

▸ `Static` **rotateBy**(`_context`, `v`, `theta`): `Object`

Rotate a 2D vector `v` by theta degrees counterclockwise.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `v`        | `IVarAD`[] |
| `theta`    | `IVarAD`   |

#### Returns

`Object`

| Name       | Type       |
| :--------- | :--------- |
| `contents` | `IVarAD`[] |
| `tag`      | `string`   |

#### Defined in

[contrib/Functions.ts:2975](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2975)

---

### round

▸ `Static` **round**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `round(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1967](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1967)

---

### sampleColor

▸ `Static` **sampleColor**(`context`, `alpha`, `colorType`): `IColorV`<`IVarAD`\>

Sample a random color once, with opacity `alpha` and colorType `colorType` (`"rgb"` or `"hsv"`).

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `context`   | `Context` |
| `alpha`     | `IVarAD`  |
| `colorType` | `string`  |

#### Returns

`IColorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2610](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2610)

---

### selectColor

▸ `Static` **selectColor**(`_context`, `color1`, `color2`, `level`): `IColorV`<`IVarAD`\>

#### Parameters

| Name       | Type               |
| :--------- | :----------------- |
| `_context` | `Context`          |
| `color1`   | `Color`<`IVarAD`\> |
| `color2`   | `Color`<`IVarAD`\> |
| `level`    | `IVarAD`           |

#### Returns

`IColorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1726](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1726)

---

### setOpacity

▸ `Static` **setOpacity**(`_context`, `color`, `frac`): `IColorV`<`IVarAD`\>

Set the opacity of a color `color` to `frac`.

#### Parameters

| Name       | Type               |
| :--------- | :----------------- |
| `_context` | `Context`          |
| `color`    | `Color`<`IVarAD`\> |
| `frac`     | `IVarAD`           |

#### Returns

`IColorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2644](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2644)

---

### sign

▸ `Static` **sign**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `sign(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1977](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1977)

---

### sin

▸ `Static` **sin**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `sin(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1987](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1987)

---

### sinh

▸ `Static` **sinh**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `sinh(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:1997](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L1997)

---

### sqr

▸ `Static` **sqr**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return the square of the number `x`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2846](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2846)

---

### sqrt

▸ `Static` **sqrt**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return the square root of the number `x`. (NOTE: if `x < 0`, you may get `NaN`s)

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2853](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2853)

---

### tan

▸ `Static` **tan**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `tan(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2007](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2007)

---

### tanh

▸ `Static` **tanh**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `tanh(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2017](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2017)

---

### tickPlacement

▸ `Static` **tickPlacement**(`padding`, `numPts`, `multiplier?`): `IVarAD`[]

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `padding`    | `IVarAD` |
| `numPts`     | `IVarAD` |
| `multiplier` | `IVarAD` |

#### Returns

`IVarAD`[]

#### Defined in

[contrib/Functions.ts:3060](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L3060)

---

### ticksOnLine

▸ `Static` **ticksOnLine**(`_context`, `pt1`, `pt2`, `spacing`, `numTicks`, `tickLength`): `IPathDataV`<`IVarAD`\>

Create equally spaced tick marks centered at the midpoint of a line

#### Parameters

| Name         | Type       |
| :----------- | :--------- |
| `_context`   | `Context`  |
| `pt1`        | `IVarAD`[] |
| `pt2`        | `IVarAD`[] |
| `spacing`    | `IVarAD`   |
| `numTicks`   | `IVarAD`   |
| `tickLength` | `IVarAD`   |

#### Returns

`IPathDataV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2454](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2454)

---

### toDegrees

▸ `Static` **toDegrees**(`_context`, `theta`): `IFloatV`<`IVarAD`\>

Convert the angle `theta` from radians to degrees.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `theta`    | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2891](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2891)

---

### toPt

▸ `Static` **toPt**(`v`): `Pt2`

#### Parameters

| Name | Type    |
| :--- | :------ |
| `v`  | `VecAD` |

#### Returns

`Pt2`

#### Defined in

[contrib/Functions.ts:2991](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2991)

---

### toRadians

▸ `Static` **toRadians**(`_context`, `theta`): `IFloatV`<`IVarAD`\>

Convert the angle `theta` from degrees to radians.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `theta`    | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2881](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2881)

---

### triangle

▸ `Static` **triangle**(`_context`, `__namedParameters`, `__namedParameters`, `__namedParameters`): `IPathDataV`<`IVarAD`\>

Given three lines `l1, l2, l3` that already form a triangle, return a path that describes the triangle (which can then be filled, etc.).

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `_context`          | `Context` |
| `__namedParameters` | `any`     |
| `__namedParameters` | `any`     |
| `__namedParameters` | `any`     |

#### Returns

`IPathDataV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2556](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2556)

---

### trunc

▸ `Static` **trunc**(`_context`, `x`): `IFloatV`<`IVarAD`\>

Return `trunc(x)`.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `x`        | `IVarAD`  |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2027](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2027)

---

### unit

▸ `Static` **unit**(`_context`, `v`): `IVectorV`<`IVarAD`\>

Return the normalized version of vector `v`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `v`        | `IVarAD`[] |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2600](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2600)

---

### unitMark

▸ `Static` **unitMark**(`_context`, `__namedParameters`, `__namedParameters`, `t`, `padding`, `barSize`): `IPtListV`<`IVarAD`\>

Return two points parallel to line `s1` using its normal line `s2`.

#### Parameters

| Name                | Type              |
| :------------------ | :---------------- |
| `_context`          | `Context`         |
| `__namedParameters` | [`string`, `any`] |
| `__namedParameters` | [`string`, `any`] |
| `t`                 | `string`          |
| `padding`           | `IVarAD`          |
| `barSize`           | `IVarAD`          |

#### Returns

`IPtListV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2143](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2143)

---

### unitMark2

▸ `Static` **unitMark2**(`_context`, `__namedParameters`, `t`, `padding`, `size`): `IPtListV`<`IVarAD`\>

Return two points to "cap off" the line made in `unitMark`.

#### Parameters

| Name                | Type           |
| :------------------ | :------------- |
| `_context`          | `Context`      |
| `__namedParameters` | [`Pt2`, `Pt2`] |
| `t`                 | `string`       |
| `padding`           | `IVarAD`       |
| `size`              | `IVarAD`       |

#### Returns

`IPtListV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2169](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2169)

---

### vdist

▸ `Static` **vdist**(`_context`, `v`, `w`): `IFloatV`<`IVarAD`\>

Return the Euclidean distance between the vectors `v` and `w`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `v`        | `IVarAD`[] |
| `w`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2915](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2915)

---

### vdistsq

▸ `Static` **vdistsq**(`_context`, `v`, `w`): `IFloatV`<`IVarAD`\>

Return the Euclidean distance squared between the vectors `v` and `w`.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `v`        | `IVarAD`[] |
| `w`        | `IVarAD`[] |

#### Returns

`IFloatV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2926](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2926)

---

### vmul

▸ `Static` **vmul**(`_context`, `s`, `v`): `IVectorV`<`IVarAD`\>

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `_context` | `Context`  |
| `s`        | `IVarAD`   |
| `v`        | `IVarAD`[] |

#### Returns

`IVectorV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2919](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2919)

---

### wedge

▸ `Static` **wedge**(`_context`, `center`, `start`, `end`, `radius`, `rotation`, `largeArc`, `arcSweep`): `IPathDataV`<`IVarAD`\>

Return series of elements that render a "wedge", which is the same as the arc above except that it's connected to the circle center and filled

**`returns:`** Elements that can be passed to Path shape spec to render an SVG arc

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `_context` | `Context` |
| `center`   | `Pt2`     |
| `start`    | `Pt2`     |
| `end`      | `Pt2`     |
| `radius`   | `Pt2`     |
| `rotation` | `IVarAD`  |
| `largeArc` | `IVarAD`  |
| `arcSweep` | `IVarAD`  |

#### Returns

`IPathDataV`<`IVarAD`\>

#### Defined in

[contrib/Functions.ts:2228](https://github.com/penrose/penrose/blob/e7fa8b64f/packages/core/src/contrib/Functions.ts#L2228)
