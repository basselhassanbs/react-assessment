import { Breadcrumbs, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  underline: {
    borderBottom: `solid 4px  ${theme.yellow}`,
  },
}));

const BreadCrumb = () => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link underline='hover' color='inherit'>
        Home
      </Link>
      <Link
        underline='none'
        style={{ color: '#322625' }}
        href={`${location.pathname === '/users' ? '/users' : '/products'}`}
      >
        {location.pathname === '/users' ? 'Users' : 'Products'}
        <div className={classes.underline} />
      </Link>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
