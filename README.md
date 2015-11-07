# points-to-slope-intercept

> Get slope-intercept equation from two points.
> y = m * x + n

## Install

This module requires node >=4.0.0

```
npm install --save points-to-slope-intercept
```

## Usage

```js
let equation = require('points-to-slope-intercept')(p1, p2);
```

## Example

```js
let equation = require('points-to-slope-intercept')(
    [2, 5],//point1
    [4, 9] //point2
);

// equation = { m: 2, n: 1 }
```
