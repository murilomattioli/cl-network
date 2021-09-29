import styled from "styled-components";
import { Colors } from  '../../styles/Colors';

export const InputStyles = styled.div`
  * {
    border-radius: 4px;
  };
  height: 28px;
  min-height: 28px;
  max-height: 28px;
  display: flex;
  flex: 1;
  box-shadow: 0 0 0 1px inset ${Colors.grey};
  border-radius: 4px;
  padding-left: 11px;

  input {
    outline: none;
    display: flex;
    flex: 1;
    padding: 0px;
    border: none;
    background: transparent;
    color: ${Colors.black};

    ::placeholder { 
      color: ${Colors.grey};
    }
  }
  
`;
