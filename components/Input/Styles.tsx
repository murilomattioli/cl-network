import styled from "styled-components";
import { Colors } from '../../styles/Colors';
import { InputProps } from "./Component";

export const InputStyles = styled.div<InputProps>`
  * {
    border-radius: 4px;
  };
  height: 28px;
  min-height: 28px;
  max-height: 28px;
  display: flex;
  flex: 1;
  box-shadow: 0 0 0 1px inset ${() => Colors.grey};
  border-radius: 4px;

  input {
    outline: none;
    display: flex;
    flex: 1;
    padding: 0px;
    border: none;
    background: transparent;
    color: ${() => Colors.black};
    padding-right: 10px;
    padding-left: 10px;

    ::placeholder { 
      color: ${() => Colors.grey};
    }
  }
  
`;
