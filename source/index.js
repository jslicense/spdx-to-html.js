var spdx = require('spdx');

function render(parsed) {
  if (parsed.license) {
    return (
      '<a href="http://spdx.org/licenses/' + parsed.license + '">' +
      parsed.license +
      '</a>'
    );
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
