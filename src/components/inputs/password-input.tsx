'use client';

// Utils
import { cn } from '@/lib/utils';

// React Imports
import { useState } from 'react';

// Icons
import { FiEye, FiEyeOff } from 'react-icons/fi';

export interface IInput {
  label?: string;
  name?: string;
  type?: HTMLInputElement['type'];
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
}

const PasswordInput = ({
  className,
  label,
  name,
  onChange,
  error,
  onBlur,
  placeholder,
  value,
  touched,
}: IInput) => {
  const [isVisible, setIsVisible] = useState(false);
  const isError = error && touched;

  return (
    <label
      htmlFor='input'
      className='space-y-1'
    >
      <p className='text-text-primary text-sm font-medium'>{label}</p>
      <div
        className={cn(
          'w-full h-11',
          'bg-white',
          'border border-divider',
          'rounded-lg shadow-box-shadow',
          'pr-3',
          'flex justify-between items-center',
          className,
          isError && '!border-red',
        )}
      >
        <input
          type={isVisible ? 'text' : 'password'}
          id='input'
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          className='w-full h-full px-3 py-2 outline-none ring-0 rounded-xl'
        />
        {isVisible ? (
          <FiEye
            color='#292D32'
            size={24}
            onClick={() => setIsVisible(!isVisible)}
            className='cursor-pointer'
          />
        ) : (
          <FiEyeOff
            color='#292D32'
            size={24}
            onClick={() => setIsVisible(!isVisible)}
            className='cursor-pointer'
          />
        )}
      </div>
      {isError && <p className='text-error text-red text-xs'>{error}</p>}
    </label>
  );
};

export default PasswordInput;
