import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dialog } from '@mui/material';
import { ButtonComp } from '../Button/Button';
import { Input } from '../Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { ReactComponent as CloseIcon } from '../../images/closeIcon.svg';
import './SignUp.css';
import { registerUser } from '../../redux/user/loginSlice';
import { AppDispatch } from '../../redux/store';
import { useTranslation } from 'react-i18next';

type SignUpProps = {
  open: any;
  handleClose: any;
};

export const SignUp: React.FC<SignUpProps> = ({ open, handleClose }) => {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();
  const RegisterSchema = yup.object().shape({
    name: yup.string().required(t('signUp_dialog_label_error')),
    lastname: yup.string().required(t('signUp_dialog_label1_error')),
    phone: yup.number().required(t('signUp_dialog_label2_error')),
    email: yup.string().email().required(t('signUp_dialog_label3_error')),
    country: yup.string().required(t('signUp_dialog_label4_error')),
    password: yup.string().required(t('signUp_dialog_label5_error')),
    password_confirmation: yup
      .string()
      .required(t('signUp_dialog_label6_error1'))
      .oneOf([yup.ref('password')], t('signUp_dialog_label6_error2')),
  });
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = (values: any) => {
    dispatch(registerUser(values));
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} id="dialog2">
        <div className="dialog_head">
          <p className="dialog_title">{t('signUp_dialog_title')}</p>
          <div className="dialog_close" onClick={handleClose}>
            <CloseIcon />
            {/* <Image src="/closeIcon.png" width={36} height={36}/> */}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="dialog_filds">
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
                <div className="dialog_content">
                  <p className="dialog_label">{t('signUp_dialog_label')}</p>
                  <Input type="text" name={name} onChange={onChange} onBlur={onBlur} />
                  <p className="error">{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="lastname"
              control={control}
              render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
                <div className="dialog_content">
                  <p className="dialog_label">{t('signUp_dialog_label1')}</p>
                  <Input type="text" name={name} onChange={onChange} onBlur={onBlur} />
                  <p className="error">{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
                <div className="dialog_content">
                  <p className="dialog_label">{t('signUp_dialog_label2')}</p>
                  <Input type="text" name={name} onChange={onChange} onBlur={onBlur} />
                  <p className="error">{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
                <div className="dialog_content">
                  <p className="dialog_label">{t('signUp_dialog_label3')}</p>
                  <Input type="text" name={name} onChange={onChange} onBlur={onBlur} />
                  <p className="error">{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="country"
              control={control}
              render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
                <div className="dialog_content">
                  <p className="dialog_label">{t('signUp_dialog_label4')}</p>
                  <Input type="text" name={name} onChange={onChange} onBlur={onBlur} />
                  <p className="error">{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
                <div className="dialog_content">
                  <p className="dialog_label">{t('signUp_dialog_label5')}</p>
                  <Input type="text" showPass name={name} onChange={onChange} onBlur={onBlur} />
                  <p className="error">{error?.message}</p>
                </div>
              )}
            />
            <Controller
              name="password_confirmation"
              control={control}
              render={({ field: { onChange, onBlur, name }, fieldState: { error } }) => (
                <div className="dialog_content">
                  <p className="dialog_label">{t('signUp_dialog_label6')}</p>
                  <Input type="text" showPass name={name} onChange={onChange} onBlur={onBlur} />
                  <p className="error">{error?.message}</p>
                </div>
              )}
            />
          </div>

          <div className="dialog_content_btn">
            <div className="btn">
              <ButtonComp title={t('signUp_dialog_content_btn')} big />
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
};
