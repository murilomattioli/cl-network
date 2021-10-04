import React, { useCallback, useMemo } from 'react';
import { ModalConfirmProps } from '.';
import { ModalConfirmStyles } from './Styles';
import { Button } from '..';
import { useRouter } from 'next/dist/client/router';
import { motion } from 'framer-motion';

const ModalConfirmComponentNoMemo: React.FC<ModalConfirmProps> = (props) => {
  const {
    title,
    className,
    onConfirm = () => { },
  } = props;
  const router = useRouter();
  const modalConfirmClassName = useMemo(() => `post-creator ${className}`, []);

  const handleOnCancel = useCallback(() => {
    router.back();
  }, [router]);

  const handleOnConfirm = useCallback(() => {
    new Promise((resolve) => {
      onConfirm();
      resolve(null);
    })
      .then(() => router.back());
  }, [onConfirm, router]);


  return (
    //@ts-ignore
    <ModalConfirmStyles className={modalConfirmClassName}>
      <motion.div
        className='content'
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .2 }}
      >
        <div className='title-wrapper'>
          <span className='title'>{title}</span>
        </div>
        <div className='buttons-wrapper'>
          <div className='button-wrapper'>
            <Button
              text='CANCEL'
              onClick={handleOnCancel}
              color='white'
            />
          </div>
          <div className='button-wrapper'>
            <Button
              text='OK'
              onClick={handleOnConfirm}
              color='white'
            />
          </div>
        </div>
      </motion.div>
    </ModalConfirmStyles>
  );
}

const propsAreEqual = (prevProps: ModalConfirmProps, nextProps: ModalConfirmProps): boolean => (
  prevProps.className === nextProps.className
);

export const ModalConfirmComponent = React.memo(ModalConfirmComponentNoMemo, propsAreEqual);
