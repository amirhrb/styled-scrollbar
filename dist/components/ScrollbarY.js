"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ScrollbarY(_ref) {
  let {
    h,
    w = 6,
    r = 0,
    thumbColor = "#555",
    trackColor = "#cecece"
  } = _ref;
  const barRef = (0, _react.useRef)();
  const [thumRatio, setThumRatio] = (0, _react.useState)(0);
  const [scrolledRatio, setScrolledRatio] = (0, _react.useState)(0);
  const [prevHeight, setPrevheight] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    const prevEl = barRef.current.previousSibling;
    setThumRatio(prevEl.clientHeight / prevEl.scrollHeight);
    setScrolledRatio(-prevEl.scrollTop / (prevEl.scrollHeight - prevEl.clientHeight));
    setPrevheight(prevEl.clientHeight);
    prevEl.addEventListener("scroll", e => {
      setThumRatio(+(e.target.clientHeight / e.target.scrollHeight));
      setScrolledRatio(+(-e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)));
      setPrevheight(prevEl.clientHeight);
    });
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: barRef,
    style: {
      display: thumRatio >= 0.99 ? "none" : "block",
      width: w,
      height: h ? h : prevHeight ? barRef.current.previousSibling.clientHeight : 0,
      borderRadius: r,
      backgroundColor: trackColor,
      overflow: "hidden"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        width: w,
        position: "relative",
        bottom: h ? h * (1 - thumRatio) * scrolledRatio : prevHeight && thumRatio ? prevHeight * (1 - thumRatio) * scrolledRatio : 0,
        height: h ? h * thumRatio : prevHeight ? prevHeight * thumRatio : 0,
        borderRadius: r,
        backgroundColor: thumbColor
      }
    })
  });
}
ScrollbarY.propTypes = {
  w: _propTypes.default.number,
  h: _propTypes.default.number,
  r: _propTypes.default.number,
  thumbColor: _propTypes.default.string,
  trackColor: _propTypes.default.string
};
var _default = /*#__PURE__*/(0, _react.memo)(ScrollbarY);
exports.default = _default;