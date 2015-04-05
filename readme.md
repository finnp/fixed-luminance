# fixed-luminance
[![NPM](https://nodei.co/npm/fixed-luminance.png)](https://nodei.co/npm/fixed-luminance/)

Naive implementation for changing the hue of a color, but keep the perceived luminosity by changing the
lightness value accordingly.

```js
var fixedLuminance = require('fixed-luminance')

fixedLuminance([r, g, b], newHue) // returns [r, g, b] with new hue but the same relative luminance
```