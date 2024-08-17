// Utils
import { cn } from '@/lib/utils';

// React
import React from 'react';

export interface IInput {
  label?: string;
  name?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  checked?: boolean;
}

const Radio = ({
  className,
  label,
  name,
  onChange,
  placeholder,
  value,
  checked,
}: IInput) => {
  return (
    <label
      htmlFor={value}
      className='space-y-1 flex items-center gap-x-2 cursor-pointer'
    >
      <input
        type={'radio'}
        id={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={cn(
          'size-4 cursor-pointer',
          'outline-none ring-0',
          'shadow-box-shadow',
          'px-3 py-2',
          className,
          'accent-primary',
        )}
        checked={checked}
      />
      <p
        className='text-text-primary text-sm font-medium'
        id={value}
      >
        {label}
      </p>
    </label>
  );
};

export default Radio;
