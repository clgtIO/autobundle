var lt=Object.create;var ee=Object.defineProperty;var vt=Object.getOwnPropertyDescriptor;var yt=Object.getOwnPropertyNames;var ht=Object.getPrototypeOf,pt=Object.prototype.hasOwnProperty;var he=c=>ee(c,"__esModule",{value:!0});var pe=(c,_)=>()=>(_||c((_={exports:{}}).exports,_),_.exports);var G=(c,_,O)=>{if(_&&typeof _=="object"||typeof _=="function")for(let o of yt(_))!pt.call(c,o)&&o!=="default"&&ee(c,o,{get:()=>_[o],enumerable:!(O=vt(_,o))||O.enumerable});return c},dt=c=>G(he(ee(c!=null?lt(ht(c)):{},"default",c&&c.__esModule&&"default"in c?{get:()=>c.default,enumerable:!0}:{value:c,enumerable:!0})),c);var Ne=pe((gt,q)=>{/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var de,_e,ge,we,be,me,je,Oe,Pe,H,te,Re,Ee,Ie,K,Se,Ce,Te,Ae,Ke,Me,De,ke,L;(function(c){var _=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:{};typeof define=="function"&&define.amd?define("tslib",["exports"],function(o){c(O(_,O(o)))}):typeof q=="object"&&typeof q.exports=="object"?c(O(_,O(q.exports))):c(O(_));function O(o,i){return o!==_&&(typeof Object.create=="function"?Object.defineProperty(o,"__esModule",{value:!0}):o.__esModule=!0),function(u,s){return o[u]=i?i(u,s):s}}})(function(c){var _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(o[u]=i[u])};de=function(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");_(o,i);function u(){this.constructor=o}o.prototype=i===null?Object.create(i):(u.prototype=i.prototype,new u)},_e=Object.assign||function(o){for(var i,u=1,s=arguments.length;u<s;u++){i=arguments[u];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(o[l]=i[l])}return o},ge=function(o,i){var u={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.indexOf(s)<0&&(u[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(o);l<s.length;l++)i.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(o,s[l])&&(u[s[l]]=o[s[l]]);return u},we=function(o,i,u,s){var l=arguments.length,f=l<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,u):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(o,i,u,s);else for(var g=o.length-1;g>=0;g--)(d=o[g])&&(f=(l<3?d(f):l>3?d(i,u,f):d(i,u))||f);return l>3&&f&&Object.defineProperty(i,u,f),f},be=function(o,i){return function(u,s){i(u,s,o)}},me=function(o,i){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,i)},je=function(o,i,u,s){function l(f){return f instanceof u?f:new u(function(d){d(f)})}return new(u||(u=Promise))(function(f,d){function g(j){try{p(s.next(j))}catch(E){d(E)}}function P(j){try{p(s.throw(j))}catch(E){d(E)}}function p(j){j.done?f(j.value):l(j.value).then(g,P)}p((s=s.apply(o,i||[])).next())})},Oe=function(o,i){var u={label:0,sent:function(){if(f[0]&1)throw f[1];return f[1]},trys:[],ops:[]},s,l,f,d;return d={next:g(0),throw:g(1),return:g(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function g(p){return function(j){return P([p,j])}}function P(p){if(s)throw new TypeError("Generator is already executing.");for(;u;)try{if(s=1,l&&(f=p[0]&2?l.return:p[0]?l.throw||((f=l.return)&&f.call(l),0):l.next)&&!(f=f.call(l,p[1])).done)return f;switch(l=0,f&&(p=[p[0]&2,f.value]),p[0]){case 0:case 1:f=p;break;case 4:return u.label++,{value:p[1],done:!1};case 5:u.label++,l=p[1],p=[0];continue;case 7:p=u.ops.pop(),u.trys.pop();continue;default:if(f=u.trys,!(f=f.length>0&&f[f.length-1])&&(p[0]===6||p[0]===2)){u=0;continue}if(p[0]===3&&(!f||p[1]>f[0]&&p[1]<f[3])){u.label=p[1];break}if(p[0]===6&&u.label<f[1]){u.label=f[1],f=p;break}if(f&&u.label<f[2]){u.label=f[2],u.ops.push(p);break}f[2]&&u.ops.pop(),u.trys.pop();continue}p=i.call(o,u)}catch(j){p=[6,j],l=0}finally{s=f=0}if(p[0]&5)throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},Pe=function(o,i){for(var u in o)u!=="default"&&!Object.prototype.hasOwnProperty.call(i,u)&&L(i,o,u)},L=Object.create?function(o,i,u,s){s===void 0&&(s=u),Object.defineProperty(o,s,{enumerable:!0,get:function(){return i[u]}})}:function(o,i,u,s){s===void 0&&(s=u),o[s]=i[u]},H=function(o){var i=typeof Symbol=="function"&&Symbol.iterator,u=i&&o[i],s=0;if(u)return u.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&s>=o.length&&(o=void 0),{value:o&&o[s++],done:!o}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")},te=function(o,i){var u=typeof Symbol=="function"&&o[Symbol.iterator];if(!u)return o;var s=u.call(o),l,f=[],d;try{for(;(i===void 0||i-- >0)&&!(l=s.next()).done;)f.push(l.value)}catch(g){d={error:g}}finally{try{l&&!l.done&&(u=s.return)&&u.call(s)}finally{if(d)throw d.error}}return f},Re=function(){for(var o=[],i=0;i<arguments.length;i++)o=o.concat(te(arguments[i]));return o},Ee=function(){for(var o=0,i=0,u=arguments.length;i<u;i++)o+=arguments[i].length;for(var s=Array(o),l=0,i=0;i<u;i++)for(var f=arguments[i],d=0,g=f.length;d<g;d++,l++)s[l]=f[d];return s},Ie=function(o,i,u){if(u||arguments.length===2)for(var s=0,l=i.length,f;s<l;s++)(f||!(s in i))&&(f||(f=Array.prototype.slice.call(i,0,s)),f[s]=i[s]);return o.concat(f||Array.prototype.slice.call(i))},K=function(o){return this instanceof K?(this.v=o,this):new K(o)},Se=function(o,i,u){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=u.apply(o,i||[]),l,f=[];return l={},d("next"),d("throw"),d("return"),l[Symbol.asyncIterator]=function(){return this},l;function d(b){s[b]&&(l[b]=function(R){return new Promise(function(C,z){f.push([b,R,C,z])>1||g(b,R)})})}function g(b,R){try{P(s[b](R))}catch(C){E(f[0][3],C)}}function P(b){b.value instanceof K?Promise.resolve(b.value.v).then(p,j):E(f[0][2],b)}function p(b){g("next",b)}function j(b){g("throw",b)}function E(b,R){b(R),f.shift(),f.length&&g(f[0][0],f[0][1])}},Ce=function(o){var i,u;return i={},s("next"),s("throw",function(l){throw l}),s("return"),i[Symbol.iterator]=function(){return this},i;function s(l,f){i[l]=o[l]?function(d){return(u=!u)?{value:K(o[l](d)),done:l==="return"}:f?f(d):d}:f}},Te=function(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=o[Symbol.asyncIterator],u;return i?i.call(o):(o=typeof H=="function"?H(o):o[Symbol.iterator](),u={},s("next"),s("throw"),s("return"),u[Symbol.asyncIterator]=function(){return this},u);function s(f){u[f]=o[f]&&function(d){return new Promise(function(g,P){d=o[f](d),l(g,P,d.done,d.value)})}}function l(f,d,g,P){Promise.resolve(P).then(function(p){f({value:p,done:g})},d)}},Ae=function(o,i){return Object.defineProperty?Object.defineProperty(o,"raw",{value:i}):o.raw=i,o};var O=Object.create?function(o,i){Object.defineProperty(o,"default",{enumerable:!0,value:i})}:function(o,i){o.default=i};Ke=function(o){if(o&&o.__esModule)return o;var i={};if(o!=null)for(var u in o)u!=="default"&&Object.prototype.hasOwnProperty.call(o,u)&&L(i,o,u);return O(i,o),i},Me=function(o){return o&&o.__esModule?o:{default:o}},De=function(o,i,u,s){if(u==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof i=="function"?o!==i||!s:!i.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return u==="m"?s:u==="a"?s.call(o):s?s.value:i.get(o)},ke=function(o,i,u,s,l){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof i=="function"?o!==i||!l:!i.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?l.call(o,u):l?l.value=u:i.set(o,u),u},c("__extends",de),c("__assign",_e),c("__rest",ge),c("__decorate",we),c("__param",be),c("__metadata",me),c("__awaiter",je),c("__generator",Oe),c("__exportStar",Pe),c("__createBinding",L),c("__values",H),c("__read",te),c("__spread",Re),c("__spreadArrays",Ee),c("__spreadArray",Ie),c("__await",K),c("__asyncGenerator",Se),c("__asyncDelegator",Ce),c("__asyncValues",Te),c("__makeTemplateObject",Ae),c("__importStar",Ke),c("__importDefault",Me),c("__classPrivateFieldGet",De),c("__classPrivateFieldSet",ke)})});var Fe=pe((W,Be)=>{(function(c,_){typeof W=="object"&&typeof Be!="undefined"?_(W,Ne()):typeof define=="function"&&define.amd?define(["exports","tslib"],_):(c=c||self,_(c["injection-js"]={},c.tslib))})(W,function(c,_){"use strict";var O;typeof window=="undefined"?typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?O=self:O=global:O=window;var o=O;function i(t){if(typeof t=="string")return t;if(t==null)return""+t;if(t.overriddenName)return""+t.overriddenName;if(t.name)return""+t.name;var e=t.toString(),r=e.indexOf(`
`);return r===-1?e:e.substring(0,r)}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var u=0,s=o.Reflect;function l(t){return typeof t=="function"&&t.hasOwnProperty("annotation")&&(t=t.annotation),t}function f(t,e){if(t===Object||t===String||t===Function||t===Number||t===Array)throw new Error("Can not use native "+i(t)+" as constructor");if(typeof t=="function")return t;if(Array.isArray(t)){var r=t,n=r.length-1,a=t[n];if(typeof a!="function")throw new Error("Last position of Class method array must be Function in key "+e+" was '"+i(a)+"'");if(n!==a.length)throw new Error("Number of annotations ("+n+") does not match number of arguments ("+a.length+") in the function: "+i(a));for(var v=[],h=0,y=r.length-1;h<y;h++){var w=[];v.push(w);var m=r[h];if(Array.isArray(m))for(var S=0;S<m.length;S++)w.push(l(m[S]));else typeof m=="function"?w.push(l(m)):w.push(m)}return s.defineMetadata("parameters",v,a),a}throw new Error("Only Function or Array is supported in Class definition for key '"+e+"' is '"+i(t)+"'")}function d(t){var e=f(t.hasOwnProperty("constructor")?t.constructor:void 0,"constructor"),r=e.prototype;if(t.hasOwnProperty("extends"))if(typeof t.extends=="function")e.prototype=r=Object.create(t.extends.prototype);else throw new Error("Class definition 'extends' property must be a constructor function was: "+i(t.extends));for(var n in t)n!=="extends"&&n!=="prototype"&&t.hasOwnProperty(n)&&(r[n]=f(t[n],n));this&&this.annotations instanceof Array&&s.defineMetadata("annotations",this.annotations,e);var a=e.name;return(!a||a==="constructor")&&(e.overriddenName="class"+u++),e}function g(t,e,r,n){var a=P([e]);function v(h){if(!(s&&s.getOwnMetadata))throw"reflect-metadata shim is required when using class decorators";if(this instanceof v)return a.call(this,h),this;var y=new v(h),w=typeof this=="function"&&Array.isArray(this.annotations)?this.annotations:[];w.push(y);var m=function(U){var T=s.getOwnMetadata("annotations",U)||[];return T.push(y),s.defineMetadata("annotations",T,U),U};return m.annotations=w,m.Class=d,n&&n(m),m}return r&&(v.prototype=Object.create(r.prototype)),v.prototype.toString=function(){return"@"+t},v.annotationCls=v,v}function P(t){return function(){for(var r=this,n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];t.forEach(function(v,h){var y=n[h];if(Array.isArray(v))r[v[0]]=y===void 0?v[1]:y;else for(var w in v)r[w]=y&&y.hasOwnProperty(w)?y[w]:v[w]})}}function p(t,e,r){var n=P(e);function a(){for(var v,h=[],y=0;y<arguments.length;y++)h[y]=arguments[y];if(this instanceof a)return n.apply(this,h),this;var w=new((v=a).bind.apply(v,_.__spreadArrays([void 0],h)));return m.annotation=w,m;function m(S,U,T){for(var A=s.getOwnMetadata("parameters",S)||[];A.length<=T;)A.push(null);return A[T]=A[T]||[],A[T].push(w),s.defineMetadata("parameters",A,S),S}}return r&&(a.prototype=Object.create(r.prototype)),a.prototype.toString=function(){return"@"+t},a.annotationCls=a,a}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var j=p("Inject",[["token",void 0]]),E=p("Optional",[]),b=g("Injectable",[]),R=p("Self",[]),C=p("SkipSelf",[]),z=p("Host",[]);/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Y(t){return t.__forward_ref__=Y,t.toString=function(){return i(this())},t}function D(t){return typeof t=="function"&&t.hasOwnProperty("__forward_ref__")&&t.__forward_ref__===Y?t():t}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var k=new Object,J=k,Ue=function(){function t(){}return t.prototype.get=function(e,r){if(r===void 0&&(r=k),r===k)throw new Error("No provider for "+i(e)+"!");return r},t}(),re=function(){function t(){}return t.THROW_IF_NOT_FOUND=k,t.NULL=new Ue,t}();/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Q="ngOriginalError";function Ge(t){return t[Q]}function He(t,e){var r=t+" caused by: "+(e instanceof Error?e.message:e),n=Error(r);return n[Q]=e,n}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Le(t){for(var e=[],r=0;r<t.length;++r){if(e.indexOf(t[r])>-1)return e.push(t[r]),e;e.push(t[r])}return e}function X(t){if(t.length>1){var e=Le(t.slice().reverse()),r=e.map(function(n){return i(n.token)});return" ("+r.join(" -> ")+")"}return""}function Z(t,e,r,n){var a=n?He("",n):Error();return a.addKey=qe,a.keys=[e],a.injectors=[t],a.constructResolvingMessage=r,a.message=a.constructResolvingMessage(),a[Q]=n,a}function qe(t,e){this.injectors.push(t),this.keys.push(e),this.message=this.constructResolvingMessage()}function We(t,e){return Z(t,e,function(){var r=i(this.keys[0].token);return"No provider for "+r+"!"+X(this.keys)})}function ze(t,e){return Z(t,e,function(){return"Cannot instantiate cyclic dependency!"+X(this.keys)})}function Ye(t,e,r,n){return Z(t,n,function(){var a=i(this.keys[0].token);return Ge(this).message+": Error during instantiation of "+a+"!"+X(this.keys)+"."},e)}function Je(t){return Error("Invalid provider - only instances of Provider and Type are allowed, got: "+t)}function ne(t,e){for(var r=[],n=0,a=e.length;n<a;n++){var v=e[n];!v||v.length===0?r.push("?"):r.push(v.map(i).join(" "))}return Error("Cannot resolve all parameters for '"+i(t)+"'("+r.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+i(t)+"' is decorated with Injectable.")}function Qe(t){return Error("Index "+t+" is out-of-bounds.")}function Xe(t,e){return Error("Cannot mix multi providers and regular providers, got: "+t+" "+e)}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var I=function(){function t(e,r){if(this.token=e,this.id=r,!e)throw new Error("Token must be defined!")}return Object.defineProperty(t.prototype,"displayName",{get:function(){return i(this.token)},enumerable:!1,configurable:!0}),t.get=function(e){return oe.get(D(e))},Object.defineProperty(t,"numberOfKeys",{get:function(){return oe.numberOfKeys},enumerable:!1,configurable:!0}),t}(),Ze=function(){function t(){this._allKeys=new Map}return t.prototype.get=function(e){if(e instanceof I)return e;if(this._allKeys.has(e))return this._allKeys.get(e);var r=new I(e,I.numberOfKeys);return this._allKeys.set(e,r),r},Object.defineProperty(t.prototype,"numberOfKeys",{get:function(){return this._allKeys.size},enumerable:!1,configurable:!0}),t}(),oe=new Ze;/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var N=Function;function B(t){return typeof t=="function"}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var $e=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/,Ve=function(){function t(e){this._reflect=e||o.Reflect}return t.prototype.isReflectionEnabled=function(){return!0},t.prototype.factory=function(e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new(e.bind.apply(e,_.__spreadArrays([void 0],r)))}},t.prototype._zipTypesAndAnnotations=function(e,r){var n;typeof e=="undefined"?n=new Array(r.length):n=new Array(e.length);for(var a=0;a<n.length;a++)typeof e=="undefined"?n[a]=[]:e[a]!=Object?n[a]=[e[a]]:n[a]=[],r&&r[a]!=null&&(n[a]=n[a].concat(r[a]));return n},t.prototype._ownParameters=function(e,r){if($e.exec(e.toString()))return null;if(e.parameters&&e.parameters!==r.parameters)return e.parameters;var n=e.ctorParameters;if(n&&n!==r.ctorParameters){var a=typeof n=="function"?n():n,v=a.map(function(y){return y&&y.type}),h=a.map(function(y){return y&&$(y.decorators)});return this._zipTypesAndAnnotations(v,h)}if(this._reflect!=null&&this._reflect.getOwnMetadata!=null){var h=this._reflect.getOwnMetadata("parameters",e),v=this._reflect.getOwnMetadata("design:paramtypes",e);if(v||h)return this._zipTypesAndAnnotations(v,h)}return new Array(e.length).fill(void 0)},t.prototype.parameters=function(e){if(!B(e))return[];var r=V(e),n=this._ownParameters(e,r);return!n&&r!==Object&&(n=this.parameters(r)),n||[]},t.prototype._ownAnnotations=function(e,r){if(e.annotations&&e.annotations!==r.annotations){var n=e.annotations;return typeof n=="function"&&n.annotations&&(n=n.annotations),n}return e.decorators&&e.decorators!==r.decorators?$(e.decorators):this._reflect&&this._reflect.getOwnMetadata?this._reflect.getOwnMetadata("annotations",e):null},t.prototype.annotations=function(e){if(!B(e))return[];var r=V(e),n=this._ownAnnotations(e,r)||[],a=r!==Object?this.annotations(r):[];return a.concat(n)},t.prototype._ownPropMetadata=function(e,r){if(e.propMetadata&&e.propMetadata!==r.propMetadata){var n=e.propMetadata;return typeof n=="function"&&n.propMetadata&&(n=n.propMetadata),n}if(e.propDecorators&&e.propDecorators!==r.propDecorators){var a=e.propDecorators,v={};return Object.keys(a).forEach(function(h){v[h]=$(a[h])}),v}return this._reflect&&this._reflect.getOwnMetadata?this._reflect.getOwnMetadata("propMetadata",e):null},t.prototype.propMetadata=function(e){if(!B(e))return{};var r=V(e),n={};if(r!==Object){var a=this.propMetadata(r);Object.keys(a).forEach(function(h){n[h]=a[h]})}var v=this._ownPropMetadata(e,r);return v&&Object.keys(v).forEach(function(h){var y=[];n.hasOwnProperty(h)&&y.push.apply(y,n[h]),y.push.apply(y,v[h]),n[h]=y}),n},t.prototype.hasLifecycleHook=function(e,r){return e instanceof N&&r in e.prototype},t.prototype.getter=function(e){return new Function("o","return o."+e+";")},t.prototype.setter=function(e){return new Function("o","v","return o."+e+" = v;")},t.prototype.method=function(e){var r="if (!o."+e+`) throw new Error('"`+e+`" is undefined');
        return o.`+e+".apply(o, args);";return new Function("o","args",r)},t.prototype.importUri=function(e){return typeof e=="object"&&e.filePath?e.filePath:"./"+i(e)},t.prototype.resourceUri=function(e){return"./"+i(e)},t.prototype.resolveIdentifier=function(e,r,n,a){return a},t.prototype.resolveEnum=function(e,r){return e[r]},t}();function $(t){return t?t.map(function(e){var r=e.type,n=r.annotationCls,a=e.args?e.args:[];return new(n.bind.apply(n,_.__spreadArrays([void 0],a)))}):[]}function V(t){if(!t.prototype)return Object;var e=Object.getPrototypeOf(t.prototype),r=e?e.constructor:null;return r||Object}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var xe=function(){function t(){}return t}();/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var et=function(t){_.__extends(e,t);function e(r){var n=t.call(this)||this;return n.reflectionCapabilities=r,n}return e.prototype.updateCapabilities=function(r){this.reflectionCapabilities=r},e.prototype.factory=function(r){return this.reflectionCapabilities.factory(r)},e.prototype.parameters=function(r){return this.reflectionCapabilities.parameters(r)},e.prototype.annotations=function(r){return this.reflectionCapabilities.annotations(r)},e.prototype.propMetadata=function(r){return this.reflectionCapabilities.propMetadata(r)},e.prototype.hasLifecycleHook=function(r,n){return this.reflectionCapabilities.hasLifecycleHook(r,n)},e.prototype.getter=function(r){return this.reflectionCapabilities.getter(r)},e.prototype.setter=function(r){return this.reflectionCapabilities.setter(r)},e.prototype.method=function(r){return this.reflectionCapabilities.method(r)},e.prototype.importUri=function(r){return this.reflectionCapabilities.importUri(r)},e.prototype.resourceUri=function(r){return this.reflectionCapabilities.resourceUri(r)},e.prototype.resolveIdentifier=function(r,n,a,v){return this.reflectionCapabilities.resolveIdentifier(r,n,a,v)},e.prototype.resolveEnum=function(r,n){return this.reflectionCapabilities.resolveEnum(r,n)},e}(xe);/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var ie=new et(new Ve);/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var ae=function(){function t(e){this._desc=e}return t.prototype.toString=function(){return"Token "+this._desc},t}(),ue=function(t){_.__extends(e,t);function e(r){return t.call(this,r)||this}return e.prototype.toString=function(){return"InjectionToken "+this._desc},e}(ae);/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var se=function(){function t(e,r,n){this.key=e,this.optional=r,this.visibility=n}return t.fromKey=function(e){return new t(e,!1,null)},t}(),tt=[],fe=function(){function t(e,r,n){this.key=e,this.resolvedFactories=r,this.multiProvider=n}return Object.defineProperty(t.prototype,"resolvedFactory",{get:function(){return this.resolvedFactories[0]},enumerable:!1,configurable:!0}),t}(),ce=function(){function t(e,r){this.factory=e,this.dependencies=r}return t}();function rt(t){var e,r;if(t.useClass){var n=D(t.useClass);e=ie.factory(n),r=ve(n)}else t.useExisting?(e=function(a){return a},r=[se.fromKey(I.get(t.useExisting))]):t.useFactory?(e=t.useFactory,r=at(t.useFactory,t.deps)):(e=function(){return t.useValue},r=tt);return new ce(e,r)}function nt(t){return new fe(I.get(t.provide),[rt(t)],t.multi||!1)}function ot(t){var e=le(t,[]),r=e.map(nt),n=it(r,new Map);return Array.from(n.values())}function it(t,e){for(var r=0;r<t.length;r++){var n=t[r],a=e.get(n.key.id);if(a){if(n.multiProvider!==a.multiProvider)throw Xe(a,n);if(n.multiProvider)for(var v=0;v<n.resolvedFactories.length;v++)a.resolvedFactories.push(n.resolvedFactories[v]);else e.set(n.key.id,n)}else{var h=void 0;n.multiProvider?h=new fe(n.key,n.resolvedFactories.slice(),n.multiProvider):h=n,e.set(n.key.id,h)}}return e}function le(t,e){return t.forEach(function(r){if(r instanceof N)e.push({provide:r,useClass:r});else if(r&&typeof r=="object"&&r.provide!==void 0)e.push(r);else if(r instanceof Array)le(r,e);else throw Je(r)}),e}function at(t,e){if(e){var r=e.map(function(n){return[n]});return e.map(function(n){return ye(t,n,r)})}else return ve(t)}function ve(t){var e=ie.parameters(t);if(!e)return[];if(e.some(function(r){return r==null}))throw ne(t,e);return e.map(function(r){return ye(t,r,e)})}function ye(t,e,r){var n=null,a=!1;if(!Array.isArray(e))return e instanceof j?x(e.token,a,null):x(e,a,null);for(var v=null,h=0;h<e.length;++h){var y=e[h];y instanceof N?n=y:y instanceof j?n=y.token:y instanceof E?a=!0:y instanceof R||y instanceof C?v=y:y instanceof ue&&(n=y)}if(n=D(n),n!=null)return x(n,a,v);throw ne(t,r)}function x(t,e,r){return new se(I.get(t),e,r)}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var M=new Object,F=function(){function t(){}return t.resolve=function(e){return ot(e)},t.resolveAndCreate=function(e,r){var n=t.resolve(e);return t.fromResolvedProviders(n,r)},t.fromResolvedProviders=function(e,r){return new ut(e,r)},t}(),ut=function(){function t(e,r){this._constructionCounter=0,this._providers=e,this._parent=r||null;var n=e.length;this.keyIds=new Array(n),this.objs=new Array(n);for(var a=0;a<n;a++)this.keyIds[a]=e[a].key.id,this.objs[a]=M}return t.prototype.get=function(e,r){return r===void 0&&(r=J),this._getByKey(I.get(e),null,r)},Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),t.prototype.resolveAndCreateChild=function(e){var r=F.resolve(e);return this.createChildFromResolved(r)},t.prototype.createChildFromResolved=function(e){var r=new t(e);return r._parent=this,r},t.prototype.resolveAndInstantiate=function(e){return this.instantiateResolved(F.resolve([e])[0])},t.prototype.instantiateResolved=function(e){return this._instantiateProvider(e)},t.prototype.getProviderAtIndex=function(e){if(e<0||e>=this._providers.length)throw Qe(e);return this._providers[e]},t.prototype._new=function(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw ze(this,e.key);return this._instantiateProvider(e)},t.prototype._getMaxNumberOfObjects=function(){return this.objs.length},t.prototype._instantiateProvider=function(e){if(e.multiProvider){for(var r=new Array(e.resolvedFactories.length),n=0;n<e.resolvedFactories.length;++n)r[n]=this._instantiate(e,e.resolvedFactories[n]);return r}else return this._instantiate(e,e.resolvedFactories[0])},t.prototype._instantiate=function(e,r){var n=this,a=r.factory,v;try{v=r.dependencies.map(function(y){return n._getByReflectiveDependency(y)})}catch(y){throw y.addKey&&y.addKey(this,e.key),y}var h;try{h=a.apply(void 0,v)}catch(y){throw Ye(this,y,y.stack,e.key)}return h},t.prototype._getByReflectiveDependency=function(e){return this._getByKey(e.key,e.visibility,e.optional?null:J)},t.prototype._getByKey=function(e,r,n){return e===st?this:r instanceof R?this._getByKeySelf(e,n):this._getByKeyDefault(e,n,r)},t.prototype._getObjByKeyId=function(e){for(var r=0;r<this.keyIds.length;r++)if(this.keyIds[r]===e)return this.objs[r]===M&&(this.objs[r]=this._new(this._providers[r])),this.objs[r];return M},t.prototype._throwOrNull=function(e,r){if(r!==J)return r;throw We(this,e)},t.prototype._getByKeySelf=function(e,r){var n=this._getObjByKeyId(e.id);return n!==M?n:this._throwOrNull(e,r)},t.prototype._getByKeyDefault=function(e,r,n){var a;for(n instanceof C?a=this._parent:a=this;a instanceof t;){var v=a,h=v._getObjByKeyId(e.id);if(h!==M)return h;a=v._parent}return a!==null?a.get(e.token,r):this._throwOrNull(e,r)},Object.defineProperty(t.prototype,"displayName",{get:function(){var e=ft(this,function(r){return' "'+r.key.displayName+'" '}).join(", ");return"ReflectiveInjector(providers: ["+e+"])"},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return this.displayName},t}(),st=I.get(re);function ft(t,e){for(var r=new Array(t._providers.length),n=0;n<t._providers.length;++n)r[n]=e(t.getProviderAtIndex(n));return r}function ct(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=new Set;function n(y){r.has(y)||(r.add(y),F.resolve([y]).reduce(function(w,m){return w.concat(m.resolvedFactories)},[]).reduce(function(w,m){return w.concat(m.dependencies)},[]).forEach(function(w){return n(w.key.token)}))}for(var a=0,v=t;a<v.length;a++){var h=v[a];n(h)}return Array.from(r)}c.Class=d,c.Host=z,c.Inject=j,c.Injectable=b,c.InjectionToken=ue,c.Injector=re,c.OpaqueToken=ae,c.Optional=E,c.ReflectiveInjector=F,c.ReflectiveKey=I,c.ResolvedReflectiveFactory=ce,c.Self=R,c.SkipSelf=C,c.Type=N,c.forwardRef=Y,c.isType=B,c.makeDecorator=g,c.resolveDependencies=ct,c.resolveForwardRef=D,Object.defineProperty(c,"__esModule",{value:!0})})});he(exports);G(exports,dt(Fe()));