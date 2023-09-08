import React, { useEffect } from 'react';
import DataTable from '../../components/dataTable';
import UserService from '../../services/user';
import { FormControl } from '@mui/material';
import { useStyles } from './styles';
import { UseAppContext } from '../../context/Context';
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';

const columns = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'maidenName', label: 'Maiden Name' },
  { id: 'age', label: 'Age' },
  { id: 'gender', label: 'Gender' },
  { id: 'email', label: 'Email' },
  { id: 'username', label: 'UserName' },
  { id: 'bloodGroup', label: 'BloodGroup' },
  { id: 'eyeColor', label: 'EyeColor' },
  { id: 'birthDate', label: 'BirthDate' },
];

const Users = () => {
  const classes = useStyles();
  const {
    state: { page, rowsPerPage },
    dispatch,
  } = UseAppContext();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('');
  const [gender, setGender] = React.useState('');

  const fetchData = async () => {
    try {
      const res = await UserService.getAll(
        rowsPerPage,
        (page - 1) * rowsPerPage
      );
      dispatch({
        type: 'FETCH_USERS',
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [rowsPerPage, page]);

  const filterUsers = async (key, value) => {
    if (value) {
      const res = await UserService.filter(key, value);
      dispatch({
        type: 'FETCH_USERS',
        payload: res.data,
      });
    } else {
      fetchData();
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setName('');
    setEmail('');
    setBirthDate('');
    filterUsers('gender', e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setGender('');
    setEmail('');
    setBirthDate('');
    filterUsers('firstName', e.target.value);
  };

  const handleBDateChange = (e) => {
    setBirthDate(e.target.value);
    setGender('');
    setName('');
    setEmail('');
    filterUsers('birthDate', e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setGender('');
    setName('');
    setBirthDate('');
    filterUsers('email', e.target.value);
  };

  const renderChildren = () => {
    return (
      <>
        <div className={classes.divider} />
        <Input
          variant='outlined'
          onChange={handleNameChange}
          value={name}
          size='small'
          placeholder='name'
        />
        <Input
          variant='outlined'
          onChange={handleEmailChange}
          value={email}
          size='small'
          placeholder='email'
        />
        <Input
          variant='outlined'
          onChange={handleBDateChange}
          value={birthDate}
          size='small'
          placeholder='birth date'
        />

        <FormControl sx={{ m: 1, width: 150, mt: 3 }}>
          <Dropdown
            value={gender}
            handleChange={handleGenderChange}
            items={[
              { label: 'Gender', value: '' },
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
          />
        </FormControl>
      </>
    );
  };

  return <DataTable columns={columns}>{renderChildren()}</DataTable>;
};

export default Users;
