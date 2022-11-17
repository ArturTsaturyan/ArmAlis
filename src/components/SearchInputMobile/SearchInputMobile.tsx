import React from 'react';
import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';
import './SearchInputMobile.css';

export default function SearchInputMobile() {
  const { t } = useTranslation();
  return (
    <div className="SearchInputMobile">
      <span className="searchIconMobile">
        <CiSearch />
      </span>
      <input
        type={'search'}
        placeholder={`${t('searchInput_text')}`}
        className={'searchInputMobile'}
      />
    </div>
  );
}
