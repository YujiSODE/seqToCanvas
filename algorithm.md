## Algorithm
Main algorithm is composed of 16 internal methods to draw on a canvas element.  
These methods take the form of function: `f(e1, e2, e3, e4)` where `f, e1, e2, e3` and `e4` are single hexadecimal digits.  
___
### seqToCanvas.js
16 methods are divided into four patterns: three linear patterns and areal one.  
These three linear patterns have five ways to draw as follows:  
1. To draw from `(e1, e2)` to `(e3, e4)`
2. To draw from `(x0, y0)` to `(x0+dx, y0+dy)` where `dx` and `dy` are defined by `e1, e2, e3` and `e4`
3. To draw from `(x0, y0)` to `(x0+dx, y0-dy)` where `dx` and `dy` are defined by `e1, e2, e3` and `e4`
4. To draw from `(x0, y0)` to `(x0-dx, y0+dy)` where `dx` and `dy` are defined by `e1, e2, e3` and `e4`
5. To draw from `(x0, y0)` to `(x0-dx, y0-dy)` where `dx` and `dy` are defined by `e1, e2, e3` and `e4`
___
