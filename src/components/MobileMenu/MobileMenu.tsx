import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as UserIcon } from '../../images/userIcon.svg';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/HighlightOff';
import ChevronRightIcon from '@mui/icons-material/HighlightOff';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Carticon } from '../../images/Cart_Icon.svg';
import useIsMobile from '../../hooks/useisMobile';
import { ButtonComp } from '../Button/Button';
import { Login } from '../Login/Login';
import { SignUp } from '../SignUp/SignUp';
import { ForgotPass } from '../Login/Forgotpass/Forgotpass';
import './MobileMenu.css';
import { StyledBadge } from '../StyledBadge/StyledBadge';
import LanguageMobile from '../LanguageMobile/i18nMobile';
import { useTranslation } from 'react-i18next';
// import SearchInputMobile from '../SearchInputMobile/SearchInputMobile';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  let drawerWidth = 240;
  const isMobile = useIsMobile();
  const arr1 = [
    { title: 'home', name: t('moblie_menu_text') },
    { title: 'about', name: t('moblie_menu_text1') },
    { title: 'contacts', name: t('moblie_menu_text2') },
  ];
  const isToken = localStorage.getItem('token');

  if (isMobile <= 430) {
    drawerWidth = isMobile;
  }
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSingup, setOpenSingup] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const isLogin = useSelector(
    (state: any) => state?.authentication.accessToken?.accessToken?.success,
  );
  const count = useSelector((state: any) => state?.cart?.items);
  const isAuth = useSelector((state: any) => state?.authentication?.accessToken?.data);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickOpenSignup = () => {
    setOpenSingup(true);
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
  const handleClickCloseSignup = () => {
    setOpenSingup(false);
  };
  const handleCloseForgot = () => {
    setOpenForgot(false);
    setOpenLogin(true);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={location.pathname === '/about' ? 'moblie_menu' : 'moblie_menu_2'}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon fontSize="large" style={{ width: '50px', height: '50px' }} />
          </IconButton>
        </Toolbar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon fontSize="large" />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {arr1.map((text, index) => (
              <Link key={index} to={`/${text.title}`}>
                <ListItem key={text.name + index} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            {/* <SearchInputMobile /> */}
          </List>
          {isMobile < 991 && (
            <>
              <div className="mobile_menu_buttons">
                {count?.items?.length > 0 ? (
                  <StyledBadge badgeContent={count?.items?.length}>
                    <Carticon onClick={() => navigate('/card')} />
                  </StyledBadge>
                ) : (
                  <Carticon onClick={() => navigate('/card')} />
                )}
                <List
                  style={{
                    marginLeft: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    // paddingRight: '10px',
                  }}
                >
                  {isToken || isLogin === true || isAuth ? (
                    <div className="header_user">
                      <UserIcon onClick={() => navigate('/user')} />
                    </div>
                  ) : (
                    <>
                      <ButtonComp
                        style={{ marginRight: '10px', marginBottom: '10px' }}
                        title={t('header_buttons_title')}
                        transparent={true}
                        onClick={handleClickOpen}
                      />

                      <ButtonComp
                        style={{ marginRight: '10px' }}
                        title={t('header_buttons_title1')}
                        transparent={false}
                        onClick={handleClickOpenSignup}
                      />
                    </>
                  )}
                </List>
              </div>
              <Login
                open={openLogin}
                handleClose={handleClose}
                handleClickOpenForgot={handleClickOpenForgot}
              />
              <SignUp open={openSingup} handleClose={handleClickCloseSignup} />
              <ForgotPass open={openForgot} handleClose={handleCloseForgot} />
            </>
          )}
          <LanguageMobile />
          <Divider />
        </Drawer>
      </div>
    </ClickAwayListener>
  );
}
