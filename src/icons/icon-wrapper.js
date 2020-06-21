import React from "react";
import styled from "styled-components";

const StyledIconWrapper = styled.svg.attrs(({ boxWidth }) => ({
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: `0 -410 ${boxWidth} 2458`,
}))`
  fill: currentColor;
  color: inherit;
  user-select: none;
  height: 1.25em;
  vertical-align: text-bottom;
  transform-origin: center;
`;

export default React.forwardRef(({ children, ...restProps }, ref) => (
  <StyledIconWrapper {...restProps} ref={ref}>
    <g transform="scale(1, -1) translate(0, -1638)">{children}</g>
  </StyledIconWrapper>
));
