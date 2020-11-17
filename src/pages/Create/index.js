import React from 'react';
import { useHistory } from 'react-router-dom';

import CreateButton from '../../atoms/CreateButton';
import Icon from '../../atoms/Icon';

import Style from './Create.style';

import info from './data';

const Create = () => {
  const history = useHistory();
  const goBack = () => history.push('/');
  return (
    <>
      <Style.Header>
        <Style.BackButton onClick={goBack}>
          <Icon glyph="back" />
        </Style.BackButton>
        <Style.Title>
          {info.title}
        </Style.Title>
      </Style.Header>
      {/* <CreateForm /> */}
      <CreateButton action={()=>{}} disabled />
    </>
  );
}

export default Create;
