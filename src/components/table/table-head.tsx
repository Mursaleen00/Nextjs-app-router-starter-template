// Interface
import { ITableHead } from '@/types/Interfaces/table';

// React
import React from 'react';

/**
 *
 * @param IProps
 * @example
 *  <TableHeader tableHeader={['Doctor Name', 'Location','Experience','Education','Status','Action']} />
 */
const TableHeader = ({ tableHeader }: ITableHead) => {
  const lastindex = tableHeader && tableHeader.length - 1;

  return (
    <thead className='bg-[#F9FAFB] w-full border-t border-divider border-b'>
      <tr className='h-[46px] w-full'>
        {tableHeader &&
          tableHeader.map((item: string, index: number) => {
            return (
              <th
                key={index}
                className={`px-3  text-text-secondary text-sm font-medium w-max h-[90%] ${index == lastindex ? 'text-end' : 'text-start'}`}
              >
                {item}
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

export default TableHeader;
// w-[40%]
