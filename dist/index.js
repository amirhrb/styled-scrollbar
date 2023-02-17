Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var ScrollbarX = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var containerRef = React.useRef(null);
    var _b = React.useState({
        scrolledRatio: 0,
        thumbOnTrack: 0,
        childWidth: 0,
    }), _c = _b[0], scrolledRatio = _c.scrolledRatio, thumbOnTrack = _c.thumbOnTrack, childWidth = _c.childWidth, setScroll = _b[1];
    //   const [rtl, setRtl] = useState(false);
    React.useEffect(function () {
        // if (document.documentElement.dir === "rtl") setRtl(true);
        if (containerRef.current) {
            var firstChild = containerRef.current.firstChild;
            if (firstChild instanceof HTMLElement) {
                setScroll({
                    thumbOnTrack: +(firstChild.clientWidth / firstChild.scrollWidth),
                    scrolledRatio: +(firstChild.scrollTop /
                        (firstChild.scrollWidth - firstChild.clientWidth)),
                    childWidth: firstChild.clientWidth,
                });
                var handleScroll = function (e) {
                    //   try {
                    var target = e.target;
                    setScroll({
                        childWidth: target.clientWidth,
                        thumbOnTrack: +(target.clientWidth / target.scrollWidth),
                        scrolledRatio: +(target.scrollLeft /
                            (target.scrollWidth - target.clientWidth)),
                    });
                    //   } catch (err) {
                    // console.log(err);
                    //   }
                };
                firstChild.addEventListener("scroll", handleScroll);
            }
            else {
                console.log(firstChild);
            }
        }
        else {
            console.log(containerRef.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React.createElement("div", { ref: containerRef, style: {
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-evenly",
            alignItems: "center",
        } },
        children,
        React.createElement("div", { style: {
                display: thumbOnTrack <= 0.99 ? "block" : "none",
                width: props.w ? props.w : childWidth,
                height: props.h ? props.h : 4,
                borderRadius: props.r ? props.r : 2,
                backgroundColor: props.trackColor ? props.trackColor : "#cecece",
            } },
            React.createElement("div", { style: {
                    width: props.w ? props.w * thumbOnTrack : childWidth * thumbOnTrack,
                    position: "relative",
                    left: props.w
                        ? +(props.w * (1 - thumbOnTrack) * scrolledRatio)
                        : childWidth && thumbOnTrack
                            ? +(childWidth * (1 - thumbOnTrack) * scrolledRatio)
                            : 30,
                    height: props.h ? props.h : 4,
                    borderRadius: props.r ? props.r : 2,
                    backgroundColor: props.thumbColor ? props.thumbColor : "#555",
                } }))));
};

var ScrollbarY = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var containerRef = React.useRef(null);
    var _b = React.useState({
        scrolledRatio: 0,
        thumbOnTrack: 0,
        childHeight: 0,
    }), _c = _b[0], scrolledRatio = _c.scrolledRatio, thumbOnTrack = _c.thumbOnTrack, childHeight = _c.childHeight, setScroll = _b[1];
    React.useEffect(function () {
        if (containerRef.current) {
            var firstChild = containerRef.current.firstChild;
            if (firstChild instanceof HTMLElement) {
                setScroll({
                    thumbOnTrack: +(firstChild.clientHeight / firstChild.scrollHeight),
                    scrolledRatio: +(firstChild.scrollTop /
                        (firstChild.scrollHeight - firstChild.clientHeight)),
                    childHeight: firstChild.clientHeight,
                });
                var handleScroll = function (e) {
                    var target = e.target;
                    setScroll({
                        childHeight: target.clientHeight,
                        thumbOnTrack: +(target.clientHeight / target.scrollHeight),
                        scrolledRatio: +(target.scrollTop /
                            (target.scrollHeight - target.clientHeight)),
                    });
                };
                firstChild.addEventListener("scroll", handleScroll);
            }
            else {
                console.log(firstChild);
            }
        }
        else {
            console.log(containerRef.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React.createElement("div", { ref: containerRef, style: {
            display: "flex",
            // flexDirection: "column",
            // justifyContent: "space-evenly",
            alignItems: "center",
        } },
        children,
        React.createElement("div", { style: {
                display: thumbOnTrack <= 0.99 ? "block" : "none",
                height: props.h ? props.h : childHeight,
                width: props.w ? props.w : 4,
                borderRadius: props.r ? props.r : 2,
                backgroundColor: props.trackColor ? props.trackColor : "#cecece",
            } },
            React.createElement("div", { style: {
                    height: props.h
                        ? props.h * thumbOnTrack
                        : childHeight * thumbOnTrack,
                    position: "relative",
                    top: props.h
                        ? +(props.h * (1 - thumbOnTrack) * scrolledRatio)
                        : childHeight && thumbOnTrack
                            ? +(childHeight * (1 - thumbOnTrack) * scrolledRatio)
                            : 30,
                    width: props.w ? props.w : 4,
                    borderRadius: props.r ? props.r : 2,
                    backgroundColor: props.thumbColor ? props.thumbColor : "#555",
                } }))));
};

exports.ScrollbarX = ScrollbarX;
exports.ScrollbarY = ScrollbarY;
//# sourceMappingURL=index.js.map
