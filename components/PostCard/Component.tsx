import moment from 'moment';
import { useRouter } from 'next/dist/client/router';
import React, { useCallback, useMemo, useState } from 'react';
import { PostCardProps } from '.';
import { Button, NetworkPostProps } from '..';
import userHooks from '../../hooks/userHooks';
import { PostCardStyles } from './Styles';

const PostCardComponentNoMemo: React.FC<PostCardProps> = (props) => {
  const {
    className,
    children,
    ...postProps
  } = props;
  const [getUser] = userHooks.useGetUser();
  const [post] = useState<NetworkPostProps>(postProps);
  const postCardClassName = useMemo(() => `post-creator ${className}`, []);
  const formatedCreatedDatetime = useMemo(() => moment(post?.created_datetime)?.fromNow(), [post]);
  const showPostControls = useMemo(() => post?.username === getUser()?.username, [post, getUser]);
  const usernameLabel = useMemo(() => '@' + post?.username, []);
  const router = useRouter();

  const handleClickDelete = useCallback(() => {
    router.push(`/Network`, { query: { delete: postProps.id } });
  }, [postProps]);

  const handleClickEdit = useCallback(() => {
    router.push(`/Network`, { query: { patch: postProps.id } });
  }, [postProps]);

  return (
    //@ts-ignore
    <PostCardStyles {...props} className={postCardClassName}>
      <div className='post-card-content'>
        <div className='header'>
          <div className='title-wrapper'>
            <span className='title'>{post?.title}</span>
          </div>
          {showPostControls && (
            <div className='post-controls-wrapper'>
              <div className='control'>
                <Button icon='trash' onClick={handleClickDelete} />
              </div>
              <div className='control'>
                <Button icon='edit' onClick={handleClickEdit} />
              </div>
            </div>
          )}
        </div>

        <div className='post-card-info'>
          <div className='info-row'>
            <div className='info-username'>
              <span className='username'>{usernameLabel}</span>
            </div>
            <div className='info-date'>
              <span className='date'>{formatedCreatedDatetime}</span>
            </div>
          </div>
          <div className='post-info-content'>
            <span className='post-content'>{post?.content}</span>
          </div>
        </div>
      </div>
    </PostCardStyles>
  );
}

const propsAreEqual = (prevProps: PostCardProps, nextProps: PostCardProps): boolean => (
  prevProps.className === nextProps.className &&
  prevProps.content === nextProps.content &&
  prevProps.created_datetime === nextProps.created_datetime &&
  prevProps.id === nextProps.id &&
  prevProps.title === nextProps.title &&
  prevProps.username === nextProps.username
);

export const PostCardComponent = React.memo(PostCardComponentNoMemo, propsAreEqual);
