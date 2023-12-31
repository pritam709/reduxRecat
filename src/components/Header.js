import { useDispatch } from 'react-redux';
import classes from './Header.module.css';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { authActions } from '../store/index';
const Header = () => {
 const dispatch= useDispatch();
  
 const isLogin= useSelector(state=>state.isAuthenticated);
 const logOutHandler=()=>{
      dispatch(authActions.logout())
 }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLogin && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
