import { FormikHandlers } from 'formik';
import { ReactNode } from 'react';

export interface ITable {
  children?: React.ReactNode;
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit?: FormikHandlers['handleSubmit'];
  rowsPerPage?: number;
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  rowsOption?: number[];
  total?: number;
  tabs?: string[];
  currentTab?: number;
  setTab?: React.Dispatch<React.SetStateAction<number>>;
  isFooter?: boolean;
}

export interface ITableBody {
  name?: string;
  email?: string;
  profileImage?: string;
  age?: number;
  gender?: string;
  zipCode?: number;
  subscription?: string;
  action?: ReactNode;
  redFlag?: string;
  injury?: string;
  title?: string;
  isUser?: boolean;
}

export interface ITableHead {
  tableHeader?: string[];
}

export interface TableFootI {
  rowsPerPage?: number;
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  rowsOption?: number[];
  total?: number;
}
