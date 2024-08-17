'use client';

// Interface
import { TableFootI } from '@/types/Interfaces/table';

// React
import React, { useEffect, useState } from 'react';

// Icons
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const TableFoot = ({
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  rowsOption,
  total,
}: TableFootI) => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    setCurrentPage && setCurrentPage(1);
  }, [rowsPerPage]);

  const closeDropdown = (e: MouseEvent) => {
    let target = e.target as HTMLElement;
    while (target) {
      if (
        target.id === 'dropdownCardsButton' ||
        target.classList.contains('bypass')
      ) {
        return;
      }
      // @ts-expect-error/not necessary
      target = target.parentElement;
    }
    setDropdown(false);
  };

  function getPageSequence(
    totalItems: number,
    currentPage: number,
    rowsPerPage: number,
  ) {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min((currentPage - 1) * rowsPerPage, totalItems);

    let endIndex2 = endIndex + rowsPerPage;
    if (endIndex2 > (total ?? 100)) {
      endIndex2 = total ?? 100;
    }

    return [startIndex + 1, endIndex2];
  }

  useEffect(() => {
    document.body.addEventListener('click', closeDropdown);
    return () => {
      document.body.removeEventListener('click', closeDropdown);
    };
  });

  const disableSate = () => {
    if (
      getPageSequence(total || 100, currentPage || 0, rowsPerPage || 5)[1] ===
      total
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className='h-[60px] text-[14px] w-full flex items-center justify-end px-1 md:px-6 gap-1 md:gap-6'>
      <div className='flex items-center gap-1 md:gap-3'>
        <p className='text-text-primary text-xs font-medium sm:text-sm'>
          Rows per page:
        </p>
        <div className='relative'>
          <button
            id='dropdownCardsButton'
            className='flex items-center justify-center focus:ring-1 focus:outline-none focus:ring-gray-300 px-3 rounded-sm text-text-primary text-xs font-medium sm:text-sm'
            onClick={handleClick}
          >
            {rowsPerPage}
            <svg
              className='w-2.5 h-2.5 ms-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>
          {dropdown && (
            <ul className='absolute bottom-[30px] flex flex-col w-full z-10 bg-white rounded-lg shadow-md'>
              {rowsOption &&
                rowsOption.map((each, index) => (
                  <button
                    className={`${each === rowsPerPage ? 'bg-gray-100' : 'bg-white'} w-full flex items-center justify-center px-4 py-1 cursor-pointer hover:bg-gray-100 ${index === 0 ? '' : 'border-t border-gray-200'} bypass text-left`}
                    key={each}
                    onClick={() => {
                      if (setRowsPerPage) {
                        setRowsPerPage(each);
                      }
                      setDropdown(false);
                    }}
                  >
                    <p>{each}</p>
                  </button>
                ))}
            </ul>
          )}
        </div>
      </div>
      <p className='text-text-primary text-xs font-medium sm:text-sm'>
        {total === 0
          ? 0
          : getPageSequence(
              total || 100,
              currentPage || 0,
              rowsPerPage || 5,
            )[0]}
        -{getPageSequence(total || 100, currentPage || 0, rowsPerPage || 5)[1]}{' '}
        of {total}
      </p>
      <div className='flex gap-x-2'>
        <button
          onClick={() => {
            if (setCurrentPage) setCurrentPage(prev => prev - 1);
          }}
          disabled={currentPage === 1}
        >
          <BiChevronLeft
            className={`${currentPage === 1 ? 'text-gray-300' : 'text-text-primary'} cursor-pointer text-xl font-medium sm:text-2xl`}
          />
        </button>
        <button
          disabled={disableSate()}
          onClick={() => {
            if (setCurrentPage) setCurrentPage(prev => prev + 1);
          }}
        >
          <BiChevronRight
            className={`${disableSate() ? 'text-gray-300' : 'text-text-primary'} cursor-pointer text-xl font-medium sm:text-2xl`}
          />
        </button>
      </div>
    </div>
  );
};

export default TableFoot;
