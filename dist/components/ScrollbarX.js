"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.number.to-fixed.js");
var _react = require("react");
function ScrollbarX(_ref) {
  let {
    w = 180,
    h = "6px",
    r = "0px",
    thumbColor = "#555",
    trackColor = "#cecece"
  } = _ref;
  const barRef = (0, _react.useRef)();
  const [{
    scrolledRatio,
    thumbOnTrack
  }, setScroll] = (0, _react.useState)({
    thumbOnTrack: 0,
    scrolledRatio: 0
  });
  (0, _react.useEffect)(() => {
    setScroll({
      thumbOnTrack: Number(barRef.current.previousSibling.clientWidth / barRef.current.previousSibling.scrollWidth).toFixed(2),
      scrolledRatio: +(-barRef.current.scrollLeft / (barRef.current.scrollWidth - barRef.current.clientWidth)).toFixed(2)
    });
    barRef.current.previousSibling.addEventListener("scroll", e => {
      setScroll({
        thumbOnTrack: Number(e.target.clientWidth / e.target.scrollWidth).toFixed(2),
        scrolledRatio: +(-e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)).toFixed(2)
      });
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: barRef,
    style: {
      width: w,
      height: h,
      borderRadius: r,
      backgroundColor: trackColor
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * thumbOnTrack,
      position: "relative",
      right: w * (1 - thumbOnTrack) * scrolledRatio,
      height: h,
      borderRadius: r,
      backgroundColor: thumbColor
    }
  }));
}
var _default = ScrollbarX;
exports.default = _default;