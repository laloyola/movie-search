import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.textColor};
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
    }
`;

export default GlobalStyle;
