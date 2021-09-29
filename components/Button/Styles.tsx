import styled from "styled-components";
import { ButtonProps, DEFAULT_BUTTON_HEIGHT, DEFAULT_BUTTON_WIDTH } from ".";
import { Colors } from  '../../styles/Colors';

export const ButtonStyles = styled.div<ButtonProps>`
  display: flex;
  flex: 1;
  height: ${({ height }) => height || DEFAULT_BUTTON_HEIGHT}px;
  min-height: ${({ height }) => height || DEFAULT_BUTTON_HEIGHT}px;
  max-height: ${({ height }) => height || DEFAULT_BUTTON_HEIGHT}px;
  width: ${() => DEFAULT_BUTTON_WIDTH}px;
  min-width: ${() => DEFAULT_BUTTON_WIDTH}px;
  max-width: ${() => DEFAULT_BUTTON_WIDTH}px;
  background: ${() => Colors.black};

  .btn-text-wrapper {
    display: flex;
    flex: 1;
    outline: none;
    padding: 0px;
    border: none;
    height: 100%;
    background: transparent;
    color: ${() => Colors.black};
    align-items: center;
    justify-content: center;
    overflow: hidden;

    span.text {
      color: ${() => Colors.white};
      font-weight: 700;
      font-size: 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
  
`;
