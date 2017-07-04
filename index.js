var parse = require('spdx-expression-parse')

function render (parsed) {
  if (parsed.license) {
    if (parsed.license.indexOf('LicenseRef') !== -1) {
      return 'License Reference "' + parsed.license + '"'
    } else {
      return (
        '<a href="http://spdx.org/licenses/' + parsed.license + '.html">' +
          parsed.license +
        '</a>' +
        (parsed.plus ? ' or newer' : '') +
        (parsed.exception ? ' with ' + parsed.exception : '')
      )
    }
  } else {
    return (
      render(parsed.left) +
      ' ' + parsed.conjunction + ' ' +
      render(parsed.right)
    )
  }
}

module.exports = function (expression) {
  try {
    return render(parse(expression))
  } catch (e) {
    return null
  }
}
