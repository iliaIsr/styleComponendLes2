import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/Animations";

type StyledBtnPropsType = {
    color?: string//без вопроса (?) он будет всегда ждать таких пропсов
    fontSize?: string// даже если их нет в самом App.tsx
    // primary?: boolean //ключ/значение. если значения нет
    // outlined?: boolean // то пишем булиан
    btnType: "primary" | "outlined"// объединили два вепхних в btnType
    // как пример. можно и не объединять
    active?: boolean;
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    // background-color: ${props => props.color || "#fb3f78"};
    padding: 10px 20px;
    color: snow;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;
    // общие свойства всех кнопок (общий стиль)

    
   
    //outlined   булевые пропсы!!!
${props => props.btnType==="outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "#fb3f78"};
    color: ${props => props.color || "#fb3f78"};
    background-color: transparent;

    &:hover {
        border-color: #2753b4;
    color:#2753b4 ;
    background-color: transparent;
`} // индивидуальный стиль добавляется к общему

   //primary     булевые пропсы!!!
  ${props => props.btnType==="primary" && css <StyledBtnPropsType>`
      background-color: ${props => props.color || "#fb3f78"};
      color: snow;
      &:hover {
          background-color: #2753b4;
      }
    `
}// булевые пропсы!!! если да (приходит такой пропс) то
  //используй также css
  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 6px 6px 6px 6px dimgray;
`}
`

