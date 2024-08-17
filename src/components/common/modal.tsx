import React from 'react';

// Components
import CardFrame from '../cards/card-frame';
import Button from '../buttons/button';

interface ModalProps {
  children?: React.ReactNode;
  title: string;
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
  btnText?: string;
  isBtnRed?: boolean;
  onClick?: () => void;
}

const Modal = ({
  title,
  btnText,
  children,
  isBtnRed,
  className,
  isOpen,
  onClose,
  onClick,
}: ModalProps) => {
  return (
    <div
      className={`${isOpen ? 'absolute' : 'hidden'} top-0 left-0 z-[1000] h-screen w-full bg-lightBlack flex items-center justify-center px-6`}
    >
      <CardFrame
        className={`px-6 py-4 flex flex-col gap-y-6 !rounded-lg w-full min-w-[300px] sm:min-w-[400px] max-w-[400px] ${className}`}
      >
        <p className='text-text-primary font-medium text-lg'>{title}</p>

        {children && children}

        <div className='flex items-center w-full justify-between'>
          <Button
            text={'Cancel'}
            isOutline
            onClick={onClose}
          />
          <Button
            text={btnText || ''}
            className={`min-w-[85px] ${isBtnRed ? '!bg-red' : 'bg-primary'}`}
            onClick={onClick}
          />
        </div>
      </CardFrame>
    </div>
  );
};

export default Modal;
