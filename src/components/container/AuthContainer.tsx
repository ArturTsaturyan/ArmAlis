import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../../components/Footer/Footer';
import { ToastContainer, Bounce } from 'react-toastify';
import { getMe } from '../../redux/user/loginSlice';
import { AppDispatch } from '../../redux/store';
import Routs from './Routs';

function AuthContainer() {
  const dispatch: AppDispatch = useDispatch();
  const userData = useSelector((state: any) => state?.authentication?.success1);
  useEffect(() => {
    dispatch(getMe());
  }, []);

  return (
    <>
      <Routs />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        transition={Bounce}
      />
    </>
  );
}

export default AuthContainer;
