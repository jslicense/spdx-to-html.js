/*
Copyright 2016 Kyle E. Mitchell

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var parse = require('spdx-expression-parse')

function render (parsed) {
  if (parsed.license) {
    if (parsed.license.indexOf('LicenseRef') !== -1) {
      return 'License Reference "' + parsed.license + '"'
    } else {
      return (
        '<a href="https://spdx.org/licenses/' + parsed.license + '.html">' +
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
