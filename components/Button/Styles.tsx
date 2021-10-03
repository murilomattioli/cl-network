import styled from "styled-components";
import { BUTTON_WIDTH, BUTTON_HEIGHT } from ".";
import { Colors } from '../../styles/Colors';
import { ButtonProperties } from "./Component";

export const ButtonStyles = styled.div<ButtonProperties>`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${({ color = 'black' }) => Colors?.[color]};
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

    .btn-content {
      align-items: center;
      justify-content: center;
    }
  }

  &.--btn-disabled {
    pointer-events: none;
    opacity: .3;
  }

  .btn-content {
    display: flex;
    flex: 1;
    background: ${({ color = 'black' }) => Colors?.[color]};
    box-shadow: 0 0 0 1px inset ${({ color = 'black' }) => (color === 'white' ? Colors.black : 'transparent')};

    .btn-text-wrapper {
      display: flex;
      flex: 1;
      outline: none;
      padding: 0px;
      border: none;
      height: 100%;
      background: transparent;
      color: ${({ color = 'black' }) => Colors?.[color]};
      align-items: center;
      justify-content: center;
      overflow: hidden;

      span.text {
        color: ${({ color = 'black' }) => Colors?.[color === 'black' ? 'white' : 'black']};
        font-weight: 700;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 10px;
        padding-left: 10px;
      }
    }

    &:hover {
      cursor: pointer;
      background: ${({ color = 'black' }) => Colors[`--hover-${color}`]};
    }

    &:active, &:focus {
      background: ${({ color = 'black' }) => Colors[`--action-${color}`]};
    }
  }
`;
