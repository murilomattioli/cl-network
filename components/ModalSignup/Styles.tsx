import styled from "styled-components";
import { ModalSignupProps, MODAL_CENTER_DEFAULT_HEIGHT, MODAL_CENTER_DEFAULT_WIDTH } from ".";
import { Colors } from '../../styles/Colors';

export const ModalSignupStyles = styled.div<ModalSignupProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  position: absolute;
  z-index: 9999999;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    height: ${() => MODAL_CENTER_DEFAULT_HEIGHT}px;
    min-height: ${() => MODAL_CENTER_DEFAULT_HEIGHT}px;
    max-height: ${() => MODAL_CENTER_DEFAULT_HEIGHT}px;
    width: 92vw;
    max-width: ${() => MODAL_CENTER_DEFAULT_WIDTH}px;
    box-shadow: 0 0 0 1px inset ${Colors["grey-mid"]};
    background: ${() => Colors.white};
    padding: 0 28px;
  }

  .title-wrapper {
    display: flex;
    background: transparent;
    overflow: hidden;
    margin-bottom: 30px;

    span.title {
      color: ${() => Colors.black};
      font-weight: bold;
      font-size: 22px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .label-wrapper {
    display: flex;
    flex-direction: column;
    background: transparent;
    overflow: hidden;
    margin-bottom: 10px;

    span.label {
      color: ${() => Colors.black};
      font-size: 16px;
      line-height: 19px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    background: transparent;
    overflow: hidden;
    margin-bottom: 20px;

    span.input {
      color: ${() => Colors.black};
      font-size: 16px;
      line-height: 19px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    background: transparent;
    overflow: hidden;
    align-items: flex-end;
  }
`;
