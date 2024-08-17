'use client';

// React
import React, { FC } from 'react';

export interface ISearchInput {
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<ISearchInput> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='py-4 px-8 max-w-[480px]'>
      <label
        htmlFor='table-search'
        className='sr-only'
      >
        Search
      </label>
      <div className='relative mt-1 border-2 flex rounded-lg px-3'>
        <input
          type='text'
          id='table-search'
          className='bg-search-icon bg-left bg-origin-padding bg-no-repeat bg-transparent w-full text-base rounded-lg block pl-10 p-2.5  placeholder:text-[#828282] focus:outline-none'
          placeholder='Search '
          value={searchTerm}
          onChange={e => setSearchTerm && setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
