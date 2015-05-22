var spdx = require('spdx');

function render(parsed) {
  if (parsed.license) {
    if (parsed.license === 'LicenseRef-LICENSE') {
      return 'See LICENSE file for license information.';
    } else {
      return (
        '<a href="http://spdx.org/licenses/' + parsed.license + '">' +
          parsed.license +
        '</a>' +
        (parsed.plus ? ' or newer' : '')
      );
    }
  } else {
    return (
      render(parsed.left) +
      ' ' + parsed.conjunction + ' ' +
      render(parsed.right)
    );
  }
}

module.exports = function(expression) {
  var parsed = spdx.parse(expression);
  return render(parsed);
};
