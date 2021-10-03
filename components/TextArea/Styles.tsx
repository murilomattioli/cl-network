import styled from "styled-components";
import { Colors } from '../../styles/Colors';
import { TextAreaProps } from "./Component";
import { TEXTAREA_DEFAULT_HEIGHT } from "./Constants";

export const TextAreaStyles = styled.div<TextAreaProps>`
* {
    border-radius: 4px;
  };
  display: flex;
  flex: 1;
  border-radius: 4px;
  
  textarea {
    outline: none;
    display: flex;
    flex: 1;
    padding: 7px 10px;
    border: none;
    background: transparent;
    color: ${() => Colors.black};
    resize: none;
    min-height: ${TEXTAREA_DEFAULT_HEIGHT}px;
    max-height: ${TEXTAREA_DEFAULT_HEIGHT}px;
    box-shadow: 0 0 0 1px inset ${() => Colors.grey};
    
    &::placeholder { 
      color: ${() => Colors.grey};
    }
  }
  
`;
