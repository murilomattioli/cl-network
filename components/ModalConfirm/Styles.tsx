import styled from "styled-components";
import { ModalConfirmProps, MODAL_CONFIRM_DEFAULT_HEIGHT, MODAL_CONFIRM_DEFAULT_WIDTH } from ".";
import { Colors } from '../../styles/Colors';

export const ModalConfirmStyles = styled.div<ModalConfirmProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  position: fixed;
  z-index: 9999999;
  align-items: center;
  top: 0;
  background: rgba(119, 119, 119, 0.8);

  .content {
    margin-top: 10vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    height: ${() => MODAL_CONFIRM_DEFAULT_HEIGHT}px;
    min-height: ${() => MODAL_CONFIRM_DEFAULT_HEIGHT}px;
    max-height: ${() => MODAL_CONFIRM_DEFAULT_HEIGHT}px;
    width: 92vw;
    max-width: ${() => MODAL_CONFIRM_DEFAULT_WIDTH}px;
    box-shadow: 0 0 0 1px inset ${Colors["grey-mid"]};
    background: ${() => Colors.white};
    padding: 0 58px;
  }

  .title-wrapper {
    display: flex;
    background: transparent;
    overflow: hidden;
    margin-bottom: 50px;

    span.title {
      color: ${() => Colors.black};
      font-size: 22px;
      /* white-space: nowrap; */
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .buttons-wrapper {
    display: flex; 
    justify-content: flex-end;
    gap: 16px;

    .button-wrapper {
      display: flex;
      flex-direction: column;
      background: transparent;
      overflow: hidden;
    }
  }
`;
