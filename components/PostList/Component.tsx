import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import uniqueId from 'lodash/uniqueId';
import { PostListProps } from '.';
import { PostCard } from '..';
import networkPostsHooks from '../../hooks/networkPostsHooks';
import { InitialStateProps } from '../../redux/types';
import { PostListStyles } from './Styles';

const PostListComponentNoMemo: React.FC<PostListProps> = (props) => {
  const {
    className,
  } = props;
  const [loadNetworkPosts] = networkPostsHooks.useLoadNetworkPosts();
  const networkPosts = useSelector((state: InitialStateProps) => state.networkPosts);
  const PostListClassName = useMemo(() => `post-list ${className}`, []);

  useEffect(() => {
    loadNetworkPosts();
  }, []);

  return (
    //@ts-ignore
    <PostListStyles {...props} className={PostListClassName}>
      <div className='post-list-content'>
        {networkPosts.map((post, index) => {
          const key = uniqueId();
          return (
            <React.Fragment key={key}>
              <div className='post-item'>
                <PostCard {...post} />
              </div>
              {(index + 1) === networkPosts.length && <div className='end-posts' />}
            </React.Fragment>
          )
        })}
      </div>
    </PostListStyles>
  );
}

const propsAreEqual = (prevProps: PostListProps, nextProps: PostListProps): boolean => (
  prevProps.className === nextProps.className
);

export const PostListComponent = React.memo(PostListComponentNoMemo, propsAreEqual);
