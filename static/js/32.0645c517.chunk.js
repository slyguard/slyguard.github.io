(window["webpackJsonpsly-web"]=window["webpackJsonpsly-web"]||[]).push([[32],{106:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_checkbox",(function(){return c}));var i=n(16),r=(n(3),n(178)),o=n(179),c=function(){function t(t){var e=this;Object(i.l)(this,t),this.inputId="ion-cb-"+a++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(){e.setFocus(),e.checked=!e.checked,e.indeterminate=!1},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.ionBlur.emit()},this.ionChange=Object(i.d)(this,"ionChange",7),this.ionFocus=Object(i.d)(this,"ionFocus",7),this.ionBlur=Object(i.d)(this,"ionBlur",7),this.ionStyle=Object(i.d)(this,"ionStyle",7)}return t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value}),this.emitStyle()},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},t.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},t.prototype.render=function(){var t,e=this,n=this,c=n.inputId,a=n.indeterminate,u=n.disabled,s=n.checked,d=n.value,l=n.color,h=n.el,b=c+"-lbl",f=Object(i.e)(this),p=Object(o.f)(h);p&&(p.id=b),Object(o.k)(!0,h,this.name,s?d:"",u);var m=a?Object(i.i)("path",{d:"M6 12L18 12"}):Object(i.i)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===f&&(m=a?Object(i.i)("path",{d:"M2 12H22"}):Object(i.i)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(i.i)(i.a,{onClick:this.onClick,role:"checkbox","aria-disabled":u?"true":null,"aria-checked":""+s,"aria-labelledby":b,class:Object.assign({},Object(r.a)(l),(t={},t[f]=!0,t["in-item"]=Object(r.c)("ion-item",h),t["checkbox-checked"]=s,t["checkbox-disabled"]=u,t["checkbox-indeterminate"]=a,t.interactive=!0,t))},Object(i.i)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},m),Object(i.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(t){return e.buttonEl=t}}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.23);--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:16px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px}}"},enumerable:!0,configurable:!0}),t}(),a=0},178:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return u}));var i=n(1),r=function(t,e){return null!==e.closest(t)},o=function(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},c=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,u=function(t,e,n){return i.a(void 0,void 0,void 0,(function(){var r;return i.c(this,(function(i){return null!=t&&"#"!==t[0]&&!a.test(t)&&(r=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,r.push(t,n)]):[2,!1]}))}))}},179:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return r})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return s})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return c}));var i=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},r=function(t){return!!t.shadowRoot&&!!t.attachShadow},o=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},c=function(t,e,n,i,o){if(t||r(e)){var c=e.querySelector("input.aux-input");c||((c=e.ownerDocument.createElement("input")).type="hidden",c.classList.add("aux-input"),e.appendChild(c)),c.disabled=o,c.name=n,c.value=i||""}},a=function(t,e,n){return Math.max(t,Math.min(e,n))},u=function(t,e){if(!t){var n="ASSERT: "+e;throw console.error(n),new Error(n)}},s=function(t){return t.timeStamp||Date.now()},d=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},l=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},h=function(t,e){var n=t._original||t;return{_original:t,emit:b(n.emit.bind(n),e)}},b=function(t,e){var n;return void 0===e&&(e=0),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(i))}}}}]);
//# sourceMappingURL=32.0645c517.chunk.js.map