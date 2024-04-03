import styled, {css} from "styled-components";

type LinkPropsType={
    changer?: string
    changeFon?:string
    changeFonNav?: string
    changeRazmer?: boolean;

}
export const Link = styled.a<LinkPropsType>`
    color: ${props => props.changer || "#2753b4"};
    font-size: 2rem;
    font-weight: bold;    
    background-color:  ${props => props.changeFon || "#5bb427"};
    padding: 0;
    &:hover{
        color:${props => props.changeFonNav || "#fa4d0c"};
    }
    ${props => props.changeRazmer && css <LinkPropsType>`
        box-shadow: 5px 5px 5px 5px dimgray;
    `};

`