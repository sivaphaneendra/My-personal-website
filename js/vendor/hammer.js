function Hammer(e,t,n){function T(e){return e.touches?e.touches.length:1}function N(e){var t=document,n=t.body;return[{x:e.pageX||e.clientX+(t&&t.scrollLeft||n&&n.scrollLeft||0)-(t&&t.clientLeft||n&&t.clientLeft||0),y:e.pageY||e.clientY+(t&&t.scrollTop||n&&n.scrollTop||0)-(t&&t.clientTop||n&&t.clientTop||0)}]}function C(e){var n=[],r;for(var i=0,s=t.two_touch_max?Math.min(2,e.touches.length):e.touches.length;i<s;i++){r=e.touches[i];n.push({x:r.pageX,y:r.pageY})}return n}function k(e){var r=N;e=e||window.event;if(!S){if(t.allow_touch_and_mouse&&e.touches!==n&&e.touches.length>0){r=C}}else{r=C}return r(e)}function L(e,t){return Math.atan2(t.y-e.y,t.x-e.x)*180/Math.PI}function A(e,t){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)}function O(e,t){if(e.length==2&&t.length==2){var n=A(e[0],e[1]);var r=A(t[0],t[1]);return r/n}return 0}function M(e,t){if(e.length==2&&t.length==2){var n=L(e[1],e[0]);var r=L(t[1],t[0]);return r-n}return 0}function _(e,t){t.touches=k(t.originalEvent);t.type=e;if(q(r["on"+e])){r["on"+e].call(r,t)}}function D(e){e=e||window.event;if(e.preventDefault){e.preventDefault();e.stopPropagation()}else{e.returnValue=false;e.cancelBubble=true}}function P(){a={};l=false;f=0;s=0;o=0;c=null}function B(n){function m(){a.start=k(n);p=(new Date).getTime();f=T(n);l=true;b=n;var t=e.getBoundingClientRect();var r=e.clientTop||document.body.clientTop||0;var i=e.clientLeft||document.body.clientLeft||0;var s=window.pageYOffset||e.scrollTop||document.body.scrollTop;var o=window.pageXOffset||e.scrollLeft||document.body.scrollLeft;g={top:t.top+s-r,left:t.left+o-i};y=true;H.hold(n)}var r;switch(n.type){case"mousedown":case"touchstart":r=T(n);x=r===1;if(r===2&&c==="drag"){_("dragend",{originalEvent:n,direction:u,distance:s,angle:o})}m();if(t.prevent_default){D(n)}break;case"mousemove":case"touchmove":r=T(n);if(!y&&r===1){return false}else if(!y&&r===2){x=false;P();m()}w=n;a.move=k(n);if(!H.transform(n)){H.drag(n)}break;case"mouseup":case"mouseout":case"touchcancel":case"touchend":var i=true;y=false;E=n;H.swipe(n);if(c=="drag"){_("dragend",{originalEvent:n,direction:u,distance:s,angle:o})}else if(c=="transform"){var d=a.center.x-a.startCenter.x;var v=a.center.y-a.startCenter.y;_("transformend",{originalEvent:n,position:a.center,scale:O(a.start,a.move),rotation:M(a.start,a.move),distance:s,distanceX:d,distanceY:v});if(T(n)===1){P();m();i=false}}else if(x){H.tap(b)}h=c;_("release",{originalEvent:n,gesture:c,position:a.move||a.start});if(i){P()}break}}function j(t){if(!F(e,t.relatedTarget)){B(t)}}function F(e,t){if(!t&&window.event&&window.event.toElement){t=window.event.toElement}if(e===t){return true}if(t){var n=t.parentNode;while(n!==null){if(n===e){return true}n=n.parentNode}}return false}function I(e,t){var n={};if(!t){return e}for(var r in e){if(r in t){n[r]=t[r]}else{n[r]=e[r]}}return n}function q(e){return Object.prototype.toString.call(e)=="[object Function]"}function R(e,t,n){t=t.split(" ");for(var r=0,i=t.length;r<i;r++){if(e.addEventListener){e.addEventListener(t[r],n,false)}else if(document.attachEvent){e.attachEvent("on"+t[r],n)}}}function U(e,t,n){t=t.split(" ");for(var r=0,i=t.length;r<i;r++){if(e.removeEventListener){e.removeEventListener(t[r],n,false)}else if(document.detachEvent){e.detachEvent("on"+t[r],n)}}}var r=this;var i=I({prevent_default:false,css_hacks:true,swipe:true,swipe_time:500,swipe_min_distance:20,drag:true,drag_vertical:true,drag_horizontal:true,drag_min_distance:20,transform:true,scale_treshold:.1,rotation_treshold:15,tap:true,tap_double:true,tap_max_interval:300,tap_max_distance:10,tap_double_distance:20,hold:true,hold_timeout:500,allow_touch_and_mouse:false},Hammer.defaults||{});t=I(i,t);(function(){if(!t.css_hacks){return false}var n=["webkit","moz","ms","o",""];var r={userSelect:"none",touchCallout:"none",touchAction:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"};var i="";for(var s=0;s<n.length;s++){for(var o in r){i=o;if(n[s]){i=n[s]+i.substring(0,1).toUpperCase()+i.substring(1)}e.style[i]=r[o]}}})();var s=0;var o=0;var u=0;var a={};var f=0;var l=false;var c=null;var h=null;var p=null;var d={x:0,y:0};var v=null;var m=null;var g={};var y=false;var b;var w;var E;var S="ontouchstart"in window;var x=false;this.option=function(e,r){if(r!==n){t[e]=r}return t[e]};this.getDirectionFromAngle=function(e){var t={down:e>=45&&e<135,left:e>=135||e<=-135,up:e<-45&&e>-135,right:e>=-45&&e<=45};var n,r;for(r in t){if(t[r]){n=r;break}}return n};this.destroy=function(){if(S||t.allow_touch_and_mouse){U(e,"touchstart touchmove touchend touchcancel",B)}if(!S||t.allow_touch_and_mouse){U(e,"mouseup mousedown mousemove",B);U(e,"mouseout",j)}};var H={hold:function(e){if(t.hold){c="hold";clearTimeout(m);m=setTimeout(function(){if(c=="hold"){_("hold",{originalEvent:e,position:a.start})}},t.hold_timeout)}},swipe:function(e){if(!a.move||c==="transform"){return}var n=a.move[0].x-a.start[0].x;var i=a.move[0].y-a.start[0].y;s=Math.sqrt(n*n+i*i);var f=(new Date).getTime();var l=f-p;if(t.swipe&&t.swipe_time>=l&&s>=t.swipe_min_distance){o=L(a.start[0],a.move[0]);u=r.getDirectionFromAngle(o);c="swipe";var h={x:a.move[0].x-g.left,y:a.move[0].y-g.top};var d={originalEvent:e,position:h,direction:u,distance:s,distanceX:n,distanceY:i,angle:o};_("swipe",d)}},drag:function(e){var n=a.move[0].x-a.start[0].x;var i=a.move[0].y-a.start[0].y;s=Math.sqrt(n*n+i*i);if(t.drag&&s>t.drag_min_distance||c=="drag"){o=L(a.start[0],a.move[0]);u=r.getDirectionFromAngle(o);var f=u=="up"||u=="down";if((f&&!t.drag_vertical||!f&&!t.drag_horizontal)&&s>t.drag_min_distance){return}c="drag";var h={x:a.move[0].x-g.left,y:a.move[0].y-g.top};var p={originalEvent:e,position:h,direction:u,distance:s,distanceX:n,distanceY:i,angle:o};if(l){_("dragstart",p);l=false}_("drag",p);D(e)}},transform:function(e){if(t.transform){var n=T(e);if(n!==2){return false}var r=M(a.start,a.move);var i=O(a.start,a.move);if(c==="transform"||Math.abs(1-i)>t.scale_treshold||Math.abs(r)>t.rotation_treshold){c="transform";a.center={x:(a.move[0].x+a.move[1].x)/2-g.left,y:(a.move[0].y+a.move[1].y)/2-g.top};if(l)a.startCenter=a.center;var o=a.center.x-a.startCenter.x;var u=a.center.y-a.startCenter.y;s=Math.sqrt(o*o+u*u);var f={originalEvent:e,position:a.center,scale:i,rotation:r,distance:s,distanceX:o,distanceY:u};if(l){_("transformstart",f);l=false}_("transform",f);D(e);return true}}return false},tap:function(e){var n=(new Date).getTime();var r=n-p;if(t.hold&&!(t.hold&&t.hold_timeout>r)){return}var i=function(){if(d&&t.tap_double&&h=="tap"&&a.start&&p-v<t.tap_max_interval){var e=Math.abs(d[0].x-a.start[0].x);var n=Math.abs(d[0].y-a.start[0].y);return d&&a.start&&Math.max(e,n)<t.tap_double_distance}return false}();if(i){c="double_tap";v=null;_("doubletap",{originalEvent:e,position:a.start});D(e)}else{var o=a.move?Math.abs(a.move[0].x-a.start[0].x):0;var u=a.move?Math.abs(a.move[0].y-a.start[0].y):0;s=Math.max(o,u);if(s<t.tap_max_distance){c="tap";v=n;d=a.start;if(t.tap){_("tap",{originalEvent:e,position:a.start});D(e)}}}}};if(S||t.allow_touch_and_mouse){R(e,"touchstart touchmove touchend touchcancel",B)}if(!S||t.allow_touch_and_mouse){R(e,"mouseup mousedown mousemove",B);R(e,"mouseout",j)}}