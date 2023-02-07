"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.number.to-fixed.js");
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Container(props) {
  const ref = (0, _react.useRef)(null);
  const {
      children
    } = props,
    data = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly"
    },
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(Scrollbar, _objectSpread({
      ref: ref
    }, data))]
  });
}
const Scrollbar = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    w,
    h = 4,
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    style: {
      display: thumbOnTrack <= 0.99 ? "block" : "none",
      width: w ? w : ref.current ? ref.current.previousSibling.clientWidth : 90,
      height: h,
      borderRadius: r,
      backgroundColor: trackColor
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        width: w ? w * thumbOnTrack : ref.current ? ref.current.previousSibling.clientWidth * thumbOnTrack : "30",
        position: "relative",
        right: w ? Number(w * (1 - thumbOnTrack) * scrolledRatio) : ref.current && thumbOnTrack ? Number(ref.current.previousSibling.clientWidth * (1 - thumbOnTrack) * scrolledRatio) : 30,
        height: h,
        borderRadius: r,
        backgroundColor: thumbColor
      }
    })
  });
});
var _default = Container;
/*
/provider ref=ref

  //scrolled-child
  //scrollbar

/provider
*/
exports.default = _default;