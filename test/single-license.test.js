require('tap').test('single license', function(test) {
  test.equal(
    require('..')('MIT'),
    '<a href="http://spdx.org/licenses/MIT">MIT</a>'
  );
  test.end();
});
