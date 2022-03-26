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
    
    min-height: 100vh; 
    background-color: #C5E4E7 ;
    font-family: "Space Mono", sans-serif ;

}

.App{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
`;
export default GlobalStyles;
