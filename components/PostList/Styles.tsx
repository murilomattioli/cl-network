import styled from "styled-components";
import { PostListProps } from ".";

export const PostListStyles = styled.div<PostListProps>`
  display: flex;
  flex: 1;
  flex-direction: column;

  .post-list-content {
    flex: 1 auto;
    height: 0px;
    max-height: 100%;

    .post-item {
      display: flex;
      flex: 1;
      margin-bottom: 44px;
    }

    .end-posts {
      height: 1px;
      transform: translateY(-1px);
    }
  }
`;
