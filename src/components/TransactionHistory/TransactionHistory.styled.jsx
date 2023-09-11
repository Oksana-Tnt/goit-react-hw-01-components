import { styled } from "styled-components";

export const Table = styled.table`
    width: 800px;
    text-align: center;
    margin-left:auto;
    margin-right: auto;
    border-collapse: collapse;
    
`
export const Thead = styled.thead`
    background-color: ${(props) => (props.theme.colors.backgroundColorHead)};
    color: ${(props) => (props.theme.colors.white)};
    font-size: 14px;
    padding: 20px;
    border: 2px solid ${(props) => (props.theme.colors.border)};
    height: 50px;
`
export const Tr = styled.tr`
      &:nth-child(even){
         background-color: ${(props) => (props.theme.colors.backgroundColorTable)};
      }
       
    
`