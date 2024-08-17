'use client';
import React from 'react';

interface Props {
  tabs: string[];
  step: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
}

const Tab: React.FC<Props> = ({ tabs, step, setStep }) => {
  const handleChange = (index: number) => {
    setStep && setStep(index);
  };

  return (
    <div className='flex gap-x-5 px-6'>
      {tabs.map((tab, index) => {
        return (
          <button
            type='button'
            key={index}
            className={`${
              step == index ? 'text-primary' : 'text-text-secondary'
            }  text-sm items-center font-medium flex flex-col gap-y-1 gap-x-3 cursor-pointer`}
            onClick={() => handleChange(index)}
          >
            {tab}
            {step == index && (
              <div className='w-full h-1 bg-primary rounded-t-md' />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
