import moment from 'moment';
import React, { useMemo } from 'react';
import { PostCardProps } from '.';
import { Button } from '..';
import userHooks from '../../hooks/userHooks';
import { PostCardStyles } from './Styles';

const PostCardComponentNoMemo: React.FC<PostCardProps> = (props) => {
  const {
    className,
    children,
    ...post
  } = props;
  const [getUser] = userHooks.useGetUser();
  const PostCardClassName = useMemo(() => `post-creator ${className}`, []);
  
  const formatedCreatedDatetime = useMemo(() => moment(post?.created_datetime)?.fromNow(), [post]);

  const showPostControls = useMemo(() => post?.username === getUser()?.username, [post, getUser]);

  return (
    //@ts-ignore
    <PostCardStyles {...props} className={PostCardClassName}>
      <div className='post-card-content'>
        <div className='header'>
          <div className='title-wrapper'>
            <span className='title'>{post?.title}</span>
          </div>
          {showPostControls && (
            <div className='post-controls-wrapper'>
              <div className='control'>
                <Button icon='trash' />
              </div>
              <div className='control'>
                <Button icon='edit' />
              </div>
            </div>
          )}
        </div>

        <div className='post-card-info'>
          <div className='info-row'>
            <div className='info-username'>
              <span className='username'>{`@${post?.username}`}</span>
            </div>
            <div className='info-date'>
              <span className='date'>{formatedCreatedDatetime}</span>
            </div>
          </div>
          <div className='post-info-content'>
            <span className='post-content'>Dolor tempor culpa irure ad pariatur officia ut pariatur. Magna aliqua eu commodo nulla et. Tempor ad ex amet ipsum dolor enim non aliqua mollit consequat. Ex labore ad ut nostrud velit anim magna quis minim Lorem. Nostrud elit culpa aute tempor. Sunt est quis mollit deserunt aliquip aliqua consectetur voluptate minim consectetur. Tempor velit id incididunt tempor exercitation ullamco anim laborum aute.

Occaecat sit esse mollit cillum magna id occaecat esse non enim ipsum. Nostrud aliquip veniam anim fugiat tempor fugiat sint sit magna nulla. Nisi eu adipisicing pariatur occaecat. Voluptate irure sint nulla occaecat do quis id dolore qui. Anim mollit duis voluptate deserunt do incididunt incididunt. Est ea id velit duis consequat.

Nostrud laboris exercitation aliqua voluptate commodo fugiat sunt. Pariatur veniam incididunt nisi eu est nulla cillum qui pariatur labore exercitation. Esse qui excepteur nulla adipisicing consequat ipsum aliquip ut laborum voluptate officia sunt. Laboris ad culpa tempor consequat. Veniam ut qui ex voluptate fugiat magna nostrud amet Lorem dolor.

Deserunt eu mollit cupidatat incididunt minim non. Ad mollit cillum amet eiusmod anim ut. Ex sint mollit culpa esse labore reprehenderit. Qui minim cupidatat culpa laboris anim et sint.

Ea tempor nulla sit deserunt. Officia laborum excepteur velit commodo qui do sunt reprehenderit. Ex consectetur qui commodo anim cillum est fugiat. Nisi exercitation id consectetur ex eiusmod.</span>
            {/* <span className='post-content'>{post?.content}</span> */}
          </div>
        </div>
      </div>
    </PostCardStyles>
  );
}

const propsAreEqual = (prevProps: PostCardProps , nextProps: PostCardProps): boolean => (
  prevProps.className === nextProps.className &&
  prevProps.content === nextProps.content &&
  prevProps.created_datetime === nextProps.created_datetime &&
  prevProps.id === nextProps.id &&
  prevProps.title === nextProps.title &&
  prevProps.username === nextProps.username
);

export const PostCardComponent = React.memo(PostCardComponentNoMemo, propsAreEqual);
