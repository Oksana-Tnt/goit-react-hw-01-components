import { styled } from "styled-components";

export const Label=styled.span`
    color: ${(props) => (props.theme.colors.white)};
    font-size:large;
    text-transform: lowercase;
`

export const Percentage = styled.span`
    color: ${(props) => (props.theme.colors.white)};
    font-size: 24px;
`