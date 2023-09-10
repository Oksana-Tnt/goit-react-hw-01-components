import { styled } from "styled-components";

const setBackgroundColor = props => {
    if(props.typeStatus){
        return 'green';
    }
    else return 'red';
}
export const Status= styled.span`
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: ${setBackgroundColor};

`