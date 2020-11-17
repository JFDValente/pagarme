import React from 'react';
import {
  bool,
  func,
  string,
} from 'prop-types';

import Style from './InputField.style';

const InputField = (props) => {
  const { label, name, onChange, required, spaceBefore, type, value } = props;
  return (
    <Style.Container spaceBefore={spaceBefore}>
      <Style.Input type={type} name={name} value={value} required={required} onChange={onChange}/>
      <Style.Label value={value}>{label}</Style.Label>
    </Style.Container>
  );
}

InputField.propTypes = {
  label: string,
  name: string,
  onChange: func,
  required: bool,
  spaceBefore: bool,
  type: string,
  value: string,
};
    
InputField.defaultProps = {
  label: '',  
  name: '',
  onChange: () => {},
  required: false,
  spaceBefore: false,
  type: 'text',
  value: '',
};

export default InputField;