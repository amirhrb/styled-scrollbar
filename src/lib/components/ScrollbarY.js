import { useEffect, useRef, useState, memo } from "react";
import PropTypes from "prop-types";

function ScrollbarY({
  h,
  w = 6,
  r = 0,
  thumbColor = "#555",
  trackColor = "#cecece",
}) {
  const barRef = useRef();
  const [thumRatio, setThumRatio] = useState(0);
  const [scrolledRatio, setScrolledRatio] = useState(0);
  const [prevHeight, setPrevheight] = useState(0);
  useEffect(() => {
    const prevEl = barRef.current.previousSibling;
    setThumRatio(prevEl.clientHeight / prevEl.scrollHeight);
    setScrolledRatio(
      -prevEl.scrollTop / (prevEl.scrollHeight - prevEl.clientHeight)
    );
    setPrevheight(prevEl.clientHeight);

    prevEl.addEventListener("scroll", (e) => {
      setThumRatio(+(e.target.clientHeight / e.target.scrollHeight));
      setScrolledRatio(
        +(-e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight))
      );
      setPrevheight(prevEl.clientHeight);
    });
  }, []);
  return (
    <div
      ref={barRef}
      style={{
        display: thumRatio >= 0.99 ? "none" : "block",
        width: w,
        height: h
          ? h
          : prevHeight
          ? barRef.current.previousSibling.clientHeight
          : 0,
        borderRadius: r,
        backgroundColor: trackColor,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: w,
          position: "relative",
          bottom: h
            ? h * (1 - thumRatio) * scrolledRatio
            : prevHeight && thumRatio
            ? prevHeight * (1 - thumRatio) * scrolledRatio
            : 0,

          height: h ? h * thumRatio : prevHeight ? prevHeight * thumRatio : 0,
          borderRadius: r,
          backgroundColor: thumbColor,
        }}
      ></div>
    </div>
  );
}
ScrollbarY.propTypes = {
  w: PropTypes.number,
  h: PropTypes.number,
  r: PropTypes.number,
  thumbColor: PropTypes.string,
  trackColor: PropTypes.string,
};
export default memo(ScrollbarY);
