/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
"use strict";function e(t,{instancePath:o="",parentData:s,parentDataProperty:r,rootData:n=t}={}){let c=null,a=0;const p=a;let l=!1;const i=a;if(a===i)if(t&&"object"==typeof t&&!Array.isArray(t)){const e=a;for(const e in t)if("contextRegExp"!==e&&"resourceRegExp"!==e){const t={params:{additionalProperty:e}};null===c?c=[t]:c.push(t),a++;break}if(e===a){if(void 0!==t.contextRegExp){const e=a;if(!(t.contextRegExp instanceof RegExp)){const e={params:{}};null===c?c=[e]:c.push(e),a++}var u=e===a}else u=!0;if(u)if(void 0!==t.resourceRegExp){const e=a;if(!(t.resourceRegExp instanceof RegExp)){const e={params:{}};null===c?c=[e]:c.push(e),a++}u=e===a}else u=!0}}else{const e={params:{type:"object"}};null===c?c=[e]:c.push(e),a++}var f=i===a;if(l=l||f,!l){const e=a;if(a===e)if(t&&"object"==typeof t&&!Array.isArray(t)){const e=a;for(const e in t)if("checkResource"!==e){const t={params:{additionalProperty:e}};null===c?c=[t]:c.push(t),a++;break}if(e===a&&void 0!==t.checkResource&&!(t.checkResource instanceof Function)){const e={params:{}};null===c?c=[e]:c.push(e),a++}}else{const e={params:{type:"object"}};null===c?c=[e]:c.push(e),a++}f=e===a,l=l||f}if(!l){const t={params:{}};return null===c?c=[t]:c.push(t),a++,e.errors=c,!1}return a=p,null!==c&&(p?c.length=p:c=null),e.errors=c,0===a}module.exports=e,module.exports.default=e;