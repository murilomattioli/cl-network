import styled from "styled-components";
import { ModalCustomProps } from ".";

export const ModalCustomStyles = styled.div<ModalCustomProps>`
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
  justify-content: center;
  top: 0;

  .content {
    z-index: 9;
    display: block;
    background-color: white;

    .post-manager {
      max-width: 723px;
      width: 92vw;
    }
  }

  .background-modal {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1; 
    top: 0px;
    left: 0px;
    background: rgba(119, 119, 119, 0.8);
  }
`;
