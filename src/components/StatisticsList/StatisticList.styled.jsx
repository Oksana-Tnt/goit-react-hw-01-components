import { styled } from "styled-components";
import { getRandomColor } from "components/utils/GetRandomColor";

export const Ul=styled.ul`
    display: flex;    
    list-style: none;
   margin-left: auto;
   margin-right: auto;
  width: 500px;
   padding-top: 20px;
   padding: 0;
`

export const Li=styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    width: 100px;
    border: 2px solid gray;
    background-color: ${getRandomColor};
`