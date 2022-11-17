import React, { useState, useEffect } from 'react';
import {
  colors,
  FormControl,
  ListItemIcon,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ReactComponent as OrangeArrow } from '../../images/OrangeArrow.svg';
import { CartBlock } from '../CartBlock/CartBlock';
import { Filter } from '../Filter/Filter';
import RangeSlider from '../RangeSlider/RangeSlider';
import usePagination from '../Pagination/Pagination';
import './SectionContent.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { loadProducts } from '../../redux/product/getProductSlice';
import { HiFilter } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { loadFiltredProduct } from '../../redux/product/getFiltredProduct';
import {
  loadFilterColor,
  loadFilterCountry,
  loadFilterSize,
  loadFilterThicknesses,
} from '../../redux/filter/filterSlice';
import { loadChangeFiltersLink, loadFiltersLink, start } from '../../redux/filter/filteredSlice';
import SearchInput from '../SearchInput/SearchInput';

export const SectionContent = () => {
  const [changeCode, setChangeCode] = useState('');
  const [searchInputChange, setsearchInputChange] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: any) => state?.getProducts?.products);
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState<string | false>();
  const per_page = useSelector((state: any) => state.filtred?.filtredProduct?.links?.per_page);
  const total_page = useSelector((state: any) => state?.filtereds?.start?.links?.total);
  const PER_PAGE = per_page;
  const count = Math.ceil(total_page / PER_PAGE);
  const _DATA = usePagination(products ? products : 1, PER_PAGE);
  const [age, setAge] = useState('0');
  const [filter, setFilter] = useState(false);
  const product = useSelector((state: any) => state?.filtred?.filtredProduct?.data?.[0]?.category);
  const { t } = useTranslation();
  const size = useSelector((state: any) => state?.filter?.size?.data);
  const color1 = useSelector((state: any) => state?.filter?.color?.data);
  const country = useSelector((state: any) => state?.filter?.country?.data);
  const thicknesses = useSelector((state: any) => state?.filter?.thicknesses?.data);
  const filterProducts = useSelector((state: any) => state?.filtereds?.start?.data);
  const [sort, setSort] = useState('');
  const [direction, setDirection] = useState('');

  const options = [
    { value: '0', label: `${t('sectionContent_options')}`, sort: 'id', direction: 'desc' },
    { value: '1', label: `${t('sectionContent_options1')}`, sort: 'price', direction: 'asc' },
    { value: '2', label: `${t('sectionContent_options2')}`, sort: 'price', direction: 'desc' },
    // { value: '3', label: `${t('sectionContent_options3')}`, sort: 'id' },
  ];
  const dateForFilterComponent = [
    {
      panelName: 'panel1',
      title: `${t('sectionContent_panel_title')}`,
      // checkboxes: [
      //   { checkboxes: '1x1' },
      //   { checkboxes: '2x4' },
      //   { checkboxes: '3x5' },
      //   { checkboxes: '4x8' },
      //   { checkboxes: `${t('sectionContent_panel_text_all')}` },
      // ],
      size,
    },
    // {
    //   panelName: 'panel2',
    //   title: `${t('sectionContent_panel_title1')}`,
    //   checkboxes: [
    //     { checkboxes: `${t('sectionContent_panel_title1_text')}` },
    //     { checkboxes: `${t('sectionContent_panel_title1_text1')}` },
    //     { checkboxes: `${t('sectionContent_panel_title1_text2')}` },
    //     { checkboxes: `${t('sectionContent_panel_title1_text3')}` },
    //     { checkboxes: `${t('sectionContent_panel_text_all')}` },
    //   ],
    // },
    {
      panelName: 'panel3',
      title: `${t('sectionContent_panel_title2')}`,
      // checkboxes: [
      //   { checkboxes: '32' },
      //   { checkboxes: '22' },
      //   { checkboxes: '18' },
      //   { checkboxes: '16' },
      //   { checkboxes: '15' },
      //   { checkboxes: '12' },
      //   { checkboxes: '10' },
      //   { checkboxes: '09' },
      //   { checkboxes: '08' },
      //   { checkboxes: '06' },
      //   { checkboxes: '04' },
      //   { checkboxes: '03' },
      //   { checkboxes: `${t('sectionContent_panel_text_all')}` },
      // ],
      thicknesses,
    },
    {
      panelName: 'panel4',
      title: `${t('sectionContent_panel_title3')}`,
      // checkboxes: [
      //   { checkboxes: `${t('sectionContent_panel_title3_text')}` },
      //   { checkboxes: `${t('sectionContent_panel_title3_text1')}` },
      //   { checkboxes: `${t('sectionContent_panel_title3_text2')}` },
      //   { checkboxes: `${t('sectionContent_panel_title3_text3')}` },
      //   { checkboxes: `${t('sectionContent_panel_title3_text4')}` },
      //   { checkboxes: `${t('sectionContent_panel_title3_text5')}` },
      //   { checkboxes: `${t('sectionContent_panel_title3_text6')}` },
      //   { checkboxes: `${t('sectionContent_panel_title3_text7')}` },
      //   { checkboxes: `${t('sectionContent_panel_text_all')}` },
      // ],
      color1,
    },
    {
      panelName: 'panel5',
      title: `${t('sectionContent_panel_title4')}`,
      // checkboxes: [
      //   { checkboxes: `${t('sectionContent_panel_title4_text')}` },
      //   { checkboxes: `${t('sectionContent_panel_title4_text1')}` },
      //   { checkboxes: `${t('sectionContent_panel_title4_text2')}` },
      // ],
      country,
    },
    // {
    //   panelName: 'panel6',
    //   title: `${t('sectionContent_panel_title5')}`,
    //   // checkboxes: [
    //   //   { checkboxes: `${t('sectionContent_panel_title5_text')}` },
    //   //   { checkboxes: `${t('sectionContent_panel_title5_text1')}` },
    //   //   { checkboxes: `${t('sectionContent_panel_title5_text2')}` },
    //   //   { checkboxes: `${t('sectionContent_panel_title5_text3')}` },
    //   // ],
    //   services,
    // },
  ];

  const colorData = useSelector((state: any) => state?.filtereds?.colorData);
  const sizeData = useSelector((state: any) => state?.filtereds?.sizeData);
  const thicknessesData = useSelector((state: any) => state?.filtereds?.thicknessesData);
  const countryData = useSelector((state: any) => state?.filtereds?.countryData);
  const servicesData = useSelector((state: any) => state?.filtereds?.servicesData);
  const rangeData = useSelector((state: any) => state?.filtereds?.range);

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadFiltredProduct(Number(id)));
    dispatch(loadFilterColor());
    dispatch(loadFilterSize());
    dispatch(loadFilterCountry());
    dispatch(loadFilterThicknesses());
    dispatch(loadProducts());
    dispatch(start([]));
  }, []);

  useEffect(() => {
    dispatch(
      loadFiltersLink(
        page,
        id,
        colorData.join(),
        sizeData.join(),
        thicknessesData.join(),
        countryData.join(),
        servicesData.join(),
        changeCode,
        rangeData.join(),
        sort,
        direction,
      ),
    );
  }, [
    colorData,
    sizeData,
    thicknessesData,
    countryData,
    servicesData,
    id,
    page,
    changeCode,
    rangeData,
    sort,
    direction,
  ]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const handleChangePag = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  const SearchChange = (e: any) => {
    setChangeCode(e.target.value);
  };

  const SearchInputChange = (e: any) => {
    setsearchInputChange(e.target.value);
  };
  const navigate = useNavigate();
  const SearchInputClick = () => {
    dispatch(
      loadChangeFiltersLink(
        page,
        colorData.join(),
        sizeData.join(),
        thicknessesData.join(),
        countryData.join(),
        servicesData.join(),
        changeCode,
        searchInputChange,
        rangeData.join(),
        sort,
        direction,
      ),
    );
    navigate('/category');
  };

  return (
    <div className="sectionContent">
      <div className="about_sectionContent">
        <div className="section_name_block">
          <p className="section___">{t('sectionContent_title')}</p>
          <div className="section_name_block_icon">
            <OrangeArrow />
          </div>
          <p className="section_name">{product}</p>
        </div>
        <div className="categoryes">
          <div id={'select'}>
            <div className="categoryes_title_block">
              <p className="categoryes_title">{t('sectionContent_categoryes_title')}</p>
            </div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {options.map(({ value, label, sort, direction }, index) => (
                  <MenuItem
                    key={index}
                    value={value}
                    onClick={() => {
                      setSort(sort);
                      setDirection(direction);
                    }}
                  >
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="filterIcon" onClick={() => setFilter((e) => !e)}>
            <HiFilter />
          </div>
        </div>
      </div>
      <div className="sectionContent_body">
        <div className="sectionContent_body_sidebar sectionContent_body_sidebar_none">
          <SearchInput onChange={SearchInputChange} onClick={SearchInputClick} />
          <div className="price_range_block">
            <p className="price_range_title">{t('sectionContent_price_range_title')}</p>
            <RangeSlider />
          </div>
          {/* <SearchInput onChange={SearchInputChange} onClick={SearchInputClick} /> */}
          {dateForFilterComponent.map((item, index) => (
            <Filter
              key={index}
              panel={item.panelName}
              title={item.title}
              // checkboxes={item.checkboxes}
              size={item.size}
              color={item.color1}
              // onChange={handleChangeItem}
              thicknesses={item.thicknesses}
              country={item.country}
              expanded={expanded}
              setExpanded={setExpanded}
              // services={item.services}
            />
          ))}

          <div>
            <input
              type="search"
              placeholder={`${t('sectionContent_panel_search_text')}`}
              className="formInputSearch"
              onChange={SearchChange}
            />
          </div>
        </div>
        <div className={filter ? 'filterMobileActiv' : 'filterMobile'}>
          <div className="sectionContent_body_sidebar">
            <SearchInput onChange={SearchInputChange} onClick={SearchInputClick} />
            <div className="price_range_block">
              <p className="price_range_title">{t('sectionContent_price_range_title')}</p>
              <RangeSlider />
            </div>
            {dateForFilterComponent.map((item, index) => (
              <Filter
                key={index}
                panel={item.panelName}
                title={item.title}
                color={item.color1}
                country={item.country}
                size={item.size}
                thicknesses={item.thicknesses}
                // checkboxes={item.checkboxes}
                expanded={expanded}
                setExpanded={setExpanded}
                // services={item.services}
              />
            ))}

            <div>
              <input
                type="search"
                placeholder={`${t('sectionContent_panel_search_text')}`}
                className="formInputSearch"
                onChange={SearchChange}
              />
            </div>
          </div>
        </div>
        <div className="sectionContent_div_body_products">
          <div className="sectionContent_body_products">
            {/* {products?.length >= 0 ? (
              <>
                {_DATA?.currentData()?.map((elem: any, index: number) => {
                  return (
                    <CartBlock
                      key={index}
                      name={elem.title}
                      cardSize="32%"
                      code={elem.code}
                      properties={elem.properties}
                      price={elem.price}
                      product_id={elem.id}
                      img={elem.images[0]}
                    />
                  );
                })}
              </>
            ) : (
              <div className="empoty_div">
                <p className="empoty_div_text"> {t('sectionContent_empoty_text')}</p>
              </div>
              
            )} */}
            {filterProducts?.length > 0 ? (
              <>
                {filterProducts?.map((elem: any, index: number) => {
                  return (
                    <CartBlock
                      key={index}
                      name={elem.title}
                      cardSize="32%"
                      code={elem.code}
                      properties={elem.properties}
                      price={elem.price}
                      product_id={elem.id}
                      img={elem.images[0]}
                      in_stock={elem.in_stock}
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
          <Pagination
            count={count ? count : 0}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChangePag}
          />
        </div>
      </div>
    </div>
  );
};
