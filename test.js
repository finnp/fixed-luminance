var Color = require('color')
var fixed = require('./')
var fs = require('fs')

var testColor = [6, 3, 180]
var testColor2 = [70, 70, 210]

var out = fs.createWriteStream('test.html')

out.write('<div style="background-color: ' + format(fixed(testColor, 0)) + '"> fixed, color1</div>')
out.write('<div style="background-color: ' + format(testColor) + '"> color1</div>')
out.write('<div style="background-color: ' + Color().rgb(testColor).hue(0).rgbString() + '"> not fixed, color1</div>')
out.write('<br>')
out.write('<div style="background-color: ' + format(fixed(testColor2, 0)) + '"> fixed, color2</div>')
out.write('<div style="background-color: ' + format(testColor2) + '"> color2</div>')
out.write('<div style="background-color: ' + Color().rgb(testColor2).hue(0).rgbString() + '"> not fixed, color2</div>')

out.write('<br><br>')

out.write('<div style="background-color: ' + format(fixed(testColor2, 0)) + '; color: ' + format(fixed(testColor, 0)) + '"> fixed contrast</div>')
out.write('<div style="background-color: ' + format(testColor2) + '; color: ' + format(testColor) + '"> original contrast</div>')
out.write('<div style="background-color: ' + Color().rgb(testColor2).hue(0).rgbString() + '; color: ' + Color().rgb(testColor).hue(0).rgbString() + '"> not fixed contrast</div>')
out.end()

function format (rgb) {
  return Color().rgb(rgb).rgbString()
}
