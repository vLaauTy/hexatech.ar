

import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500&display=swap');

    * {
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family:'Teko', sans-serif;
    }

    :root {
    --OrangeColor:#FC6A05;
    --BlueColor:#324093;
    --BlueColor200:#E5E5ED;
    --NavLinkOff:#747474;
    --white:#fff;
}

body {
    font-family:'Teko', sans-serif;
}

html {
    scroll-behavior: smooth;
}
    
`;



export default GlobalStyle