```javascript
var spdxToHTML = require('spdx-to-html')
var assert = require('assert')

assert.deepEqual(
  spdxToHTML('InvalidExpression'),
  null)

assert.deepEqual(
  spdxToHTML('MIT'),
  '<a href="http://spdx.org/licenses/MIT">MIT</a>')

assert.deepEqual(
  spdxToHTML('(MPL-2.0 OR GPL-2.0+)'),
  ( '<a href="http://spdx.org/licenses/MPL-2.0">MPL-2.0</a>' +
    ' or ' +
    '<a href="http://spdx.org/licenses/GPL-2.0">GPL-2.0</a> or newer' ))

assert.deepEqual(
  spdxToHTML('LicenseRef-LICENSE'),
  'See LICENSE file for license information.')

assert.deepEqual(
  spdxToHTML('(GPL-2.0+ WITH Bison-exception-2.2)'),
  ( '<a href="http://spdx.org/licenses/GPL-2.0">GPL-2.0</a>' +
    ' or newer' +
    ' with Bison-exception-2.2' ))

assert.deepEqual(
  spdxToHTML('DocumentRef-spdx-tool-1.2:LicenseRef-No-Idea'),
  'The package has a valid, but unknown license identifier.')
```
