import React from 'react';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import './ChangePassword.css';
import { useTranslation } from 'react-i18next';
import ChangeUserInfo from '../../../http/changeUserInfo/changeUserInfo';
// import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ReactComponent as Showpass } from '../../../images/ShowPass.svg';
import { ReactComponent as UnShowpass } from '../../../images/unShowpass.svg';

type FormData = {
  current_password: string;
  new_password: string;
  new_confirm_password: string;
};

export const ChangePassword = () => {
  const [show, setShow] = React.useState(false);
  const [showConfirme, setShowConfirme] = React.useState(false);

  const { t } = useTranslation();

  const ChangeInfoSchema = yup.object().shape({
    current_password: yup.string().required(`${t('changeInfo_password_error_text')}`),
    new_password: yup.string().required(`${t('changeInfo_password_error_text1')}`),
    new_confirm_password: yup
      .string()
      .required(`${t('changeInfo_password_error_text2')}`)
      .oneOf([yup.ref('new_password')], `${t('changeInfo_password_error_text3')}`),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(ChangeInfoSchema),
  });

  const ChangePassword5 = async (data: any) => {
    try {
      await ChangeUserInfo.changePassoword(data);
      toast.success(`${t('changeInfo_password_true')}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error: any) {
      toast.error(`${t('changeInfo_password_false')}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const onSubmit = handleSubmit((data: FormData) => {
    ChangePassword5(data);
    reset();
  });
  return (
    <div className="changeInfo_form changeInfo_form_">
      <form onSubmit={onSubmit}>
        <div className="inputs">
          <div className="input_block fullwidht">
            <input
              {...register('current_password')}
              placeholder={`${t('changeInfo_password_text')}`}
              className="form_input"
            />
            <p className="input_error">{errors.current_password?.message}</p>
          </div>
          <div className="new_passowords">
            <div className="inputBlocks">
              <div className="input_block">
                <input
                  {...register('new_password')}
                  placeholder={`${t('changeInfo_password_text1')}`}
                  className="form_input"
                  type={!show ? 'password' : 'text'}
                />
                <span className="current_password_icon" onClick={() => setShow(!show)}>
                  {show ? <Showpass /> : <UnShowpass />}
                </span>
              </div>
              <p className="input_error">{errors.new_password?.message}</p>
            </div>
            <div className="inputBlocks">
              <div className="input_block">
                <input
                  {...register('new_confirm_password')}
                  placeholder={`${t('changeInfo_password_text2')}`}
                  className="form_input"
                  type={!showConfirme ? 'password' : 'text'}
                />
                <span
                  className="current_password_icon"
                  onClick={() => setShowConfirme(!showConfirme)}
                >
                  {showConfirme ? <Showpass /> : <UnShowpass />}
                </span>
              </div>
              <p className="input_error">{errors.new_confirm_password?.message}</p>
            </div>
          </div>
        </div>
        <Button id="btn_edit_password_confirm" variant="contained" type="submit">
          {`${t('changeInfo_password_text3')}`}
        </Button>
      </form>
    </div>
  );
};
