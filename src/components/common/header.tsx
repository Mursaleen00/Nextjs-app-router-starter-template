// React
import React from 'react';

// Components
import BackButton from '../buttons/back-button';
import Button from '../buttons/button';

interface HeaderProps {
  title: string;
  isBackButton?: boolean;
  buttonText?: string;
  onclick?: () => void;
  redirectUrl?: string;
}

const Header = ({
  title,
  isBackButton,
  buttonText,
  onclick,
  redirectUrl,
}: HeaderProps) => {
  return (
    <div className='w-full'>
      {isBackButton && (
        <div className='py-3'>
          <BackButton />
        </div>
      )}
      <div className='flex justify-between items-center'>
        <p className='text-text-primary font-medium text-xl md:text-3xl'>
          {title}
        </p>
        {buttonText && (
          <div>
            <Button
              text={buttonText}
              onClick={onclick}
              redirectURL={redirectUrl}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
