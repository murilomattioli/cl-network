import styled from "styled-components";
import { Colors } from  '../../styles/Colors';
import { NETWORK_CONTENT_DEFAULT_MAX_WIDTH } from "./Constants";
import { NetworkProps } from "./types";

export const PageNetworkStyles = styled.div<NetworkProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  background: ${() => Colors["--background-grey"]};
  align-items: center;

  .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    max-width: ${NETWORK_CONTENT_DEFAULT_MAX_WIDTH}px;
    background: ${() => Colors.white};
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${() => Colors["--background-grey"]};
    }

    &::-webkit-scrollbar {
      width: 12px;
      background-color: transparent;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${() => Colors.black};
    }

    .header {
      display: flex;
      flex: 1;
      min-height: 80px;
      height: 80px;
      max-height: 80px;
      padding: 0px 25px 0px 38px;
      background: ${() => Colors.black};

      .title-wrapper {
        display: flex;
        flex: 1;
        align-items: center;

        .title {
          color: ${() => Colors.white};
          font-weight: 700;
          font-size: 22px;
        }
      }

      .user-controls-wrapper {
        display: flex;
        align-items: center;

        .user-controls {
          color: ${() => Colors.white};
          font-size: 16px;
        }
      }
    }
    
    .network-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 44px 38px;
      padding-bottom: 0px;

      .post-manager-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 34px;
      }

      .post-list-wrapper {
        display: flex;
        flex: 1;
        flex-direction: column;
        min-height: 0;
      }
    }
  }
`;
