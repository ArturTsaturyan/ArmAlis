import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../images/facebook.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';
import { ReactComponent as Phone } from '../../images/Phone.svg';
import { ReactComponent as Email } from '../../images/Email.svg';
import './Footer.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { loadFooterLinks, loadFooterLinks1 } from '../../redux/footer/footerSlice';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();
  const arr2 = [t('footer_paymont_items'), t('footer_paymont_items1')];

  useEffect(() => {
    dispatch(loadFooterLinks());
    dispatch(loadFooterLinks1());
  }, []);

  const footerItem = useSelector((state: any) => state?.footer?.footerLinks);
  const footerItems = footerItem?.data;
  const footerItem1 = useSelector((state: any) => state?.footer?.footerLinks1);
  const footerItems1 = footerItem1?.data;
  // const [leng, setLeng] = useState('');
  // useEffect(() => {
  //   const lang = localStorage.getItem('i18nextLng');
  //   setLeng(lang || '');
  // }, []);
  // console.log(leng, 'mmmmmmmmmmmmmmmmmmmmm');

  return (
    <div className="fff">
      <div className="footer_content">
        <div className="footerDiv">
          <div className="footer_info">
            <Link to={'/'} className="info_title">
              {t('footer_info_title')}
            </Link>
            <p className="info_subtitle">{t('footer_info_subtitle')}</p>
            <div className="social">
              <div className="social_icons">
                <a
                  href="https://www.facebook.com/ArmAlisFurniture"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Facebook />
                </a>
              </div>
              <div className="social_icons">
                <a
                  href="https://www.instagram.com/armalis_furniture/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="footer_small_row"></div> */}
          <div className="footer_assortment">
            <p className="assortment_title">{t('footer_assortment_title')}</p>
            <ul className="assortment_items">
              {footerItems?.map((e: any) => (
                <li key={e.id + e.name} className="footerItems">
                  <Link to={`/category/${e.id}`}>{e.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="footer_small_rows">
          <div className="footer_small_row"></div> 
         <div className="footer_small_row"></div> *
        </div> */}
        <div className="footerDiv footerBotttom">
          <div className="services_paymont">
            <div className="services">
              <p className="services_title">{t('footer_services_title')}</p>
              <ul className="services_items">
                {footerItems1?.map((e: any) => (
                  <li key={e.id + e.name}>
                    <Link to={`/services/${e.id}`}>{e.name}</Link>
                  </li>
                ))}
                <li>
                  <Link to={`/shipment`}>{t('sectionContent_panel_title5_text2')}</Link>
                </li>
                <li>
                  <Link to={`/printing`}>{t('sectionContent_panel_title5_text3')}</Link>
                </li>
              </ul>
            </div>
            {/* <div className="paymont">
              <p className="paymont_title">{t('footer_paymont_title')}</p>
              <ul className="paymont_items">
                {arr2.map((elem, index) => (
                  <li key={elem + index}>
                    <Link to={`/category/${elem}`}>{elem}</Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          {/* <div className="footer_small_row"></div> */}

          <div className="footer_contacts">
            <p className="contacts_title">{t('footer_contacts_title')}</p>
            <div className="contacts_body">
              <div className="phone_contact">
                <Phone />
                <a href="tel:+37493518888" className="phone_number">{`+374 93 518888`}</a>
              </div>
              <div className="email_contact">
                <Email />
                <a
                  href="mailto:armalis2011@gmail.com"
                  className="email_number"
                >{`armalis2011@gmail.com`}</a>
              </div>
              {/* <div>{t('home')}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
