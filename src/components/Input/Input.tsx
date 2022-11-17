import React from 'react';
import classnames from 'classnames';
import { ReactComponent as Showpass } from '../../images/ShowPass.svg';
import { ReactComponent as UnShowpass } from '../../images/unShowpass.svg';

import './Input.css';

type InputProps = {
  type?: string;
  placeholder?: string;
  showPass?: any;
  name?: string;
  value?: string;
  onChange?: any;
  onBlur?: any;
};

export const Input: React.FC<InputProps> = ({ type, placeholder, showPass, name, ...rest }) => {
  const [show, setShow] = React.useState(false);
  if (showPass) {
    return (
      <div className={classnames('input_block_', 'input_block_2', 'input_pass')}>
        <input
          {...rest}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          className="input"
          name={name}
        />
        <span className="showPass_icon" onClick={() => setShow(!show)}>
          {show ? <Showpass /> : <UnShowpass />}
        </span>
      </div>
    );
  }
  return (
    <div className={classnames('input_block_', 'input_block_2')}>
      <input {...rest} type={type} placeholder={placeholder} className="input" name={name} />
    </div>
  );
};
