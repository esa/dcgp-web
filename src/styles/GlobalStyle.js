import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export default createGlobalStyle`
  ${styledNormalize};

  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.title};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code, pre {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  .katex-display {
    &&& {
    margin: 0;
    }
  }
`;
