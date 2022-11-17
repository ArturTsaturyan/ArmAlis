import React from 'react';
import { Title } from '../Title/Title';
import ShipmentImg from '../../images/shipment.jpg';
import './ShipmentComponent.css';
import { useTranslation } from 'react-i18next';

const ShipmentComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="shipment">
      <Title name={'Shipment'} />
      <div className="aboutUs_content container">
        <div className="aboutUs_content_img">
          <div>
            <img className="shipmentImage" src={ShipmentImg} alt="Icon" />
          </div>
        </div>
        <div className="aboutUs_content_text_block">
          <p
            className="shipment_content_text"
            dangerouslySetInnerHTML={{ __html: `${t('aboutUs_content_text')} ` }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default ShipmentComponent;
