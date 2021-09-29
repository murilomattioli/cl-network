import styled from "styled-components";
import { ButtonProps, BUTTON_WIDTH, BUTTON_HEIGHT } from ".";
import { Colors } from  '../../styles/Colors';

export const ButtonStyles = styled.div<ButtonProps>`
  display: flex;
  flex: 1;
  background: ${() => Colors.black};
  height: ${({ height }) => height || BUTTON_HEIGHT.default}px;
  min-height: ${({ height }) => height || BUTTON_HEIGHT.default}px;
  max-height: ${({ height }) => height || BUTTON_HEIGHT.default}px;
  width: ${() => BUTTON_WIDTH.default}px;
  min-width: ${() => BUTTON_WIDTH.default}px;
  max-width: ${() => BUTTON_WIDTH.default}px;
  
  &.--btn-icon {
    height: ${() => BUTTON_HEIGHT.icon}px;
    min-height: ${() => BUTTON_HEIGHT.icon}px;
    max-height: ${() => BUTTON_HEIGHT.icon}px;
    width: ${() => BUTTON_WIDTH.icon}px;
    min-width: ${() => BUTTON_WIDTH.icon}px;
    max-width: ${() => BUTTON_WIDTH.icon}px;
    align-items: center;
    justify-content: center;
  }

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

  :active {
    background: ${() => Colors["--action-black"]};
  }
`;
