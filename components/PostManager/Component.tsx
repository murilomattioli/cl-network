import React, { useCallback, useMemo, useState } from 'react';
import { CREATE_POST_CONTENT_PLACEHOLDER, CREATE_POST_TITLE_PLACEHOLDER, PostManagerProps, NetworkPostProps } from '.';
import { Button, Input, TextArea } from '..';
import { BodyPostNetworkPost } from '../../actions/NetworkPosts/types';
import userHooks from '../../hooks/userHooks';
import networkPostsHooks from '../../hooks/networkPostsHooks';
import { PostManagerStyles } from './Styles';
import { AnimatePresence, motion } from 'framer-motion';

const PostManagerComponentNoMemo: React.FC<PostManagerProps> = (props) => {
  const {
    className,
    children,
    onSave = () => { },
    ...postProps
  } = props;
  const [postTitle, setPostTitle] = useState<string | undefined>(postProps?.title);
  const [postContent, setPostContent] = useState<string | undefined>(postProps?.content);
  const [getUser] = userHooks.useGetUser();
  const [saveNetworkPost] = networkPostsHooks.useSaveNetworkPost();
  const method = useMemo(() => (!!postProps?.id ? 'PATCH' : 'POST'), [postProps]);
  const PostManagerClassName = useMemo(() => `post-manager ${className}`, []);
  const submitText = useMemo(() => (method === 'PATCH' ? 'SAVE' : 'CREATE'), [method]);
  const title = useMemo(() => (method === 'PATCH' ? 'Edit' : 'What’s on your mind?'), [method]);

  const clearInputs = useCallback(() => {
    setPostTitle('');
    setPostContent('');
  }, [setPostTitle, setPostContent]);

  const buildBodyNetworkPost = useCallback((): BodyPostNetworkPost => ({
    content: `${postContent ? postContent : ''}`,
    title: `${postTitle ? postTitle : ''}`,
    username: `${getUser()?.username}`
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

  const canSaveNetworkPost: (post: Partial<BodyPostNetworkPost>) => boolean = useCallback(({ content, title, username }) => (
    validateRequiredStrings([content, title, username])
  ), [validateRequiredStrings]);

  const handleClickSavePost = useCallback(() => {
    const networkPostPostObject = buildBodyNetworkPost();
    const newNetworkPost = method === 'PATCH' ? { id: postProps?.id, ...networkPostPostObject } : networkPostPostObject;
    const canSave = canSaveNetworkPost(networkPostPostObject);

    if (canSave) {
      //Save post
      saveNetworkPost(newNetworkPost).then(clearInputs);
      onSave();
    } else {
      alert('Invalid post object.\nPlease, check input values and try again.');
    }
  }, [buildBodyNetworkPost, saveNetworkPost]);

  return (
    //@ts-ignore
    <PostManagerStyles {...props} className={PostManagerClassName}>
      <motion.div
        className='post-manager-content'
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .2 }}
      >
        <div className='title-wrapper'>
          <span className='title'>{title}</span>
        </div>
        <div className='post-manager-fields'>
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
            <Button text={submitText} onClick={handleClickSavePost} />
          </div>
        </div>
      </motion.div>
    </PostManagerStyles>
  );
}

const propsAreEqual = (prevProps: PostManagerProps, nextProps: PostManagerProps): boolean => (
  prevProps.className === nextProps.className
);

export const PostManagerComponent = React.memo(PostManagerComponentNoMemo, propsAreEqual);
