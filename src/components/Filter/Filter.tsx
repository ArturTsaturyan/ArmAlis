import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Filter.css';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { country1 } from '../../redux/filter/filterSlice';
// import { serializeStyles } from '@emotion/serialize';
import {
  colorData,
  sizeData,
  countryData,
  thicknessesData,
  servicesData,
} from '../../redux/filter/filteredSlice';

type FilterProps = {
  title?: string;
  // checkboxes?: any;
  panel?: any;
  setExpanded?: any;
  expanded?: any;
  // onChange?: any;
  color?: any;
  size?: any;
  checked?: any;
  country?: any;
  thicknesses?: any;
  services?: any;
};
export const Filter: React.FC<FilterProps> = ({
  title,
  // checkboxes,
  color,
  panel,
  size,
  setExpanded,
  expanded,
  // onChange,
  checked,
  country,
  thicknesses,
  services,
}) => {
  // const color1 = useSelector((state: any) => state?.filter?.color?.data);
  const handleChangeOpen =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const dispatch = useDispatch();

  const handleChangeColor = (e: any) => {
    dispatch(colorData(e.target.value));
  };
  const handleChangeSize = (e: any) => {
    dispatch(sizeData(e.target.value));
  };
  const handleChangeManufacturer = (e: any) => {
    dispatch(countryData(e.target.value));
  };
  const handleChangeThicknesses = (e: any) => {
    dispatch(thicknessesData(e.target.value));
  };
  const handleChangeServices = (e: any) => {
    dispatch(servicesData(e.target.value));
  };
  return (
    <div className="filter">
      <Accordion
        sx={{ boxShadow: 'none', backgroundColor: '#F9F9F9' }}
        expanded={expanded === panel}
        onChange={handleChangeOpen(panel)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <p className="filter_title">{title}</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="checkboxes">
            {/* {checkboxes &&
              checkboxes.map((elem: any, index: number) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox onChange={onChange} />}
                  label={elem.checkboxes}
                />
              ))} */}
            {color &&
              color.map((elem: any, index: number) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      onChange={handleChangeColor}
                      checked={checked}
                      name={elem.name}
                      value={elem.id}
                    />
                  }
                  label={elem.name}
                />
              ))}
            {size &&
              size.map((elem: any, index: number) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      onChange={handleChangeSize}
                      checked={checked}
                      name={elem.size}
                      value={elem.id}
                    />
                  }
                  label={elem.size}
                />
              ))}
            {country &&
              country.map((elem: any, index: number) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      onChange={handleChangeManufacturer}
                      checked={checked}
                      name={elem.name}
                      value={elem.id}
                    />
                  }
                  label={elem.name}
                />
              ))}
            {thicknesses &&
              thicknesses.map((elem: any, index: number) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      onChange={handleChangeThicknesses}
                      checked={checked}
                      name={elem.name}
                      value={elem.id}
                    />
                  }
                  label={elem.name}
                />
              ))}
            {services &&
              services.map((elem: any, index: number) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      onChange={handleChangeServices}
                      checked={checked}
                      name={elem.name}
                      value={elem.id}
                    />
                  }
                  label={elem.name}
                />
              ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
