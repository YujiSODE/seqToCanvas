## Algorithm
Main algorithm is composed of 16 internal methods to draw on a canvas element.  
These methods take the form of function: `f(e1, e2, e3, e4)` where `f, e1, e2, e3` and `e4` are single hexadecimal digits.  
___

### 1) Linear paths: `seqToCanvas.js`
16 methods are divided into four patterns: three linear patterns and areal one.  
These three linear patterns have five ways to draw as follows:  
1. To draw from `(e1, e2)` to `(e3, e4)`
2. To draw from `(x0, y0)` to `(x0+dx, y0+dy)` where `dx` and `dy` are defined by `e1, e2, e3` and `e4`
3. To draw from `(x0, y0)` to `(x0+dx, y0-dy)` where `dx` and `dy` are defined by `e1, e2, e3` and `e4`
4. To draw from `(x0, y0)` to `(x0-dx, y0+dy)` where `dx` and `dy` are defined by `e1, e2, e3` and `e4`
5. To draw from `(x0, y0)` to `(x0-dx, y0-dy)` where `dx` and `dy` are defined by `e1, e2, e3` and `e4`
___

### 2) Cascading arc paths `seqToCanvas_arc.js`
[`v2.0 beta+`]  
16 methods are divided into two patterns: arc path patterns and areal one.

#### arc path
A single arc path is defined as follows:  
1. first control point: `(Xc1,Yc1) = ((e1+e3)/2, (e2+e4)/2)`
2. second control point: `(Xc2,Yc2) = ((e1+e3)/4, (e2+e4)/4)`
3. radius: `r = (e1+e2+e3+e4)/8`

Arc path patterns have two ways to draw as follows:  
**1. when there is no path**  
    It starts a new arc path.  
    
**2. when there is opened path**  
    If it satisfies condition `f0<f||!(f0%(f+1)!=0)`, it closes the current path.  
    `f` is the current method which is called after methhod `f0`.  
    If it doesn't satisfies above condition, it adds a arc path to the current path.
___

### 3) Dotted line path: `seqToCanvas_dot.js`
[`v3.0 beta+`]  
16 methods are divided into two patterns: `f=0` or `f>0`.  
`f(e1, e2, e3, e4)` draws dotted line from `(e1, e2)` to `(e3, e4)`.

**1. when `f=0`**  
  Dotted line size is constant.

**2. when `f>0`**  
  Dotted line size is based on `1+sin(x*π/f)`.
___
