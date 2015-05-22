spdx-to-html
============

[![npm version](https://img.shields.io/npm/v/spdx-to-html.svg)](https://www.npmjs.com/package/spdx-to-html)
[![license](https://img.shields.io/badge/license-Apache--2.0-303284.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![build status](https://img.shields.io/travis/kemitchell/spdx-to-html.js.svg)](http://travis-ci.org/kemitchell/spdx-to-html.js)

Convert an SPDX expression to English text and links.

<!-- js
  // The examples below are run as tests.
  var spdxToHTML = require('./');
-->

```js
typeof spdxToHTML; // => 'function'

spdxToHTML('MIT'); // => '<a href="http://spdx.org/licenses/MIT">MIT</a>'

var choiceOfLicenses =
  '<a href="http://spdx.org/licenses/MPL-2.0">MPL-2.0</a>' +
  ' or ' +
  '<a href="http://spdx.org/licenses/GPL-2.0">GPL-2.0</a> or newer';
spdxToHTML('(MPL-2.0 OR GPL-2.0+)'); // => choiceOfLicenses

var seeLICENSE = 'See LICENSE file for license information.';
spdxToHTML('LicenseRef-LICENSE'); // => seeLICENSE

var withException =
  '<a href="http://spdx.org/licenses/GPL-2.0">GPL-2.0</a>' +
  ' or newer' +
  ' with Bison-exception-2.2';
spdxToHTML('(GPL-2.0+ WITH Bison-exception-2.2)'); // => withException

var unknown = 'The package has a valid, but unknown license identifier.';
spdxToHTML('DocumentRef-spdx-tool-1.2:LicenseRef-No-Idea'); // => unknown
```
