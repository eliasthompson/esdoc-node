'use strict';

exports.onHandleCode = function onHandleCode(ev) {
  ev.data.code = ev.data.code
    .replace(/module\s*\.\s*exports\s*=\s?/g,
             'export default ')
    .replace(/exports\s*\.\s*([_\d\w]+)\s*=\s*(class|function\*?)\s+\1/g,
             'export $2 $1')
    .replace(/exports\s*\.\s*([_\d\w]+)\s*=\s*\1\s*;/,
             'export { $1 };')
    .replace(/exports\s*\.\s*([_\d\w]+)\s*=/,
             'export let $1 =');
};