import { createGlobalStyle } from 'styled-components';
import { Styles } from '../GlobalStyles/Styles';
export const GlobalStyles = createGlobalStyle`

  *{
    padding: 0;
    outline: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

.TotalContainer{
  overflow: hidden;
  width: 100vw;
  position :relative;
  display: flex;
}
 

  body{
    width: 100vw;
    height: 100%;
    font-family: 'Roboto Condensed', sans-serif;  
   
  }

  #root{
    display: flex;
    background-color: ${Styles.asideBGColor}
  }
`;
