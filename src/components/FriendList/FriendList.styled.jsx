import { styled } from "styled-components";

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap:10px;
    align-items: center;

`
export const Li = styled.li`
    display: flex;
    gap: 20px;
    width: 300px;
    padding: 10px;
    align-items: center;
    border: 2px solid ${(props) => (props.theme.colors.border)};
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`