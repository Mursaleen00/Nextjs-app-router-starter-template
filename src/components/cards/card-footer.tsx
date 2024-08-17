import React from 'react';

// Components
import Button from '../buttons/button';

interface ICardFooter {
  btnText?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
}

const CardFooter = ({ onCancel, onSubmit, btnText }: ICardFooter) => {
  return (
    <div className='space-y-3'>
      <div className='border-2 rounded-sm' />

      <div className=' flex justify-end gap-x-2 '>
        <Button
          text='Cancel'
          isOutline
          className='border-none'
          onClick={onCancel}
        />
        <Button
          text={btnText || 'Add'}
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default CardFooter;
