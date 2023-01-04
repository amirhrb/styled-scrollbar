import { useEffect, useRef, useState, memo } from "react";
import PropTypes from "prop-types";

function ScrollbarX({
  w = 180,
  h = 6,
  r = 0,
  thumbColor = "#555",
  trackColor = "#cecece",
}) {
  const barRef = useRef();
  const [{ scrolledRatio, thumbOnTrack }, setScroll] = useState({
    thumbOnTrack: 0,
    scrolledRatio: 0,
  });
  useEffect(() => {
    setScroll({
      thumbOnTrack: Number(
        barRef.current.previousSibling.clientWidth /
          barRef.current.previousSibling.scrollWidth
      ).toFixed(2),
      scrolledRatio: +(
        -barRef.current.scrollLeft /
        (barRef.current.scrollWidth - barRef.current.clientWidth)
      ).toFixed(2),
    });

    barRef.current.previousSibling.addEventListener("scroll", (e) => {
      setScroll({
        thumbOnTrack: Number(
          e.target.clientWidth / e.target.scrollWidth
        ).toFixed(2),
        scrolledRatio: +(
          -e.target.scrollLeft /
          (e.target.scrollWidth - e.target.clientWidth)
        ).toFixed(2),
      });
    });
  }, []);
  return (
    <div
      ref={barRef}
      style={{
        display: thumbOnTrack >= 0.99 ? "none" : "block",
        width: w
          ? w
          : barRef.current
          ? barRef.current.previousSibling.clientWidth
          : "90",
        height: h,
        borderRadius: r,
        backgroundColor: trackColor,
      }}
    >
      {console.log(typeof scrolledRatio)}
      <div
        style={{
          width: w
            ? w * thumbOnTrack
            : barRef.current
            ? barRef.current.previousSibling.clientWidth * thumbOnTrack
            : "30",
          position: "relative",
          right: w
            ? Number(w * (1 - thumbOnTrack) * scrolledRatio)
            : barRef.current && thumbOnTrack
            ? Number(
                barRef.current.previousSibling.clientWidth *
                  (1 - thumbOnTrack) *
                  scrolledRatio
              )
            : "30",
          height: h,
          borderRadius: r,
          backgroundColor: thumbColor,
        }}
      ></div>
    </div>
  );
}
ScrollbarX.propTypes = {
  w: PropTypes.number,
  h: PropTypes.number,
  r: PropTypes.number,
  thumbColor: PropTypes.string,
  trackColor: PropTypes.string,
};
export default memo(ScrollbarX);
