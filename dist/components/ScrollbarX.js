"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.number.to-fixed.js");
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ScrollbarX(_ref) {
  let {
    w = 180,
    h = 6,
    r = 0,
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: barRef,
    style: {
      display: thumbOnTrack >= 0.99 ? "none" : "block",
      width: w ? w : barRef.current ? barRef.current.previousSibling.clientWidth : "90",
      height: h,
      borderRadius: r,
      backgroundColor: trackColor
    },
    children: [console.log(typeof scrolledRatio), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        width: w ? w * thumbOnTrack : barRef.current ? barRef.current.previousSibling.clientWidth * thumbOnTrack : "30",
        position: "relative",
        right: w ? Number(w * (1 - thumbOnTrack) * scrolledRatio) : barRef.current && thumbOnTrack ? Number(barRef.current.previousSibling.clientWidth * (1 - thumbOnTrack) * scrolledRatio) : "30",
        height: h,
        borderRadius: r,
        backgroundColor: thumbColor
      }
    })]
  });
}
ScrollbarX.propTypes = {
  w: _propTypes.default.number,
  h: _propTypes.default.number,
  r: _propTypes.default.number,
  thumbColor: _propTypes.default.string,
  trackColor: _propTypes.default.string
};
var _default = /*#__PURE__*/(0, _react.memo)(ScrollbarX);
exports.default = _default;