import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Space+Mono:ital@0;1&display=swap");

:root {
    --Strong_cyan: hsl(172, 67%, 45%);

    --Very_dark_cyan: hsl(183, 100%, 15%);
    --Dark_grayish_cyan: hsl(186, 14%, 43%);
    --Dark_grayish_cyan_1: hsl(184, 14%, 56%);
    --Light_grayish_cyan_1: hsl(185, 41%, 84%);
    --Light_grayish_cyan: hsl(189, 41%, 97%);
    --White: hsl(0, 0%, 100%);
    --Error: rgb(242,100,92);
    --toastify-color-progress-success: var(--Very_dark_cyan);
    --toastify-color-progress-error: var(--Error);
}
*,
p,
a {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

html{
    font: 62.5%;
    scroll-behavior: smooth;
}

body{
    font-family: "Space Mono", sans-serif ;

    input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    box-shadow: 0 0 0 30px white inset !important;
  }
}

.createContactModal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.createContactOverlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1000;
}

`;
export default GlobalStyles;
