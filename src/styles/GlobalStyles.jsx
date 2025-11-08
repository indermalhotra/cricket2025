import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{
        font-size: 62.5%;
    }
    body{
        background-color: var(--color-primary-50);
        width: 100vw;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        background-image: url(images/Stadium.jpg);
        background-size: cover; 
        background-repeat: no-repeat;
        background-position: center;
        margin: 0;
        padding: 0; 
    }
    :root{
        --color-primary-50: #FFFFEA;
        --color-primary-100: #c3c3b1;
        --color-primary-200: #9b9b8d;
        --color-primary-300: #737369;
        --color-primary-400: #4c4c49;
        --color-primary-500: #242422;

        --color-secondary-50: #b3f7f6;
        --color-secondary-100: #00CECB;
        --color-secondary-200: #57abaa;
        --color-secondary-300: #2a7e7e;
        --color-secondary-400: #0b6565;
        --color-secondary-500: #064d4c;

        --color-grey-0: #fff;
        --color-grey-50: #f9fafb;
        --color-grey-100: #f3f4f6;
        --color-grey-200: #e5e7eb;
        --color-grey-300: #d1d5db;
        --color-grey-400: #9ca3af;
        --color-grey-500: #6b7280;
        --color-grey-600: #4b5563;
        --color-grey-700: #374151;
        --color-grey-800: #1f2937;
        --color-grey-900: #111827;

        --color-yellow: #FFED66;
        --color-yellow-100: #fff4b3;
        --color-yellow-200: #fff080;
        --color-yellow-300: #d7c844;
        --color-yellow-400: #bbac23;
        --color-yellow-500: #b8ab45;

        --biggerFont: 4rem;
        --bigFont: 3rem;
        --mediumFont: 2.4rem;
        --smallFont: 1.8rem;
    }
`;

export default GlobalStyles;
