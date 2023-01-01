import { useEffect, useRef, useState } from "react";

function ScrollbarX({
  w = 180,
  h = "6px",
  r = "0px",
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
        width: w,
        height: h,
        borderRadius: r,
        backgroundColor: trackColor,
      }}
    >
      <div
        style={{
          width: w * thumbOnTrack,
          position: "relative",
          right: w * (1 - thumbOnTrack) * scrolledRatio,
          height: h,
          borderRadius: r,
          backgroundColor: thumbColor,
        }}
      ></div>
    </div>
  );
}
function ScrollbarY({
  h = 180,
  w = "6px",
  r = "0px",
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
        barRef.current.previousSibling.clientHeight /
          barRef.current.previousSibling.scrollHeight
      ).toFixed(2),
      scrolledRatio: +(
        -barRef.current.scrollTop /
        (barRef.current.scrollHeight - barRef.current.clientHeight)
      ).toFixed(2),
    });

    barRef.current.previousSibling.addEventListener("scroll", (e) => {
      setScroll({
        thumbOnTrack: Number(
          e.target.clientHeight / e.target.scrollHeight
        ).toFixed(2),
        scrolledRatio: +(
          -e.target.scrollTop /
          (e.target.scrollHeight - e.target.clientHeight)
        ).toFixed(2),
      });
    });
  }, []);
  return (
    <div
      ref={barRef}
      style={{
        width: w,
        height: h,
        borderRadius: r,
        backgroundColor: trackColor,
      }}
    >
      <div
        style={{
          height: h * thumbOnTrack,
          position: "relative",
          top: h * (1 - thumbOnTrack) * scrolledRatio,
          width: w,
          borderRadius: r,
          backgroundColor: thumbColor,
        }}
      ></div>
    </div>
  );
}
export { ScrollbarX, ScrollbarY };
