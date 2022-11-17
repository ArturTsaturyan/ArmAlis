import React from 'react';
import { Dialog } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { ButtonComp } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { ReactComponent as CloseIcon } from '../../../images/closeIcon.svg';
import { ReactComponent as ArrowBack } from '../../../images/arrowBack.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Forgotpass.css';
import { useTranslation } from 'react-i18next';

type ForgotPassProps = {
  open: any;
  handleClose: any;
};

export const ForgotPass: React.FC<ForgotPassProps> = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const ForgotPassSchema = yup.object().shape({
    Email: yup
      .string()
      .email()
      .required(`${t('dialog_emaile_error')}`),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(ForgotPassSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} id="dialog3">
        <div className="dialog_head_forgot">
          <div className="dialog_back" onClick={handleClose}>
            {/* <Image src="/arrowBack.svg" width={22} height={22}/> */}
            <ArrowBack />
            <p className="dialog_back_title">{t('dialog_head_back_title')}</p>
          </div>
          <div className="dialog_close" onClick={handleClose}>
            <CloseIcon />
            {/* <Image src="/closeIcon.png" width={36} height={36}/> */}
          </div>
        </div>
        <div className="dialog_head_subTitle_block">
          <p className="dialog_head_subTitle">{t('dialog_head_subTitle')}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="Email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className="dialog_content">
                <p className="dialog_label">{t('dialog_label')}</p>
                <Input type="text" {...field} />
                <p className="error">
                  {error?.message == 'Email must be a valid email'
                    ? t('dialog_emaile_error_text')
                    : error?.message}
                </p>
              </div>
            )}
          />

          <div className="dialog_content_btn">
            <div className="btn">
              <ButtonComp title={t('dialog_content_btn_text')} style={{ padding: '12px 32px' }} />
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
};
