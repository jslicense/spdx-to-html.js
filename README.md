```javascript
var spdxToHTML = require('spdx-to-html')
```

Returns null for invalid license expressions:

```javascript
var assert = require('assert')
assert.deepEqual(
  spdxToHTML('InvalidExpression'),
  null
)
```

Returns links for standard licenses on spdx.org:

```javascript
assert.deepEqual(
  spdxToHTML('MIT'),
  '<a href="https://spdx.org/licenses/MIT.html">MIT</a>'
)
```

For license references:

```javascript
assert.deepEqual(
  spdxToHTML('LicenseRef-123ABC'),
  'License Reference "LicenseRef-123ABC"'
)
```

Constructs English disjunctions for multilicensing expressions:

```javascript
assert.deepEqual(
  spdxToHTML('(MPL-2.0 OR GPL-2.0+)'),
  (
    '<a href="https://spdx.org/licenses/MPL-2.0.html">MPL-2.0</a>' +
    ' or ' +
    '<a href="https://spdx.org/licenses/GPL-2.0.html">GPL-2.0</a> or newer'
  )
)
```

Describes ranges and exceptions:

```javascript
assert.deepEqual(
  spdxToHTML('(GPL-2.0+ WITH Bison-exception-2.2)'),
  (
    '<a href="https://spdx.org/licenses/GPL-2.0.html">GPL-2.0</a>' +
    ' or newer' +
    ' with Bison-exception-2.2'
  )
)
```
