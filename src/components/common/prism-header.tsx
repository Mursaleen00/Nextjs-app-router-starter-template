// React
import React from 'react';
import Image from 'next/image';

// Assets
import prismBg from '@/../public/assets/images/prism-bg.png';
import editIcon from '@/../public/assets/icons/edit-icon.svg';

// Components
import Avatar from './avatar';

interface PrismHeaderProps {
  title: string;
  onclick?: () => void;
}

const PrismHeader = ({ title, onclick }: PrismHeaderProps) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center '>
        <Avatar
          image={prismBg.src}
          name={title}
          size={64}
          className='!text-text-primary !text-3xl !font-medium  '
          isSquare
        />
      </div>

      <div className='cursor-pointer  h-fit '>
        <Image
          src={editIcon}
          alt='edit'
          height={30}
          width={30}
          onClick={onclick}
        />
      </div>
    </div>
  );
};

export default PrismHeader;
