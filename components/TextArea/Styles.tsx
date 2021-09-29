import styled from "styled-components";
import { TextAreaProps } from ".";
import { Colors } from  '../../styles/Colors';

export const TextAreaStyles = styled.div<TextAreaProps>`
  * {
    border-radius: 4px;
  };
  height: 74px;
  min-height: 74px;
  max-height: 74px;
  display: flex;
  flex: 1;
  box-shadow: 0 0 0 1px inset ${Colors.grey};
  border-radius: 4px;
  
  textarea {
    outline: none;
    display: flex;
    flex: 1;
    padding: 0px;
    border: none;
    background: transparent;
    color: ${Colors.black};
    padding-top: 7px;
    padding-left: 10px;
    
    ::placeholder { 
      color: ${Colors.grey};
    }
  }
  
`;
