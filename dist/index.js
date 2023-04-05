"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var l=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,l.get?l:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var r=t(e),l=function(){return l=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},l.apply(this,arguments)};function i(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(l=Object.getOwnPropertySymbols(e);i<l.length;i++)t.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(e,l[i])&&(r[l[i]]=e[l[i]])}return r}exports.ScrollbarX=function(t){var c=t.children,n=i(t,["children"]),o=e.useRef(null),h=e.useState({scrolledRatio:0,thumbOnTrack:0,childWidth:0}),a=h[0],s=a.scrolledRatio,d=a.thumbOnTrack,u=a.childWidth,f=h[1],b=function(e){var t=e.target;f({childWidth:t.clientWidth,thumbOnTrack:+t.clientWidth/t.scrollWidth,scrolledRatio:+t.scrollLeft/(t.scrollWidth-t.clientWidth)})};return e.useEffect((function(){if(o.current){var e=o.current.firstChild;e instanceof HTMLElement&&e.scrollWidth>e.clientWidth&&(f({thumbOnTrack:+e.clientWidth/e.scrollWidth,scrolledRatio:+e.scrollTop/(e.scrollWidth-e.clientWidth),childWidth:e.clientWidth}),e.addEventListener("scroll",b))}return function(){if(o.current){var e=o.current.firstChild;e instanceof HTMLElement&&e.scrollWidth>e.clientWidth&&e.removeEventListener("scroll",b)}}}),[]),r.createElement("div",{ref:o,style:l(l({},n.wraperStyle),{display:"flex",flexDirection:"column",alignItems:"center"})},c,r.createElement("div",{style:l(l({},n.trackStyle),{display:d<=.99?"block":"none",width:n.w?n.w:u,height:n.h?n.h:4,borderRadius:n.r?n.r:2,backgroundColor:n.trackColor?n.trackColor:"#cecece"})},r.createElement("div",{style:l(l({},n.thumbStyle),{width:n.w?n.w*d:u*d,position:"relative",left:n.w?+n.w*(1-d)*s:u?+u*(1-d)*s:30,height:n.h?n.h:4,borderRadius:n.r?n.r:2,backgroundColor:n.thumbColor?n.thumbColor:"#555"})})))},exports.ScrollbarY=function(t){var c=t.children,n=i(t,["children"]),o=e.useRef(null),h=e.useState({scrolledRatio:0,thumbOnTrack:0,childHeight:0}),a=h[0],s=a.scrolledRatio,d=a.thumbOnTrack,u=a.childHeight,f=h[1],b=function(e){var t=e.target;f({childHeight:t.clientHeight,thumbOnTrack:+t.clientHeight/t.scrollHeight,scrolledRatio:+t.scrollTop/(t.scrollHeight-t.clientHeight)})};return e.useEffect((function(){if(o.current){var e=o.current.firstChild;e instanceof HTMLElement&&e.scrollHeight>e.clientHeight&&(f({thumbOnTrack:+e.clientHeight/e.scrollHeight,scrolledRatio:+e.scrollTop/(e.scrollHeight-e.clientHeight),childHeight:e.clientHeight}),e.addEventListener("scroll",b))}return function(){if(o.current){var e=o.current.firstChild;e instanceof HTMLElement&&e.scrollHeight>e.clientHeight&&e.removeEventListener("scroll",b)}}}),[]),r.createElement("div",{ref:o,style:l(l({},n.wraperStyle),{display:"flex",alignItems:"center"})},c,r.createElement("div",{style:l(l({},n.trackStyle),{display:d<=.99?"block":"none",height:n.h?n.h:u,width:n.w?n.w:4,borderRadius:n.r?n.r:2,backgroundColor:n.trackColor?n.trackColor:"#cecece"})},r.createElement("div",{style:l(l({},n.thumbStyle),{height:n.h?n.h*d:u*d,position:"relative",top:n.h?+n.h*(1-d)*s:u?+u*(1-d)*s:30,width:n.w?n.w:4,borderRadius:n.r?n.r:2,backgroundColor:n.thumbColor?n.thumbColor:"#555"})})))};
//# sourceMappingURL=index.js.map
