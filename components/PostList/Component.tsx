import React, { useMemo } from 'react';
import { PostListProps } from '.';
import { PostCard, PostProperties } from '..';
import userHooks from '../../hooks/userHooks';
import { PostListStyles } from './Styles';

const PostListComponentNoMemo: React.FC<PostListProps> = (props) => {
  const {
    className,
  } = props;
  const [getUser] = userHooks.useGetUser();
  const user = useMemo(() => getUser(), []);
  const PostListClassName = useMemo(() => `post-list ${className}`, []);
  const posts: Array<Partial<PostProperties>> = Array(10).fill(10).map((_v, i) => ({
    id: i+1,
    title: `Title ${i+1}`,
    content: `Lorem ipsum ${i+1}...`,
    created_datetime: new Date(),
    username: i < 3 ? user?.username : 'John Doe'
  }));

  return (
    //@ts-ignore
    <PostListStyles {...props} className={PostListClassName}>
      <div className='post-list-content'>
        {posts.map((post, index) => (
          <>
            <div className='post-item'> 
              <PostCard key={post.id} {...post} />
            </div>
            {(index + 1) === posts.length && <div className='end-posts' />}
          </>
        ))}
      </div>
    </PostListStyles>
  );
}

const propsAreEqual = (prevProps: PostListProps , nextProps: PostListProps): boolean => (
  prevProps.className === nextProps.className
);

export const PostListComponent = React.memo(PostListComponentNoMemo, propsAreEqual);
