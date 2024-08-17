// Components
import SearchInput from '@/components/inputs/search-input';
import Tab from '../common/tab';
import TableFoot from './table-foot';
import CardFrame from '../cards/card-frame';

// Interface
import { ITable } from '@/types/Interfaces/table';

/**
 *
 * @param IProps
 * @example
 * <Table
 *   tabs={['Approved', 'Requested']}
 *   currentTab={tab}
 *   setTab={(value: number) => setTab(value)}
 *  >
 *   <TableHeader tableHeader={tableHeader} />
 * </Table>
 *
 */
const Table = ({
  tabs,
  currentTab,
  setTab,
  children,
  handleSubmit,
  searchTerm,
  setSearchTerm,
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  rowsOption,
  total,
  isFooter,
}: ITable) => {
  return (
    <CardFrame className='!p-0 overflow-hidden border border-divider'>
      <form
        onSubmit={handleSubmit}
        className='border-b border-divider'
      >
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </form>
      <div className='py-4'>
        {tabs && (
          <Tab
            step={currentTab || 0}
            tabs={tabs}
            setStep={setTab}
          />
        )}
        <div className='w-full overflow-x-scroll xl:overflow-x-hidden'>
          <table className='w-full min-w-[670px]'>{children}</table>
        </div>
      </div>

      {isFooter && (
        <TableFoot
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsOption={rowsOption}
          total={total}
        />
      )}
    </CardFrame>
  );
};

export default Table;
