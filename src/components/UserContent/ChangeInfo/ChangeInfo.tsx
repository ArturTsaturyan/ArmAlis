import React, { useEffect, useMemo } from 'react';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ChangeInfo.css';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDefaultValueContractCreate } from '../../../hooks/useDefoultValue/useDefoultValue';
// import { getMe } from '../../../redux/user/loginSlice';
// import { AppDispatch } from '../../../redux/store';
import ChangeUserInfo from '../../../http/changeUserInfo/changeUserInfo';
import { toast } from 'react-toastify';

type FormData = {
  name: string;
  lastname: string;
  phone: string;
  email: string;
  address: string;
  password: string;
};

export const ChangeInfo = () => {
  const { t } = useTranslation();
  const userData = useSelector((state: any) => state?.authentication?.success1);
  const ChangeInfoSchema = yup.object().shape({
    name: yup.string().required(`${t('changeInfo_error_text')}`),
    lastname: yup.string().required(`${t('changeInfo_error_text1')}`),
    phone: yup.string().required(`${t('changeInfo_error_text2')}`),
    email: yup
      .string()
      .email(`${t('changeInfo_error_text3')}`)
      .required(`${t('changeInfo_error_text4')}`),
    address: yup.string().required(`${t('changeInfo_error_text5')}`),
  });
  const defaultValue = useDefaultValueContractCreate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: useMemo(() => defaultValue, [userData]),
    resolver: yupResolver(ChangeInfoSchema),
  });
  useEffect(() => {
    reset(defaultValue);
  }, [userData]);

  const ChangeInfo = async (id: any, data: any) => {
    try {
      await ChangeUserInfo.changeInfo(id, data);
      toast.success('Դուք հաջողությամբ Փոխել եք Ձեր Ինֆոն', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  const onSubmit = handleSubmit((data: FormData) => {
    ChangeInfo(userData?.id, data);
    reset();
  });
  return (
    <div className="changeInfo_form">
      <form onSubmit={onSubmit}>
        <div className="inputs change">
          <div className="inputs_divs">
            <div>
              <div className="input_block">
                <input
                  {...register('name')}
                  placeholder={`${t('changeInfo_text')}`}
                  className="form_input"
                />
                <p className="input_error">{errors.name?.message}</p>
              </div>
              <div className="input_block">
                <input
                  {...register('lastname')}
                  placeholder={`${t('changeInfo_text1')}`}
                  className="form_input"
                />
                <p className="input_error">{errors.lastname?.message}</p>
              </div>
              <div className="input_block">
                <input
                  {...register('phone')}
                  placeholder={`${t('changeInfo_text2')}`}
                  className="form_input"
                />
                <p className="input_error">{errors.phone?.message}</p>
              </div>
            </div>
            <div>
              <div className="input_block">
                <input
                  {...register('email')}
                  type="text"
                  placeholder={`${t('changeInfo_text3')}`}
                  className="form_input"
                />
                <p className="input_error">{errors.email?.message}</p>
              </div>
              <div className="input_block">
                <input
                  {...register('address')}
                  type="text"
                  placeholder={`${t('changeInfo_text4')}`}
                  className="form_input"
                />
                <p className="input_error">{errors.address?.message}</p>
              </div>
            </div>
          </div>

          <Button className="btn_edit_confirm" variant="contained" type="submit">
            {`${t('changeInfo_text6')}`}
          </Button>
        </div>
      </form>
    </div>
  );
};
