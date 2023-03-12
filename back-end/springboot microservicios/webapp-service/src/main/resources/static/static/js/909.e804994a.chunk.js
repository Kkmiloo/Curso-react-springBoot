/*! For license information please see 909.e804994a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_ionic=self.webpackChunkreact_ionic||[]).push([[909],{909:(e,t,r)=>{r.r(t),r.d(t,{GESTURE_CONTROLLER:()=>n.G,createGesture:()=>i});var n=r(503);const o=(e,t,r,n)=>{const o=s(e)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;let c,a;return e.__zone_symbol__addEventListener?(c="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(c="addEventListener",a="removeEventListener"),e[c](t,r,o),()=>{e[a](t,r,o)}},s=e=>{if(void 0===c)try{const t=Object.defineProperty({},"passive",{get:()=>{c=!0}});e.addEventListener("optsTest",(()=>{}),t)}catch(t){c=!1}return!!c};let c;const a=e=>e instanceof Document?e:e.ownerDocument,i=e=>{let t=!1,r=!1,s=!0,c=!1;const i=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),v=i.canStart,m=i.onWillStart,p=i.onStart,h=i.onEnd,y=i.notCaptured,X=i.onMove,Y=i.threshold,_=i.passive,g=i.blurOnStart,b={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},f=((e,t,r)=>{const n=r*(Math.PI/180),o="x"===e,s=Math.cos(n),c=t*t;let a=0,i=0,u=!1,l=0;return{start(e,t){a=e,i=t,l=0,u=!0},detect(e,t){if(!u)return!1;const r=e-a,n=t-i,d=r*r+n*n;if(d<c)return!1;const v=Math.sqrt(d),m=(o?r:n)/v;return l=m>s?1:m<-s?-1:0,u=!1,!0},isGesture:()=>0!==l,getDirection:()=>l}})(i.direction,i.threshold,i.maxAngle),T=n.G.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),E=()=>{t&&(c=!1,X&&X(b))},S=()=>!!T.capture()&&(t=!0,s=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTime=b.currentTime,m?m(b).then(L):L(),!0),L=()=>{g&&(()=>{if("undefined"!==typeof document){const e=document.activeElement;(null===e||void 0===e?void 0:e.blur)&&e.blur()}})(),p&&p(b),s=!0},w=()=>{t=!1,r=!1,c=!1,s=!0,T.release()},G=e=>{const r=t,n=s;w(),n&&(u(b,e),r?h&&h(b):y&&y(b))},D=((e,t,r,n,s)=>{let c,i,u,l,d,v,m,p=0;const h=n=>{p=Date.now()+2e3,t(n)&&(!i&&r&&(i=o(e,"touchmove",r,s)),u||(u=o(n.target,"touchend",X,s)),l||(l=o(n.target,"touchcancel",X,s)))},y=n=>{p>Date.now()||t(n)&&(!v&&r&&(v=o(a(e),"mousemove",r,s)),m||(m=o(a(e),"mouseup",Y,s)))},X=e=>{_(),n&&n(e)},Y=e=>{g(),n&&n(e)},_=()=>{i&&i(),u&&u(),l&&l(),i=u=l=void 0},g=()=>{v&&v(),m&&m(),v=m=void 0},b=()=>{_(),g()},f=function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(c&&c(),d&&d(),c=d=void 0,b()):(c||(c=o(e,"touchstart",h,s)),d||(d=o(e,"mousedown",y,s)))};return{enable:f,stop:b,destroy:()=>{f(!1),n=r=t=void 0}}})(i.el,(e=>{const t=d(e);return!(r||!s)&&(l(e,b),b.startX=b.currentX,b.startY=b.currentY,b.startTime=b.currentTime=t,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=e,(!v||!1!==v(b))&&(T.release(),!!T.start()&&(r=!0,0===Y?S():(f.start(b.startX,b.startY),!0))))}),(e=>{t?!c&&s&&(c=!0,u(b,e),requestAnimationFrame(E)):(u(b,e),f.detect(b.currentX,b.currentY)&&(f.isGesture()&&S()||O()))}),G,{capture:!1,passive:_}),O=()=>{w(),D.stop(),y&&y(b)};return{enable(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e||(t&&G(void 0),w()),D.enable(e)},destroy(){T.destroy(),D.destroy()}}},u=(e,t)=>{if(!t)return;const r=e.currentX,n=e.currentY,o=e.currentTime;l(t,e);const s=e.currentX,c=e.currentY,a=(e.currentTime=d(t))-o;if(a>0&&a<100){const t=(s-r)/a,o=(c-n)/a;e.velocityX=.7*t+.3*e.velocityX,e.velocityY=.7*o+.3*e.velocityY}e.deltaX=s-e.startX,e.deltaY=c-e.startY,e.event=t},l=(e,t)=>{let r=0,n=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];r=e.clientX,n=e.clientY}else void 0!==e.pageX&&(r=e.pageX,n=e.pageY)}t.currentX=r,t.currentY=n},d=e=>e.timeStamp||Date.now()}}]);
//# sourceMappingURL=909.e804994a.chunk.js.map