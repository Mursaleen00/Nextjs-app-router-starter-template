'use client';

// Interface
import { ITableBody } from '@/types/Interfaces/table';

// React
import { Fragment } from 'react';

// Components
import Avatar from '../common/avatar';

/**
 *
 * @param IDetailsTableBody
 * @example
 * <TableBody
 *   statusStyle={[
 *     {
 *       text: 'Open',
 *       bg: '#FEE4E2',
 *       textColor: '#F14D4D',
 *     },
 *     {
 *       bg: '#F0F7FF',
 *       textColor: '#5293F4',
 *       text: 'Closed',
 *     },
 *    ]}
 *    {...item}
 *    onActionClick={() => {}}
 * />
 */
const TableBody = ({
  action,
  age,
  email,
  gender,
  name,
  profileImage,
  subscription,
  zipCode,
  redFlag,
  injury,
  title,
  isUser,
}: ITableBody) => {
  const tableData = [
    title,
    injury,
    redFlag,
    age,
    gender,
    zipCode,
    subscription,
  ];

  return (
    <tbody>
      <tr
        className={`h-[60px] border-b  text-[13px] font-medium text-[#51595A] hover:bg-[#f7f7f7] relative`}
      >
        {isUser && (
          <td className='px-3'>
            <Avatar
              image={profileImage || ''}
              name={name || ''}
              size={40}
              email={email}
            />
          </td>
        )}

        {tableData.map((each, index) => (
          <Fragment key={index}>
            {each && <td className='px-3'>{each}</td>}
          </Fragment>
        ))}

        <td className='px-3 grid mt-1.5 justify-end'>{action}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
