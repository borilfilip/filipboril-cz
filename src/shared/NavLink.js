import React from "react";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export const scrollDuration = 300;

const scrollNavLink = (props) => {
  return (
    <NavLink
      {...props}
      onClick={() => scroll.scrollToTop({ duration: scrollDuration })}
    >
      {props.children}
    </NavLink>
  );
};

export default scrollNavLink;
