(this["webpackJsonpsly-web"]=this["webpackJsonpsly-web"]||[]).push([[92],{314:function(e,a,t){"use strict";t.r(a),t.d(a,"mdTransitionAnimation",(function(){return r}));t(30),t(7),t(19);var n=t(15),i=(t(25),t(309)),r=function(e,a){var t="back"===a.direction,r=a.enteringEl,o=a.leavingEl,s=Object(i.b)(r),b=s.querySelector("ion-toolbar"),c=Object(n.a)();if(c.addElement(s).fill("both").beforeRemoveClass("ion-page-invisible"),t?c.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):c.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),b){var d=Object(n.a)();d.addElement(b),c.addAnimation(d)}if(o&&t){c.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=Object(n.a)();l.addElement(Object(i.b)(o)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),c.addAnimation(l)}return c}}}]);