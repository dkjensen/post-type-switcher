!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e,n){var o=n(8);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var o=n(10),r=n(9);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){!function(){t.exports=this.wp.plugins}()},function(t,e,n){"use strict";n.r(e);var o=n(6),r=n(5),i=n.n(r),c=n(4),s=n.n(c),l=n(3),u=n.n(l),p=n(2),a=n.n(p),f=n(1),y=n.n(f),b=n(0),d=wp.components,m=d.Button,w=d.Dropdown,_=(d.PanelRow,wp.editPost.PluginPostStatusInfo),v=wp.element.Component,g=wp.i18n.__,h=function(t){function e(t){var n;return i()(this,e),(n=u()(this,a()(e).apply(this,arguments))).state={currentPostType:window.ptsBlockEditor.currentPostType},n}return y()(e,t),s()(e,[{key:"render",value:function(){var t=this;return Object(b.createElement)("fieldset",{key:"post-type-switcher-selector",className:"editor-post-visibility__dialog-fieldset"},Object(b.createElement)("legend",{className:"editor-post-visibility__dialog-legend"},g("Post Type Switcher","pts")),window.ptsBlockEditor.availablePostTypes.map(function(e){var n=e.value,o=e.label;return Object(b.createElement)("div",{key:n,className:"editor-post-visibility__choice"},Object(b.createElement)("input",{type:"radio",name:"editor-post-visibility__setting",value:n,onChange:function(){t.setState({currentPostType:n}),window.location.href=window.ptsBlockEditor.changeUrl+"&pts_post_type="+n},checked:n===t.state.currentPostType,id:"editor-post-type-switcher-".concat(n),className:"editor-visibility__dialog-radio"}),Object(b.createElement)("label",{htmlFor:"editor-post-type-switcher-".concat(n),className:"editor-post-visibility__dialog-label"},o))}))}}]),e}(v),O=function(t){t.children,t.className;return Object(b.createElement)(_,null,Object(b.createElement)("span",null,g("Post Type")),Object(b.createElement)(w,{position:"bottom left",contentClassName:"edit-post-post-visibility__dialog",renderToggle:function(t){var e=t.isOpen,n=t.onToggle;return Object(b.createElement)(m,{type:"button","aria-expanded":e,className:"edit-post-post-visibility__toggle",onClick:n,isLink:!0},window.ptsBlockEditor.currentPostTypeLabel)},renderContent:function(){return Object(b.createElement)(h,null)}}))};Object(o.registerPlugin)("post-type-switcher",{render:O})},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o}]);