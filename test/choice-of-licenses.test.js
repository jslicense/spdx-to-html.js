require('tap').test('multiple licenses', function(test) {
  test.equal(
    require('..')('(MPL-2.0 OR GPL-2.0)'),
    '<a href="http://spdx.org/licenses/MPL-2.0">MPL-2.0</a>' +
    ' or ' +
    '<a href="http://spdx.org/licenses/GPL-2.0">GPL-2.0</a>'
  );
  test.end();
});
