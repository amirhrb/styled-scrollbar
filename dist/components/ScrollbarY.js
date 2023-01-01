"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.number.to-fixed.js");
var _react = require("react");
function ScrollbarY(_ref) {
  let {
    h = 180,
    w = "6px",
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
      thumbOnTrack: Number(barRef.current.previousSibling.clientHeight / barRef.current.previousSibling.scrollHeight).toFixed(2),
      scrolledRatio: +(-barRef.current.scrollTop / (barRef.current.scrollHeight - barRef.current.clientHeight)).toFixed(2)
    });
    barRef.current.previousSibling.addEventListener("scroll", e => {
      setScroll({
        thumbOnTrack: Number(e.target.clientHeight / e.target.scrollHeight).toFixed(2),
        scrolledRatio: +(-e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)).toFixed(2)
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
      height: h * thumbOnTrack,
      position: "relative",
      top: h * (1 - thumbOnTrack) * scrolledRatio,
      width: w,
      borderRadius: r,
      backgroundColor: thumbColor
    }
  }));
}
var _default = ScrollbarY;
exports.default = _default;