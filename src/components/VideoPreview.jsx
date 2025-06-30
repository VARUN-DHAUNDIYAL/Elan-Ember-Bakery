import React from "react";

const VideoPreview = ({ src, clipClass }) => (
  <div className={`relative w-full h-64 md:h-96 overflow-hidden ${clipClass}`}>
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full object-cover"
    />
  </div>
);

export default VideoPreview; 