(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{3394:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/success",function(){return n(8823)}])},8823:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var a=n(5893),r=n(7294),i=n(1664),o=n(3750),s=n(2996),c={};!function t(e,n,a,r){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL);function o(){}function s(t){var a=n.exports.Promise,r=void 0!==a?a:e.Promise;return"function"===typeof r?new r(t):(t(o,o),null)}var c,l=function(){var t,e,n=Math.floor(1e3/60),a={},r=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(t=function(t){var e=Math.random();return a[e]=requestAnimationFrame((function i(o){r===o||r+n-1<o?(r=o,delete a[e],t()):a[e]=requestAnimationFrame(i)})),e},e=function(t){a[t]&&cancelAnimationFrame(a[t])}):(t=function(t){return setTimeout(t,n)},e=function(t){return clearTimeout(t)}),{frame:t,cancel:e}}(),u=function(){var e,n,r={};return function(){if(e)return e;if(!a&&i){var o=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{e=new Worker(URL.createObjectURL(new Blob([o])))}catch(c){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",c),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(a,i,o){if(n)return e(a,null),n;var c=Math.random().toString(36).slice(2);return n=s((function(i){function s(e){e.data.callback===c&&(delete r[c],t.removeEventListener("message",s),n=null,o(),i())}t.addEventListener("message",s),e(a,c),r[c]=s.bind(null,{data:{callback:c}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),r)r[e](),delete r[e]}}(e)}return e}}(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function f(t,e,n){return function(t,e){return e?e(t):t}(t&&(null!==(a=t[e])&&void 0!==a)?t[e]:h[e],n);var a}function d(t){return t<0?0:Math.floor(t)}function m(t){return parseInt(t,16)}function g(t){return t.map(v)}function v(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:m(e.substring(0,2)),g:m(e.substring(2,4)),b:m(e.substring(4,6))}}function b(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function p(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function y(t){var e=t.angle*(Math.PI/180),n=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*t.startVelocity+Math.random()*t.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*t.gravity,ovalScalar:.6,scalar:t.scalar}}function M(t,e,n,i,o){var c,u,h=e.slice(),f=t.getContext("2d"),d=s((function(e){function s(){c=u=null,f.clearRect(0,0,i.width,i.height),o(),e()}c=l.frame((function e(){!a||i.width===r.width&&i.height===r.height||(i.width=t.width=r.width,i.height=t.height=r.height),i.width||i.height||(n(t),i.width=t.width,i.height=t.height),f.clearRect(0,0,i.width,i.height),h=h.filter((function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,a=e.x+e.random*e.tiltCos,r=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,o=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(i-a)*e.ovalScalar,Math.abs(o-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,a,r,i,o,s,c){t.save(),t.translate(e,n),t.rotate(i),t.scale(a,r),t.arc(0,0,1,o,s,c),t.restore()}(t,e.x,e.y,Math.abs(i-a)*e.ovalScalar,Math.abs(o-r)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if("star"===e.shape)for(var s=Math.PI/2*3,c=4*e.scalar,l=8*e.scalar,u=e.x,h=e.y,f=5,d=Math.PI/f;f--;)u=e.x+Math.cos(s)*l,h=e.y+Math.sin(s)*l,t.lineTo(u,h),s+=d,u=e.x+Math.cos(s)*c,h=e.y+Math.sin(s)*c,t.lineTo(u,h),s+=d;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(r)),t.lineTo(Math.floor(i),Math.floor(o)),t.lineTo(Math.floor(a),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}(f,t)})),h.length?c=l.frame(e):s()})),u=s}));return{addFettis:function(t){return h=h.concat(t),d},canvas:t,promise:d,reset:function(){c&&l.cancel(c),u&&u()}}}function w(t,n){var a,r=!t,o=!!f(n||{},"resize"),c=f(n,"disableForReducedMotion",Boolean),l=i&&!!f(n||{},"useWorker")?u():null,h=r?b:p,m=!(!t||!l)&&!!t.__confetti_initialized,v="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function w(e,n,r){for(var i,o,s=f(e,"particleCount",d),c=f(e,"angle",Number),l=f(e,"spread",Number),u=f(e,"startVelocity",Number),m=f(e,"decay",Number),v=f(e,"gravity",Number),b=f(e,"drift",Number),p=f(e,"colors",g),w=f(e,"ticks",Number),x=f(e,"shapes"),C=f(e,"scalar"),k=function(t){var e=f(t,"origin",Object);return e.x=f(e,"x",Number),e.y=f(e,"y",Number),e}(e),I=s,T=[],E=t.width*k.x,N=t.height*k.y;I--;)T.push(y({x:E,y:N,angle:c,spread:l,startVelocity:u,color:p[I%p.length],shape:x[(i=0,o=x.length,Math.floor(Math.random()*(o-i))+i)],ticks:w,decay:m,gravity:v,drift:b,scalar:C}));return a?a.addFettis(T):(a=M(t,T,h,n,r)).promise}function x(n){var i=c||f(n,"disableForReducedMotion",Boolean),u=f(n,"zIndex",Number);if(i&&v)return s((function(t){t()}));r&&a?t=a.canvas:r&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(u),document.body.appendChild(t)),o&&!m&&h(t);var d={width:t.width,height:t.height};function g(){if(l){var e={getBoundingClientRect:function(){if(!r)return t.getBoundingClientRect()}};return h(e),void l.postMessage({resize:{width:e.width,height:e.height}})}d.width=d.height=null}function b(){a=null,o&&e.removeEventListener("resize",g),r&&t&&(document.body.removeChild(t),t=null,m=!1)}return l&&!m&&l.init(t),m=!0,l&&(t.__confetti_initialized=!0),o&&e.addEventListener("resize",g,!1),l?l.fire(n,d,b):w(n,d,b)}return x.reset=function(){l&&l.reset(),a&&a.reset()},x}function x(){return c||(c=w(null,{useWorker:!0,resize:!0})),c}n.exports=function(){return x().apply(this,arguments)},n.exports.reset=function(){x().reset()},n.exports.create=w}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),c,!1);var l=c.exports,u=(c.exports.create,0),h=function(){clearInterval(u)},f=function(){var t=(0,s.F)(),e=t.setCartItems,n=t.setTotalPrice,c=t.setTotalQuantities;return(0,r.useEffect)((function(){localStorage.clear(),e([]),n(0),c(0),function(){var t=function(t,e){return Math.random()*(e-t)+t},e=Date.now()+15e3,n={startVelocity:30,spread:360,ticks:60,zIndex:0};u=setInterval((function(){var a=e-Date.now();if(a<=0)return clearInterval(u);var r=a/15e3*50;l(Object.assign({},n,{particleCount:r,origin:{x:t(.1,.2),y:Math.random()-.2}})),l(Object.assign({},n,{particleCount:r,origin:{x:t(.7,.9),y:Math.random()-.2}}))}),250)}()}),[]),(0,a.jsx)("div",{className:"success-wrapper",children:(0,a.jsxs)("div",{className:"success",children:[(0,a.jsx)("p",{className:"icon",children:(0,a.jsx)(o.Vno,{})}),(0,a.jsx)("h2",{children:"Thank you for your order!"}),(0,a.jsx)("p",{className:"email-msg",children:"Check your email inbox for the reciept!"}),(0,a.jsxs)("p",{className:"description",children:["If you have any questions, please email",(0,a.jsx)("a",{className:"email",href:"mailto:saarthaktuli@gmail.com",children:"saarthaktuli@gmail.com"})]}),(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("button",{type:"button",className:"btn",width:"300px",onClick:h,children:"Continue Shopping"})})]})})}}},function(t){t.O(0,[13,774,888,179],(function(){return e=3394,t(t.s=e);var e}));var e=t.O();_N_E=e}]);