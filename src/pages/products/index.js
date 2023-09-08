import React, { useEffect } from 'react';
import DataTable from '../../components/dataTable';
import ProductService from '../../services/product';
import { FormControl } from '@mui/material';
import { useStyles } from './styles';
import { UseAppContext } from '../../context/Context';
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';

const columns = [
  { id: 'title', label: 'Title' },
  { id: 'description', label: 'Description' },
  { id: 'price', label: 'Price' },
  { id: 'discountPercentage', label: 'DiscountPercentage' },
  { id: 'rating', label: 'Rating' },
  { id: 'stock', label: 'Stock' },
  { id: 'brand', label: 'Brand' },
  { id: 'category', label: 'Category' },
];

const Products = () => {
  const classes = useStyles();
  const {
    state: { page, rowsPerPage },
    dispatch,
  } = UseAppContext();

  const [title, setTilte] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [category, setCategory] = React.useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ProductService.getAll(
          rowsPerPage,
          (page - 1) * rowsPerPage
        );
        dispatch({
          type: 'FETCH_PRODUCTS',
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [rowsPerPage, page, dispatch]);

  // const filterProducts = async (key, value) => {
  //   if (value) {
  //     const res = await ProductService.filter(key, value);
  //     dispatch({
  //       type: 'FETCH_PRODUCTS',
  //       payload: res.data,
  //     });
  //   } else {
  //     fetchData();
  //   }
  // };

  const renderChildren = () => {
    return (
      <>
        <div className={classes.divider} />
        <Input
          variant='outlined'
          onChange={(e) => setTilte(e.target.value)}
          value={title}
          size='small'
          placeholder='title'
        />
        <Input
          variant='outlined'
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          size='small'
          placeholder='brand'
        />

        <FormControl sx={{ m: 1, width: 150, mt: 3 }}>
          <Dropdown
            value={category}
            handleChange={(e) => setCategory(e.target.value)}
            items={[
              { label: 'Category', value: '' },
              { label: 'All', value: 'all' },
              { label: 'Laptops', value: ';aptops' },
            ]}
          />
        </FormControl>
      </>
    );
  };

  return <DataTable columns={columns}>{renderChildren()}</DataTable>;
};

export default Products;
