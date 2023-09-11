import { styled } from "styled-components";

export const Status= styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid ${(props) => (props.theme.colors.colorText)};
    border-radius: 50%;
    background-color: ${(props) => (props.typestatus ? "green" : "red")};

`
export const Img = styled.img`
    
    width: 70px;
`
export const P=styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-weight: 500;
    font-size: large;
    color: ${(props) => (props.theme.colors.colorText)};
`

