// import './App.css';
import Users from './pages/users';
import Products from './pages/products';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { CssBaseline, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from './components/Navbar';
import BreadCrumb from './components/BreadCrumb';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: '20px',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
          <Toolbar />
          <BreadCrumb />
          <Routes>
            <Route path='users' element={<Users />} />
            <Route path='products' element={<Products />} />
            <Route path='*' element={<Navigate to='/users' replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
