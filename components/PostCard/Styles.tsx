import styled from "styled-components";
import { PostCardProps, POST_CARD_HEIGHT } from ".";
import { Colors } from "../../styles/Colors";

export const PostCardStyles = styled.div<PostCardProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: ${() => POST_CARD_HEIGHT}px;
  min-height: ${() => POST_CARD_HEIGHT}px;
  max-height: ${() => POST_CARD_HEIGHT}px;
  box-shadow: 0 0 0 1px inset ${() => Colors["--border-grey"]};
  
  .post-card-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;

    .header {
      display: flex;
      flex: 1;
      height: 70px;
      min-height: 70px;
      max-height: 70px;
      padding: 0 38px;
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

      .post-controls-wrapper {
        display: flex;
        align-items: center;
        gap: 24px;

        .control {
          display: flex;
        }
      }
    }

    .post-card-info {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 24px 30px;
      overflow: hidden;
      
      .info-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 18px;

        .info-username, .info-date {
          display: flex;
          margin-right: 20px;

          span {
            font-size: 18px;
            color: ${() => Colors.grey};

            &.username {
              font-weight: 700;
            } 
          }
        }
      }
      
      .post-info-content {
        display: flex;
        flex: 1;
        max-height: 164px;
        overflow-y: auto;
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
          
        span.post-content {
          display: flex;
          flex: 1;
          font-size: 18px;
          /* background-color: #0000003b; */
        }
      }
    }

  }
`;
