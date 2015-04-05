// var relative = require('relative-luminance')
var Color = require('color')

module.exports = function (rgb, hue) {
  var targetLumi = Color().rgb(rgb).luminosity()

  var color = Color().rgb(rgb).hue(hue)
  var rounds = 255
  while (lumi !== targetLumi && rounds >= 0) {
    var lumi = color.luminosity()
    if (lumi > targetLumi) color.lightness(color.lightness() - 1)
    if (lumi < targetLumi) color.lightness(color.lightness() + 1)
    rounds--
  }
  return color.rgbArray()
}
