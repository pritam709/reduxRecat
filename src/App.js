import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
 const isLogin= useSelector(state=>state.isAuthenticated)
  return (
    <><Header></Header>
    {!isLogin && <Auth></Auth>}
    {isLogin && <UserProfile></UserProfile>}
    <Counter /></>
  );
}

export default App;
