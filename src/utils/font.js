import { css } from 'styled-components'

// font tracking variables from: https://rsms.me/inter/dynmetrics/
const A = -0.0223
const B = 0.185
const C = -0.1745

export function interLetterSpacing(fontSizePx) {
  const spacing = A + B * Math.exp(C * fontSizePx)
  return spacing.toFixed(5)
}

export function setInterFontSizeAndSpacing(fontSizePx) {
  return css`
    font-size: ${fontSizePx / 16}rem;
    letter-spacing: ${interLetterSpacing(fontSizePx)}em;
  `
}
