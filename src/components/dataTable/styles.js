import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  table: {
    '& .MuiTableCell-root': {
      border: `1px solid ${theme.grey}`,
    },
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  dropdown: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    borderLeft: `solid 3px ${theme.grey}`,
    height: '34px',
  },
}));
