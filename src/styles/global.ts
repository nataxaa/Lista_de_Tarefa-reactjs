import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
:root{
    --background : #0F1020 ;
    --text:#F3F3F4 ;
}
*{
    margin:0 ;
    padding:0 ;
    
    color: var(--text) ;
}
body{
    background: var(--background) ;
    -webkit-font-smoothing: antialiased;
    font-family:sans-serif ;
}
`