import React, { useMemo } from 'react';
import { ModalCustomProps } from '.';
import { ModalCustomStyles } from './Styles';
import { useRouter } from 'next/dist/client/router';

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
      <div className="background-modal" onClick={onClickClose} />
      <div className='content'>
        {component}
      </div>
    </ModalCustomStyles>
  );
}

const propsAreEqual = (prevProps: ModalCustomProps, nextProps: ModalCustomProps): boolean => (
  prevProps.className === nextProps.className
);

export const ModalCustomComponent = React.memo(ModalCustomComponentNoMemo, propsAreEqual);
