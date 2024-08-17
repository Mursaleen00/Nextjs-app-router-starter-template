'use client';

// Components
import Input from '../inputs/input';
import Button from '../buttons/button';
import CardFrame from './card-frame';

// React & next Imports
import React, { useState } from 'react';
import Image from 'next/image';

// Assets
import Dollar from '@/../public/assets/icons/dollar.svg';
import Pen from '@/../public/assets/icons/pen.svg';
import Close from '@/../public/assets/icons/close.svg';

// Formik Types
import { FormikFormProps, FormikHelpers } from 'formik';

interface CardFrameProps {
  name: string;
  price: number | null;
  id: number;
  setFieldValue: FormikHelpers<FormikFormProps>['setFieldError'];
}

const SubscriptionCard = ({
  name,
  price,
  id,
  setFieldValue,
}: CardFrameProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [priceValue, setPriceValue] = useState(price);

  const handleCancel = () => {
    setIsEdit(false);
    setFieldValue(`subscription[${id}].price`, (price || 0).toString());
  };

  const handleSubmit = () => {
    setIsEdit(false);
    setFieldValue(`subscription[${id}].price`, priceValue?.toString());
  };

  return (
    <CardFrame className='w-full border border-divider py-4 px-8 h-fit min-h-[180px] flex flex-col justify-around'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center gap-x-1'>
          <Image
            src={Dollar}
            alt=''
            width={60}
            height={50}
          />
          <p className='text-text-primary text-lg font-medium'>{name}</p>
        </div>

        {isEdit ? (
          <Image
            src={Close}
            alt=''
            width={24}
            height={24}
            onClick={handleCancel}
            className='cursor-pointer'
          />
        ) : (
          <Image
            src={Pen}
            alt=''
            width={24}
            height={24}
            onClick={() => setIsEdit(true)}
            className='cursor-pointer'
          />
        )}
      </div>

      {isEdit ? (
        <div className='space-y-3 w-full'>
          <Input
            label='Percentage'
            onChange={e => setPriceValue(+e.target.value)}
            value={priceValue || ''}
          />
          <div className='flex justify-end'>
            <Button
              text='Save Changes'
              onClick={handleSubmit}
            />
          </div>
        </div>
      ) : (
        <p className='font-medium text-sm text-text-primary'>{price} $</p>
      )}
    </CardFrame>
  );
};

export default SubscriptionCard;
