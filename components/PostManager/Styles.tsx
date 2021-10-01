import styled from "styled-components";
import { PostManagerProps, POST_CREATOR_HEIGHT } from ".";
import { Colors } from "../../styles/Colors";

export const PostManagerStyles = styled.div<PostManagerProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: ${() => POST_CREATOR_HEIGHT}px;
  min-height: ${() => POST_CREATOR_HEIGHT}px;
  max-height: ${() => POST_CREATOR_HEIGHT}px;
  box-shadow: 0 0 0 1px inset ${() => Colors["--border-grey"]};
  
  .post-creator-content {
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 0px 30px;
    flex-direction: column;

    .title-wrapper {
      margin-bottom: 34px;

      .title {
        font-size: 22px;
        font-weight: 700;
      }
    }

    .post-creator-fields {
      .field {
        &.--field-title {
          margin-bottom: 20px;
        }

        &.--field-content {
          margin-bottom: 35px;
        }

        .field-label-wrapper {
          margin-bottom: 7px;

          .field-label {
            font-size: 16px;
          }
        }
      }

      .submit-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }
`;
