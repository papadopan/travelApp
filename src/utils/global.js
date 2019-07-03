import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after{
    margin:0;
    padding:0;
}

html{
    font-size:62.5%;
    font-family:Helvetica;
    --color-white: ${props => props.theme.colors.white};
    --color-black: ${props => props.theme.colors.black};
    --color-main: ${props => props.theme.colors.main};
    --color-secondary: ${props => props.theme.colors.secondary};
    --color-grey: ${props => props.theme.colors.grey};
    --color-shadow: ${props => props.theme.colors.shadow};

    a, li, ul {
        text-decoration:none;
        list-style:none;
    }
}
`;
