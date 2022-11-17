import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './UserInfoItem.css';
import { AppDispatch } from '../../../redux/store';
import { logoutUser } from '../../../redux/user/loginSlice';

type UserInfoItemProps = {
  title: string;
  href?: string;
  img?: string;
};

export const UserInfoItem: React.FC<UserInfoItemProps> = ({ title, img, href }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <>
      {title === 'Դուրս Գալ' || title === 'Выйти' || title === 'Log Out' ? (
        <button className="users_info_item_button" onClick={logOut}>
          <p className="users_info_item_title">{title}</p>
          <div className="users_info_item_img">{img}</div>
        </button>
      ) : (
        <Link to={href ? href : '#'}>
          <div className="users_info_item">
            <p className="users_info_item_title">{title}</p>
            <div className="users_info_item_img">{img}</div>
          </div>
        </Link>
      )}
    </>
  );
};
