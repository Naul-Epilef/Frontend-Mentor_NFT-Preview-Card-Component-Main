import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --blue-soft: hsl(215, 51%, 70%);
    --cyan: hsl(178, 100%, 50%);
    --cyan05: hsl(178, 100%, 50%, 0.5);

    --blue-dark-main: hsl(217, 54%, 11%);
    --blue-dark-card: hsl(216, 50%, 16%);
    --blue-dark-line: hsl(215, 32%, 27%);

    --white: hsl(0, 0%, 100%);
}

* {
    margin: 0;
    padding: 0;
    border: 0;

    font-family: "Outfit", sans-serif;
}

body {
    background-color: var(--blue-dark-main);
    color: var(--blue-soft)
}
`;

export default GlobalStyle;
