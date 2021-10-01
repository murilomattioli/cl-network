import React, { useCallback, useMemo, useState } from 'react';
import { CREATE_POST_CONTENT_PLACEHOLDER, CREATE_POST_TITLE_PLACEHOLDER, PostManagerProps, PostPostObject, PostProperties } from '.';
import { Button, Input, TextArea } from '..';
import userHooks from '../../hooks/userHooks';
import { PostManagerStyles } from './Styles';

const PostManagerComponentNoMemo: React.FC<PostManagerProps> = (props) => {
  const {
    className,
  } = props;
  const [postTitle, setPostTitle] = useState<string>();
  const [postContent, setPostContent] = useState<string>();
  const [getUser] = userHooks.useGetUser();
  const PostManagerClassName = useMemo(() => `post-creator ${className}`, []);
  
  const postPostObject = useMemo((): Partial<PostPostObject> => ({
    content: postContent,
    title: postTitle,
    username: getUser()?.username
  }), [postContent, postTitle, getUser]);

  const validateRequiredStrings: (strings: Array<string | null | undefined>) => boolean = useCallback((strings) => {
    for (const string of strings) {
      const isValidString = (typeof string === 'string') && (string !== undefined) && (string !== null) && (string?.trimEnd()?.length > 0);
      if (!isValidString) {
        return false;
      }
    }

    return true;
  }, [])

  const canSavePost: (post: Partial<PostPostObject>) => boolean = useCallback(({ content, title, username }) => (
    validateRequiredStrings([content, title, username])
  ), [validateRequiredStrings]);

  const handleClickSavePost = useCallback(() => {
    const canSave = canSavePost(postPostObject);

    if (canSave) {
      //Save post
      console.log('postObject>', postPostObject);
    } else {
      console.error('Invalid post object.')
    }
  }, [postPostObject]);

  return (
    //@ts-ignore
    <PostManagerStyles {...props} className={PostManagerClassName}>
      <div className='post-creator-content'>
        <div className='title-wrapper'>
          <span className='title'>{'What’s on your mind?'}</span>
        </div>
        <div className='post-creator-fields'>
          <div className='field --field-title'>
            <div className='field-label-wrapper'>
              <span className='field-label'>{'Title'}</span>
            </div>
            <div className='field-input-wrapper'>
              <Input
                autoFocus
                value={postTitle}
                onChangeValue={setPostTitle}
                placeholder={CREATE_POST_TITLE_PLACEHOLDER}
              />
            </div>
          </div>
          <div className='field --field-content'>
            <div className='field-label-wrapper'>
              <span className='field-label'>{'Content'}</span>
            </div>
            <div className='field-input-wrapper'>
              <TextArea
                value={postContent}
                onChangeValue={setPostContent}
                placeholder={CREATE_POST_CONTENT_PLACEHOLDER}
              />
            </div>
          </div>
          <div className='submit-wrapper'>
            <Button text='CREATE' onClick={handleClickSavePost} />
          </div>
        </div>
      </div>
    </PostManagerStyles>
  );
}

const propsAreEqual = (prevProps: PostManagerProps , nextProps: PostManagerProps): boolean => (
  prevProps.className === nextProps.className
);

export const PostManagerComponent = React.memo(PostManagerComponentNoMemo, propsAreEqual);
