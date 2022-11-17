import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ContactsForm.css';
import MessageService from '../../http/messageService/messageService';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDefaultValueContractCreate } from '../../hooks/useDefoultValue/useDefoultValue';
import { useSelector } from 'react-redux';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

type FormData = {
  name: string;
  lastname: string;
  phone: number;
  email: string;
  message: string;
};

export const ContactsForm = () => {
  const { t } = useTranslation();

  const ConectSchema = yup.object().shape({
    name: yup.string().required(`${t('contactForm_name_required')}`),
    lastname: yup.string().required(`${t('contactForm_lastname_required')}`),
    phone: yup.string().required(`${t('contactForm_phone_required')}`),
    email: yup
      .string()
      .email()
      .required(`${t('contactForm_email_required')}`),
    message: yup.string().required(`${t('contactForm_message_required')}`),
  });
  const userData = useSelector((state: any) => state?.authentication?.success1);
  const defaultValue = useDefaultValueContractCreate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: useMemo(() => defaultValue, [userData]),
    resolver: yupResolver(ConectSchema),
  });

  const onSubmit = handleSubmit((data: FormData) => {
    MessageService.sendMessage(data)
      .then(() => {
        toast.success(`${t('contactForm_message_toast_success')}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      })
      .catch(function () {
        toast.error(`${t('contactForm_message_toast_error')}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  });

  return (
    <div className="contactsForm">
      <form onSubmit={onSubmit}>
        <div className="contactForm">
          <div className="inputs s">
            <div className="input_blocks">
              <div className="input_block">
                <input
                  {...register('name')}
                  placeholder={t('contactForm_name')}
                  className="form_input"
                />
                <p className="input_error">{errors.name?.message}</p>
              </div>
              <div className="input_block">
                <input
                  {...register('lastname')}
                  placeholder={t('contactForm_lastname')}
                  className="form_input"
                />
                <p className="input_error">{errors.lastname?.message}</p>
              </div>
            </div>
            <div className="input_blocks">
              <div className="input_block">
                <input
                  {...register('phone')}
                  placeholder={t('contactForm_phone')}
                  className="form_input"
                />
                <p className="input_error">{errors.phone?.message}</p>
              </div>
              <div className="input_block">
                <input
                  {...register('email')}
                  type="text"
                  placeholder={t('contactForm_email')}
                  className="form_input"
                />
                <p className="input_error">{errors.email?.message}</p>
              </div>
            </div>
          </div>
          <div className="textarea">
            <textarea
              {...register('message')}
              placeholder={t('contactForm_message')}
              className="form_input_textare"
            />
            <p className="input_error">{errors.message?.message}</p>
          </div>
        </div>
        <Button className="btn_contact" variant="contained" type="submit">
          {t('contactForm_submit')}
        </Button>
      </form>
    </div>
  );
};
