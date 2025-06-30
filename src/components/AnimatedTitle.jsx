import React from "react";

const AnimatedTitle = ({ title, containerClass = "" }) => {
  return (
    <h2 className={`animated-title ${containerClass}`}>
      {title.split(" ").map((word, idx) => (
        <span className="animated-word" key={idx}>
          {word}
        </span>
      ))}
    </h2>
  );
};

export default AnimatedTitle; 