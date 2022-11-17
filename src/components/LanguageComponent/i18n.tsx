import React, { useEffect, useState } from 'react';
import './i18n.css';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';

export default function Language() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  // const navigate = useNavigate();

  const changeLang = (lang: any) => {
    i18n.changeLanguage(lang);
    // navigate(`/${lang}/home`);
    location.reload();
  };
  const [age, setAge] = useState('10');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(() => {
    const getStorage = localStorage.getItem('test');

    setAge(JSON.parse(getStorage || '10'));
    if (currentLang == 'en-US') {
      setAge('10');
      changeLang('hy');
    }
  }, []);

  useEffect(() => {
    const setStorage = JSON.stringify(age);
    localStorage.setItem('test', setStorage);
  }, [age]);

  return (
    <div className="language">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            defaultValue="10"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Lang"
            onChange={handleChange}
          >
            <MenuItem value={10} onClick={() => changeLang('hy')}>
              <button className={clsx('LinkActive', currentLang === 'hy' && 'Link')}>ՀԱՅ</button>
            </MenuItem>
            <MenuItem value={20} onClick={() => changeLang('ru')}>
              <button className={clsx('LinkActive', currentLang === 'ru' && 'Link')}>РУС</button>
            </MenuItem>
            <MenuItem value={30} onClick={() => changeLang('en')}>
              <button className={clsx('LinkActive', currentLang === 'en' && 'Link')}>ENG</button>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
