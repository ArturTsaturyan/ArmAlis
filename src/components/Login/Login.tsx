import { Dialog } from '@mui/material';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.min.css';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../../redux/user/loginSlice';
import { AppDispatch } from '../../redux/store';
import { ReactComponent as CloseIcon } from '../../images/closeIcon.svg';
import { Input } from '../Input/Input';
import { ButtonComp } from '../Button/Button';
import './Login.css';
import { useTranslation } from 'react-i18next';

type LoginProps = {
  open: any;
  handleClose: any;
  handleClickOpenForgot?: any;
};

export const Login: React.FC<LoginProps> = ({ open, handleClose, handleClickOpenForgot }) => {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();
  const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(`${t('login_dialog_emaile_error')}`),
    password: yup.string().required(`${t('login_dialog_password_error')}`),
    checked: yup.boolean(),
  });
  const { control, handleSubmit } = useForm({
    defaultValues: {
      checked: false,
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = (values: any) => {
    dispatch(authenticateUser(values));
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose} id="dialog1">
      <div className="dialog_head">
        <p className="dialog_title">{t('login_dialog_title')}</p>
        <div className="dialog_close" onClick={handleClose}>
          <CloseIcon />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
            <div className="dialog_content">
              <p className="dialog_label">{t('login_dialog_emaile')}</p>
              <Input type="text" name={name} onChange={onChange} onBlur={onBlur} />
              <p className="error">{error?.message}</p>
            </div>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
            <div className="dialog_content_pass">
              <p className="dialog_label">{t('login_dialog_password')}</p>
              <Input type="text" showPass name={name} onChange={onChange} onBlur={onBlur} />
              <p className="error">{error?.message}</p>
            </div>
          )}
        />
        {/* <Controller
            name="checked"
            control={control}
            render={({ field }) => (
              <div className="remember">
                <Checkbox {...field} />
                <p className="remember_label">Պահպանել</p>
              </div>
            )}
          /> */}

        <div className="dialog_content_btn">
          <div className="btn">
            <ButtonComp title={t('login_dialog_title')} big />
          </div>

          <div className="forget">
            <p className="forget_title" onClick={handleClickOpenForgot}>
              {t('login_dialog_forget_title')}
            </p>
          </div>
        </div>
      </form>
    </Dialog>
  );
};
