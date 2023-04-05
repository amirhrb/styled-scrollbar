"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var l=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,l.get?l:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var r=t(e);function l(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(l=Object.getOwnPropertySymbols(e);i<l.length;i++)t.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(e,l[i])&&(r[l[i]]=e[l[i]])}return r}exports.ScrollbarX=function(t){var i=t.children,c=l(t,["children"]),n=e.useRef(null),o=e.useState({scrolledRatio:0,thumbOnTrack:0,childWidth:0}),h=o[0],a=h.scrolledRatio,d=h.thumbOnTrack,s=h.childWidth,u=o[1],f=function(e){var t=e.target;u({childWidth:t.clientWidth,thumbOnTrack:+t.clientWidth/t.scrollWidth,scrolledRatio:+t.scrollLeft/(t.scrollWidth-t.clientWidth)})};return e.useEffect((function(){if(n.current){var e=n.current.firstChild;e instanceof HTMLElement&&e.scrollWidth>e.clientWidth&&(u({thumbOnTrack:+e.clientWidth/e.scrollWidth,scrolledRatio:+e.scrollTop/(e.scrollWidth-e.clientWidth),childWidth:e.clientWidth}),e.addEventListener("scroll",f))}return function(){if(n.current){var e=n.current.firstChild;e instanceof HTMLElement&&e.scrollWidth>e.clientWidth&&e.removeEventListener("scroll",f)}}}),[]),r.createElement("div",{ref:n,style:{display:"flex",flexDirection:"column",alignItems:"center"}},i,r.createElement("div",{style:{display:d<=.99?"block":"none",width:c.w?c.w:s,height:c.h?c.h:4,borderRadius:c.r?c.r:2,backgroundColor:c.trackColor?c.trackColor:"#cecece"}},r.createElement("div",{style:{width:c.w?c.w*d:s*d,position:"relative",left:c.w?+c.w*(1-d)*a:s?+s*(1-d)*a:30,height:c.h?c.h:4,borderRadius:c.r?c.r:2,backgroundColor:c.thumbColor?c.thumbColor:"#555"}})))},exports.ScrollbarY=function(t){var i=t.children,c=l(t,["children"]),n=e.useRef(null),o=e.useState({scrolledRatio:0,thumbOnTrack:0,childHeight:0}),h=o[0],a=h.scrolledRatio,d=h.thumbOnTrack,s=h.childHeight,u=o[1],f=function(e){var t=e.target;u({childHeight:t.clientHeight,thumbOnTrack:+t.clientHeight/t.scrollHeight,scrolledRatio:+t.scrollTop/(t.scrollHeight-t.clientHeight)})};return e.useEffect((function(){if(n.current){var e=n.current.firstChild;e instanceof HTMLElement&&e.scrollHeight>e.clientHeight&&(u({thumbOnTrack:+e.clientHeight/e.scrollHeight,scrolledRatio:+e.scrollTop/(e.scrollHeight-e.clientHeight),childHeight:e.clientHeight}),e.addEventListener("scroll",f))}return function(){if(n.current){var e=n.current.firstChild;e instanceof HTMLElement&&e.scrollHeight>e.clientHeight&&e.removeEventListener("scroll",f)}}}),[]),r.createElement("div",{ref:n,style:{display:"flex",alignItems:"center"}},i,r.createElement("div",{style:{display:d<=.99?"block":"none",height:c.h?c.h:s,width:c.w?c.w:4,borderRadius:c.r?c.r:2,backgroundColor:c.trackColor?c.trackColor:"#cecece"}},r.createElement("div",{style:{height:c.h?c.h*d:s*d,position:"relative",top:c.h?+c.h*(1-d)*a:s?+s*(1-d)*a:30,width:c.w?c.w:4,borderRadius:c.r?c.r:2,backgroundColor:c.thumbColor?c.thumbColor:"#555"}})))};
//# sourceMappingURL=index.js.map
