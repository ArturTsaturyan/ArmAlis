import React from 'react';
import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';
import './SearchInput.css';

type HeaderProps = {
  onChange?: any;
  onClick?: any;
};

const SearchInput: React.FC<HeaderProps> = ({ onChange, onClick }) => {
  const { t } = useTranslation();
  return (
    <div className="SearchInput">
      <span className="searchIcon" onClick={onClick}>
        <CiSearch />
      </span>
      <input
        type={'search'}
        placeholder={`${t('searchInput_text')}`}
        className={'searchInput'}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
