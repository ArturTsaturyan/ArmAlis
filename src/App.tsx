import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { user } from './redux/user/loginSlice';
import { AppDispatch } from './redux/store';
import AuthContainer from './components/container/AuthContainer';
import './components/language/i18n';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const usId = window.localStorage.getItem('id');

  useEffect(() => {
    if (!usId) {
      dispatch(user());
    }
  }, []);

  return (
    <>
      <AuthContainer />
    </>
  );
}

export default App;
