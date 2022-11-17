import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadServices } from '../../redux/services/services';
import { AppDispatch } from '../../redux/store';
// import { RiArrowDropRightLine } from 'react-icons/ri';
import './ServicesCart.css';
import { CartBlock } from '../CartBlock/CartBlock';

export default function ServicesCart() {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(loadServices(id));
  }, [id]);

  const { t } = useTranslation();
  const service = useSelector((state: any) => state?.services?.service?.data);
  console.log(service, 'bbbbbbbbbbbbbbbbb');
  return (
    <div className="sectionServices">
      <div className="sectionServicesCont">
        {service?.length > 0 ? (
          <>
            {service?.map((elem: any, index: number) => {
              return (
                // <div key={index} className="serviceCart">
                //   <img src={elem.images[1]} alt="" />
                //   <h2 className="serviceCartTitle">{elem.title}</h2>
                //   <p
                //     className="serviceText"
                //     dangerouslySetInnerHTML={{ __html: `${elem.description} ` }}
                //   ></p>
                //   <div className="serviceCartButtonText">
                //     <p>
                //       {id == '1'
                //         ? `${elem.price}֏/${t('serviceCart_price')}`
                //         : `${elem.price}֏/${t('serviceCart_price1')}`}
                //     </p>
                //     <div className="serviceCartButton">
                //       <p className="serviceCartText"> {`${t('cartBlock_see_more_card')}`}</p>
                //       <RiArrowDropRightLine />
                //     </div>
                //   </div>
                // </div>
                <CartBlock
                  key={index}
                  name={elem.title}
                  description={elem.description}
                  price={
                    id == '1'
                      ? `${elem.price}/${t('serviceCart_price')}`
                      : `${elem.price}/${t('serviceCart_price1')}`
                  }
                  img={elem.images[1]}
                  codes={elem.id}
                  product_id={elem.id}
                />
              );
            })}
          </>
        ) : (
          <div className="empoty_div">
            <p className="empoty_div_text"> {t('sectionContent_empoty_text')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
