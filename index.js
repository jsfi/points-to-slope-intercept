/*
 * points-to-slope-intercept
 * https://github.com/jsfi/points-to-slope-intercept
 *
 * Copyright (c) 2015 Martin Sachse
 * Licensed under the MIT license.
 */

'use strict';

//m = (y1 - y2) / (x1 - x2)
module.exports = function(p1, p2) {
    let x1 = p1[0];
    let y1 = p1[1];
    let x2 = p2[0];
    let y2 = p2[1];

    if (x1 === x2) {
        return { y: x1 };
    }

    let m = (y1 - y2) / (x1 - x2);

    return {
        m: m,
        n: y1 - (m * x1)
    }
}
