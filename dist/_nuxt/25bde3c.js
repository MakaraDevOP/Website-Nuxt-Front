(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{363:function(t,n,e){"use strict";e.r(n);e(209),e(54),e(15),e(30),e(55),e(37),e(32),e(29),e(48),e(56),e(38);function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){f=!0,l=t},f:function(){try{c||null==e.return||e.return()}finally{if(f)throw l}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var l={data:function(){return{title:"",pageData:[]}},mounted:function(){this.title="/".concat(this.$route.params.slug),this.getPage()},methods:{getPage:function(){var t=this;this.$axios.get("/page/all").then((function(n){if(n.data){var e,o=r(n.data);try{for(o.s();!(e=o.n()).done;){var dt=e.value;t.title==dt.link&&(t.pageData=dt)}}catch(t){o.e(t)}finally{o.f()}}}))}}},c=e(17),component=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("div",t._l(t.pageData,(function(e){return n("div",{key:e.id},t._l(e,(function(t){return n("div",{key:t.id},[n(t.sectionName,{tag:"component"})],1)})),0)})),0)}),[],!1,null,null,null);n.default=component.exports}}]);