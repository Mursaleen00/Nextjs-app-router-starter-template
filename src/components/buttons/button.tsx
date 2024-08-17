// Libs Imports
import { cn } from '@/lib/utils';

// React & next Imports
import Image from 'next/image';
import Link from 'next/link';

interface IButton {
  text: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  className?: string;
  isOutline?: boolean;
  redirectURL?: string;
  disabled?: boolean;
  icon?: string;
}

/**
 * Button component
 * @returns
 *
 * @example
 * <Button
 *    text="Title"
 *    onClick={() => {}}
 *    type="submit"
 *    isBlack={false}
 *    isIcon={false}
 *    disabled={false}
 *    redirectURL={'/'}
 *    className='bg-black'
 * />
 */
const Button = ({
  text,
  onClick,
  type,
  className,
  isOutline,
  redirectURL,
  disabled,
  icon,
}: IButton) => {
  return (
    <Link
      className='w-fit '
      href={redirectURL || ''}
    >
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={cn(
          `${isOutline ? 'border border-primary bg-transparent text-primary' : 'bg-primary text-white'}`,
          'font-medium text-sm',
          'w-fit h-11 ',
          'px-6 py-2',
          'rounded-lg',
          'flex items-center justify-center gap-x-3',
          className,
        )}
      >
        {icon && (
          <Image
            alt='plus'
            src={icon}
            width={16}
            height={20}
          />
        )}
        {text}
      </button>
    </Link>
  );
};

export default Button;
