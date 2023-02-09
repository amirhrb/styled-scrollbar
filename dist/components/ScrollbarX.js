"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.number.to-fixed.js");
var _react = _interopRequireWildcard(require("react"));
const _excluded = ["children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Container(props) {
  const ref = (0, _react.useRef)(null);
  const {
      children
    } = props,
    data = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly"
    }
  }, children, /*#__PURE__*/_react.default.createElement(Scrollbar, _extends({
    ref: ref
  }, data)));
}
const Scrollbar = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    w,
    h = 6,
    r = 2,
    thumbColor = "#555",
    trackColor = "#cecece"
  } = props;
  const [{
    scrolledRatio,
    thumbOnTrack
  }, setScroll] = (0, _react.useState)({
    thumbOnTrack: 0,
    scrolledRatio: 0
  });
  (0, _react.useEffect)(() => {
    setScroll({
      thumbOnTrack: +(ref.current.previousSibling.clientWidth / ref.current.previousSibling.scrollWidth).toFixed(2),
      scrolledRatio: Math.abs(ref.current.previousSibling.scrollLeft / (ref.current.previousSibling.scrollWidth - ref.current.previousSibling.clientWidth)).toFixed(2)
    });
    ref.current.previousSibling.addEventListener("scroll", e => {
      setScroll({
        thumbOnTrack: Number(e.target.clientWidth / e.target.scrollWidth).toFixed(2),
        scrolledRatio: Math.abs(e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)).toFixed(2)
      });
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    style: {
      display: thumbOnTrack <= 0.99 ? "block" : "none",
      width: w ? w : ref.current ? ref.current.previousSibling.clientWidth : 180,
      height: h,
      borderRadius: r,
      backgroundColor: trackColor
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: w ? w * thumbOnTrack : ref.current ? ref.current.previousSibling.clientWidth * thumbOnTrack : 30,
      position: "relative",
      right: w ? Number(w * (1 - thumbOnTrack) * scrolledRatio) : ref.current && thumbOnTrack ? Number(ref.current.previousSibling.clientWidth * (1 - thumbOnTrack) * scrolledRatio) : 30,
      height: h,
      borderRadius: r,
      backgroundColor: thumbColor
    }
  }));
});
var _default = Container;
exports.default = _default;