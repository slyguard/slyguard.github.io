(window["webpackJsonpsly-web"]=window["webpackJsonpsly-web"]||[]).push([[92],{285:function(n,e,a){"use strict";a.r(e),a.d(e,"mdTransitionAnimation",(function(){return o}));a(24);var i=a(18),o=function(n,e){var a="back"===e.direction,o=e.enteringEl,r=e.leavingEl,s=t(o),c=s.querySelector("ion-toolbar"),d=Object(i.a)();if(d.addElement(s).fill("both").beforeRemoveClass("ion-page-invisible"),a?d.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):d.duration(e.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),c){var u=Object(i.a)();u.addElement(c),d.addAnimation(u)}if(r&&a){d.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=Object(i.a)();l.addElement(t(r)).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),d.addAnimation(l)}return d},t=function(n){if(n.classList.contains("ion-page"))return n;var e=n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return e||n}}}]);
//# sourceMappingURL=92.3eacfef1.chunk.js.map