import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  IconButton,
  Pagination,
  PaginationItem,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Dropdown from '../Dropdown';
import Input from '../Input';
import { filterData } from '../../utils/helpers';
import { UseAppContext } from '../../context/Context';
import { useStyles } from './styles';

const DataTable = ({ columns, children }) => {
  const classes = useStyles();
  const {
    state: { data, page, rowsPerPage, total },
    dispatch,
  } = UseAppContext();
  const [query, setQuery] = React.useState('');
  const [filtered, setFiltered] = useState([]);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    setFiltered(filterData(data, query));
  }, [query, data]);

  const rows = query ? filtered : data;

  const handleChangePage = (event, newPage) => {
    dispatch({
      type: 'CHANGE_PAGE',
      payload: newPage,
    });
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch({
      type: 'CHANGE_ROWS_PER_PAGE',
      payload: +event.target.value,
    });
  };

  return (
    <>
      <TableContainer className={classes.container}>
        <div className={classes.header}>
          <div className={classes.dropdown}>
            <Dropdown
              value={rowsPerPage}
              handleChange={handleChangeRowsPerPage}
              items={[
                { label: '5', value: 5 },
                { label: '10', value: 10 },
                { label: '20', value: 20 },
                { label: '50', value: 50 },
              ]}
            />
            <Typography>Entries</Typography>
          </div>
          <div className={classes.divider} />
          <IconButton size='medium' onClick={() => setShowSearchInput(true)}>
            <SearchOutlinedIcon />
          </IconButton>
          {showSearchInput && (
            <Input
              variant='outlined'
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              size='small'
              placeholder='search'
            />
          )}

          {children}
        </div>
        <Table
          className={classes.table}
          stickyHeader
          aria-label='sticky table'
          size='small'
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: '#c0e3e5',
                    fontWeight: 'bold',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.id} hover role='checkbox' tabIndex={-1}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div className={classes.pagination}>
          <Pagination
            count={total / rowsPerPage}
            onChange={handleChangePage}
            page={page}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </div>
      </TableContainer>
    </>
  );
};

export default DataTable;
