import styled from 'styled-components'


export const Container = styled.div`
    display:flex ;
    margin: 20px 0 ;
    border: 1px solid #555;
    align-items:center ;
    padding:20px ;
    border-radius: 10px ;

    input{
        color: var(--text) ;
        border: 0 ;
        background:transparent ;
        font-size:1.2rem ;
        flex:1 ;
        outline:0 ;
    }
    button{
        margin-right:0.5rem ;
        background:transparent ;
        border: 0 ;
    }

`