import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import './OrderConfirmContent.css';
import { AppDispatch } from '../../redux/store';
import { addtoOnCart } from '../../redux/cart/cartSlice';
import { useTranslation } from 'react-i18next';
import { useDefaultValueContractCreate } from '../../hooks/useDefoultValue/useDefoultValue';
import Checkout from '../../http/checkout/checkout';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type FormData = {
  id?: any;
  name: string;
  lastname: string;
  phone: number;
  email: string;
  address: string;
};
export const OrderConfirmContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const id = useSelector((state: any) => state?.authentication?.accessToken?.id);
  const idNotUser = window.localStorage.getItem('id');
  const dispatch: AppDispatch = useDispatch();
  const productss = useSelector((state: any) => state?.cart?.items);
  const OrderConfirmContentSchema = yup.object().shape({
    name: yup.string().required(`${t('till_error_text')}`),
    lastname: yup.string().required(`${t('till_error_text1')}`),
    phone: yup.string().required(`${t('till_error_text2')}`),
    email: yup
      .string()
      .email(`${t('till_error_text3')}`)
      .required(`${t('till_error_text4')}`),
    address: yup.string().required(`${t('till_error_text5')}`),
  });
  const userData = useSelector((state: any) => state?.authentication?.success1);
  const defaultValue = useDefaultValueContractCreate();

  const product_id_quantity = productss?.items?.map((e: any) => {
    return { product_id: e?.product?.id, quantity: e.quantity };
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({
    defaultValues: useMemo(() => defaultValue, [userData]),
    resolver: yupResolver(OrderConfirmContentSchema),
  });

  useEffect(() => {
    dispatch(addtoOnCart(id ? id : idNotUser));
  }, []);

  const productsOnCart = async (data: any) => {
    try {
      await Checkout.checkout(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const onSubmit = handleSubmit((data: any) => {
    data.items = product_id_quantity;

    productsOnCart(data);
    navigate('/user/myorders');
    toast.success(`${t('myorders_text')}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset();
  });

  return (
    <div className="orderConfirm">
      <div className="orderConfirm_body">
        <div className="till">
          <div className="till_header">
            <p className="till_header_title">{t('till_title')}</p>
          </div>
          <div className="till_body">
            <form onSubmit={onSubmit}>
              <div className="till_body_inputs">
                <div className="half_inputs">
                  <div className="input_block_order">
                    <input
                      {...register('name')}
                      placeholder={`${t('till_input_text')}`}
                      className="form_input_order"
                    />
                    {errors && <p className="input_error">{errors.name?.message}</p>}
                  </div>

                  <div className="input_block_order">
                    <input
                      {...register('lastname')}
                      placeholder={`${t('till_input_text1')}`}
                      className="form_input_order"
                    />
                    {errors && <p className="input_error">{errors.lastname?.message}</p>}
                  </div>
                  <div className="input_block_order">
                    <input
                      {...register('phone')}
                      placeholder={`${t('till_input_text2')}`}
                      className="form_input_order"
                    />
                    {errors && <p className="input_error">{errors.phone?.message}</p>}
                  </div>
                  <div className="input_block_order">
                    <input
                      {...register('email')}
                      type="text"
                      placeholder={`${t('till_input_text3')}`}
                      className="form_input_order"
                    />
                    {errors && <p className="input_error">{errors.email?.message}</p>}
                  </div>
                  <div className="input_block_full">
                    <input
                      {...register('address')}
                      type="text"
                      placeholder={`${t('till_input_text4')}`}
                      className="form_input_order"
                    />
                    {errors && <p className="input_error">{errors.address?.message}</p>}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="all_info">
          <div className="all_info_header">
            <p className="all_info_header_title">{t('till_title1')}</p>
          </div>
          <div className="all_info_body_block">
            <div className="all_info_body">
              <div className="all_info_body_header">
                <p className="all_info_body_header_title">{t('till_title2')}</p>
              </div>
              {productss?.items?.map((elems: any, index: any) => {
                return (
                  <div key={index} className="about_prod">
                    <p className="about_prod_title">
                      {elems?.product?.title} {elems.product.size}
                      {elems.quantity > 1 && <span className="item_count">x{elems.quantity}</span>}
                    </p>
                    {elems?.product?.price && (
                      <p className="about_prod_price">{`֏${elems?.product?.price}`}</p>
                    )}
                  </div>
                );
              })}
              {/* <div className="all_info_price">
                <p className="all_info_price_title">Ընդհանուր Գումար</p>
                <p className="all_info_price_price">{`֏ ${productss?.total_price}`}</p>
              </div> */}
            </div>
            <div className="buy_order">
              <Button
                className="btn_contact_buy"
                variant="contained"
                type="submit"
                onClick={onSubmit}
              >
                {t('till_button')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
