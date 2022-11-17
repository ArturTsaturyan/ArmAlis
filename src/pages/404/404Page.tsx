import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
// import { TbFaceIdError } from 'react-icons/tb';
import './404.css';

export default function Error() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div id="div">
        <div>
          <p style={{ textAlign: 'center' }}>
            {/* <div className="errorImage">
              <TbFaceIdError />
            </div> */}
            <p className="errorTitle">{t('error_title')}</p>
            <Link to="/" className="errorLink">
              {t('error_title1')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
