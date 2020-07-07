import styled from  'styled-components'

export const Header = styled.div`
    position: sticky;
    top: 0px;
    padding: 10px 0 10px 10px;
    display: flex;
    justify-content: space-around;
    background-color: #6652eb;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    align-items: center;
`
export const divSearch = styled.div`
    display: flex;

`
export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`

export const inputName = styled.input`
    outline: none;
    padding: 5px; 
    border: none;
    border-bottom-left-radius: 5px; 
    border-top-left-radius: 5px; 
`

export const buttonSearch = styled.button`
    align-items: center;
    border: none;
    border-left: 1px solid black;
    border-top-right-radius: 5px; 
    border-bottom-right-radius: 5px; 
    display: flex;
    outline: none ;
    padding: 0 10px 0 10px;
    background-color: #e0e4e8;
    &:hover{
        background-color: red
    }
` 

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right;
    padding: 0 20px 0 20px
` 
