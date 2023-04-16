// src/InViewLoader.js
import React from "react";
import { InView } from "react-intersection-observer";

const InViewLoader = ({ component: Component, alt, ...props }) => {
  const fadeInStyle = {
    opacity: 0,
    transition: "opacity 0.5s ease-out",
  };

  const visibleStyle = {
    opacity: 1,
  };

  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <div
          ref={ref}
          style={inView ? { ...fadeInStyle, ...visibleStyle } : fadeInStyle}
        >
          {inView && <Component alt={alt} {...props} />}
        </div>
      )}
    </InView>
  );
};

export default InViewLoader;
