import styled from '@emotion/styled';

import { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalWrapperProps {
  children: ReactNode;
}

export interface ModalWrapperRef {
  open: () => void;
  close: () => void;
}

const ModalWrapper = forwardRef<ModalWrapperRef, ModalWrapperProps>(function Modal({ children }, ref) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
    close() {
      dialog.current?.close();
    },
  }));
  const modalElement = document.getElementById('root');

  if (!modalElement) {
    return null;
  }

  return createPortal(<S.ModalWrapper ref={dialog}>{children}</S.ModalWrapper>, modalElement);
});

export default ModalWrapper;

const S = {
  ModalWrapper: styled.dialog`
    ::backdrop {
      background-color: 'rgba(0, 0, 0, 0.50)';
    }

    border: none;
    border-radius: 20px;
    padding: 0rem;
  `,
};
