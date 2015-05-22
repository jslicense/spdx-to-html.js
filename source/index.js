module.exports = function(expression) {
  return (
    '<a href="http://spdx.org/licenses/' + expression + '">' +
    expression +
    '</a>'
  );
};
