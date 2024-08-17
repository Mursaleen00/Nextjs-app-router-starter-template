// React & next Imports
import React from 'react';
import Image from 'next/image';

// Assets
import editIcon from '@/../public/assets/icons/edit-icon.svg';

// Components
import Button from '../buttons/button';
interface PCardProp {
  title?: string;
  img: string;
  label?: string;
  isIcon?: boolean;
  onClick?: () => void;
  isUpload?: boolean;
}

const PrismCard = ({
  onClick,
  title,
  img,
  label,
  isIcon,
  isUpload,
}: PCardProp) => {
  return (
    <div className='flex flex-col rounded-lg w-full'>
      {label && <label className='font-medium text-sm'>{label}</label>}
      <div className='relative w-full overflow-hidden'>
        <Image
          src={img}
          alt='thumbnail'
          height={244}
          width={456}
          className='rounded-xl w-full'
        />

        {isIcon && (
          <div className='absolute right-3 flex items-center justify-center rounded-full cursor-pointer top-3 min-size-8 bg-white border'>
            <Image
              src={editIcon}
              alt='edit'
              height={24}
              width={24}
              className='rounded-xl'
              onClick={onClick}
            />
          </div>
        )}

        {isUpload && (
          <div className='absolute rounded-xl h-full flex items-center flex-col gap-y-2 text-white justify-center w-full cursor-pointer top-0 bg-[#00000066]'>
            <h1 className='font-medium'>Image</h1>
            <p className='text-xs'> Min 400x400px, PNG or JPEG</p>
            <Button text='Change Image' />
          </div>
        )}
      </div>

      <p className='w-fit text-3xl text-[#25292A] font-medium'>{title}</p>
    </div>
  );
};

export default PrismCard;
