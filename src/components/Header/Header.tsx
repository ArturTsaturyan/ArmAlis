import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PersistentDrawerRight from '../MobileMenu/MobileMenu';
import { StyledBadge } from '../StyledBadge/StyledBadge';
import useIsMobile from '../../hooks/useisMobile';
import { ReactComponent as Carticon } from '../../images/Cart_Icon.svg';
import { ReactComponent as UserIcon } from '../../images/userIcon.svg';
import Logo from '../../images/LogoOrange.svg';
import Logo2 from '../../images/Logo.svg';
import LogoBlack from '../../images/LogoBlack.png';
import { ButtonComp } from '../Button/Button';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp';
import { ForgotPass } from '../Login/Forgotpass/Forgotpass';
import './header.css';
import Language from '../LanguageComponent/i18n';
import { useTranslation } from 'react-i18next';
// import SearchInput from '../SearchInput/SearchInput';

type HeaderProps = {
  about?: boolean;
  card?: boolean;
  user?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ about, card }) => {
  const navigate = useNavigate();

  const isLogin = useSelector((state: any) => state?.authentication?.accessToken);
  const isAuth = useSelector((state: any) => state?.authentication);

  const count = useSelector((state: any) => state?.cart?.items?.items);
  const isMobile = useIsMobile();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSingup, setOpenSingup] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const { t } = useTranslation();
  const isToken = localStorage.getItem('token');

  const arr = [
    { title: 'home', name: t('nav_item') },
    { title: 'about', name: t('nav_item1') },
    { title: 'contacts', name: t('nav_item2') },
  ];
  const handleClickOpenSignup = () => {
    setOpenSingup(true);
  };

  const handleClickCloseSignup = () => {
    setOpenSingup(false);
  };

  const handleClickOpen = () => {
    setOpenLogin(true);
  };

  const handleClose = () => {
    setOpenLogin(false);
  };

  const handleClickOpenForgot = () => {
    setOpenLogin(false);
    setOpenForgot(true);
  };

  const handleCloseForgot = () => {
    setOpenForgot(false);
    setOpenLogin(true);
  };

  // const { i18n } = useTranslation();
  // const currentLang = i18n.language;
  // const [age, setAge] = useState('');
  // useEffect(() => {
  //   const getStorage = localStorage.getItem('i18nextLng');

  //   setAge(getStorage || '');
  // }, [currentLang]);
  return (
    <div className="main_header container">
      {about ? (
        <Link className="img" to="/">
          <img src={Logo2} alt="Logo" />
        </Link>
      ) : card ? (
        <Link className="img" to="/">
          <img src={LogoBlack} alt="Logo" />
        </Link>
      ) : (
        <Link className="img" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      )}

      <div className="nav_cart">
        {isMobile >= 991 ? (
          <>
            <div className="navbar">
              {about ? (
                <ul className="nav_items">
                  {arr.map((elem, index) => (
                    <li key={elem.name + index} className="nav_item">
                      <NavLink
                        to={`/${elem.title}`}
                        className={({ isActive }) => (isActive ? 'activeBtn' : 'meut_item_white')}
                      >
                        {elem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="nav_items">
                  {arr.map((elem, index) => (
                    <li key={elem.name + index} className="nav_item">
                      <NavLink
                        to={`/${elem.title}`}
                        className={({ isActive }) => (isActive ? 'activeBtn' : 'menu_item')}
                      >
                        {elem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="header_cart_icons">
              <div className={!about ? 'header_cart_icon' : 'header_cart_icon_white'}>
                {count?.length > 0 ? (
                  <StyledBadge badgeContent={count?.length}>
                    <Carticon onClick={() => navigate('/card')} />
                  </StyledBadge>
                ) : (
                  <Carticon onClick={() => navigate('/card')} />
                )}
              </div>
              {isToken || isAuth?.accessToken?.id ? (
                <div className="header_user">
                  <UserIcon onClick={() => navigate('/user')} />
                </div>
              ) : isMobile >= 786 ? (
                <div className="header_buttons">
                  {about ? (
                    <>
                      <ButtonComp
                        style={{ marginRight: '10px' }}
                        title={t('header_buttons_title')}
                        transparent={true}
                        onClick={handleClickOpen}
                        about
                      />

                      <ButtonComp
                        title={t('header_buttons_title1')}
                        transparent={false}
                        onClick={handleClickOpenSignup}
                        about
                      />
                    </>
                  ) : card ? (
                    <>
                      <ButtonComp
                        style={{ marginRight: '10px' }}
                        title={t('header_buttons_title')}
                        transparent={true}
                        onClick={handleClickOpen}
                        card
                      />
                      <ButtonComp
                        title={t('header_buttons_title1')}
                        transparent={false}
                        onClick={handleClickOpenSignup}
                        card
                      />
                    </>
                  ) : (
                    <>
                      <ButtonComp
                        style={{ marginRight: '10px' }}
                        title={t('header_buttons_title')}
                        transparent={true}
                        onClick={handleClickOpen}
                      />

                      <ButtonComp
                        title={t('header_buttons_title1')}
                        transparent={false}
                        onClick={handleClickOpenSignup}
                      />
                    </>
                  )}
                </div>
              ) : (
                ''
              )}
            </div>
          </>
        ) : (
          <PersistentDrawerRight />
        )}
        {/*  */}
        <Language />
        {/* <SearchInput /> */}
      </div>
      <Login
        open={openLogin}
        handleClose={handleClose}
        handleClickOpenForgot={handleClickOpenForgot}
      />
      <SignUp open={openSingup} handleClose={handleClickCloseSignup} />
      <ForgotPass open={openForgot} handleClose={handleCloseForgot} />
    </div>
  );
};
