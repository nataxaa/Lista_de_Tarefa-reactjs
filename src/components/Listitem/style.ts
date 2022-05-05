import styled from 'styled-components'

interface ContainerProps{
    done: boolean;
}


export const Container = styled.div<ContainerProps>`
    display:flex ;
    align-items:center ;
    background-color:#20212c;
    margin-bottom:0.6rem;
    padding:10px ;
    border-radius:10px ;
    height:2rem ;

    input{
        width:20px ;
        height:20px ;
        margin-right:0.4rem ;
    }

    label{
        color: #ccc ;
        text-decoration: ${(props) => props.done ? 'line-through' : 'inicial'}
    }
`