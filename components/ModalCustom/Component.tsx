import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import { ModalCustomProps } from '.';
import { ModalCustomStyles } from './Styles';

const ModalCustomComponentNoMemo: React.FC<ModalCustomProps> = (props) => {
  const {
    className,
    component,
    onClickClose = () => { },
  } = props;
  const modalCustomClassName = useMemo(() => `post-creator ${className}`, []);

  return (
    //@ts-ignore
    <ModalCustomStyles className={modalCustomClassName}>
      <motion.div
        className="background-modal"
        onClick={onClickClose}
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .2 }}
      />
      <motion.div
        className='content'
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .2 }}
      >
        {component}
      </motion.div>
    </ModalCustomStyles>
  );
}

const propsAreEqual = (prevProps: ModalCustomProps, nextProps: ModalCustomProps): boolean => (
  prevProps.className === nextProps.className
);

export const ModalCustomComponent = React.memo(ModalCustomComponentNoMemo, propsAreEqual);
