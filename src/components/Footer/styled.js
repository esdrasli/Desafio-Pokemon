import styled from 'styled-components'
import { FiGithub } from "react-icons/fi";


export const Footer = styled.div`
    position: sticky;
    top: 0px;
    padding: 10px 0 10px 10px;
    display: flex;
    justify-content: space-around;
    background-color: #6652eb;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    align-items: center;
`

export const divFooter = styled.div`
    display: flex;
    padding: 25px;

`
export const fiGithub = styled(FiGithub)`
    width: 40px;
    height:40px;
    border: 1px solid black;
    border-radius: 25px; 
    padding: 5px;
    color: black;
`