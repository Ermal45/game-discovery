import {createGlobalStyle} from 'styled-components'


// poppin fonts

import Regular from '../assets/fonts/Poppins-Regular.ttf'
import Medium from '../assets/fonts/Poppins-Medium.ttf'
import Light from '../assets/fonts/Poppins-Light.ttf'
import Bold from '../assets/fonts/Poppins-Bold.ttf'

const GlobalStyle = createGlobalStyle`
 

 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html {
     font-size: 100%;
 }




 // colors

 :root {
     --clr-orange: #FF7135;
     --clr-purple-dark: #33153F;
     --clr-purple-light: #734CF4;
     --clr-white: #FFFFFF;
     --clr-card-description-bg: #F9F9F9;
     --clr-text: #7A7A7A;
     --clr-black: #000000;
     --clr-btn-search: #060606;
     --clr-dropdown-title: #3F3F3F;
     --clr-footer-text-end: #D8D8D8;
     --clr-navigation-links: #E5E5E5;
     --clr-btn-next-previous: #3F3F3F;
     --clr-search-text: #C4C4C4;
     --clr-white: #FFFFFF;
     --card-box-shadow:  0.5px 0.5px 4px 0px rgba(0,0,0,0.25);
     --card-radius: 5px;
     --modal-bg-dark: rgba(0,0,0,0.5);
     --metacritic-outline-green: #3A9432;
     --metacritic-outline-orange: #FF7135;
     --metacritic-outline-red: #FF3535;
     --main-transition: all 0.3s ease;
 }


  body {
      font-family: poplight;
  }

  html,body,#root {
      width: 100%;
      height: 100%;
  }

 p {
     line-height: 192.5%;
     color: var(--clr-text);
     font-family: popregular; 
 }

 h1 {
     font-size: 1.5rem;
     font-family: popbold;
     padding: 1em 0;
     color: var(--clr-purple-dark);
 }

 a {
   text-decoration: none;
   cursor: pointer;
 }

 /* iframe {
     outline: none;
     border: none;
     border-radius: 10px;
     width: 40rem;
     height: 30rem;
 } */


 @media screen and (min-width: 1024px) {
     h1 {
         font-size: 3rem;
     }
 }


 @font-face {
     font-display: swap;
     font-family: poplight;
     src: url(${Light})
 }

 @font-face {
     font-display: swap;
     font-family: popregular;
     src: url(${Regular})
 }

 @font-face {
     font-display: swap;
     font-family: popmedium;
     src: url(${Medium})
 }

 @font-face {
     font-display: swap;
     font-family: popbold;
     src: url(${Bold})
 }




`


export default GlobalStyle