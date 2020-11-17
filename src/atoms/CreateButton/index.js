import React from 'react';
import { bool, func, string } from 'prop-types';

import Icon from '../../atoms/Icon';

import Style from './CreateButton.style';

const createButtonLabel = 'Criar transação';

const CreateButton = (props) => {
  const { action, disabled, glyph } = props;

  return (
    <Style.ButtonContainer>
      <Style.CreateButton onClick={action} disabled={disabled}>
        { 
          !!glyph && (<Icon glyph={glyph}/>)
        }
        <Style.ButtonLabel hasIcon={!!glyph} disabled={disabled}>{createButtonLabel}</Style.ButtonLabel>
      </Style.CreateButton>
    </Style.ButtonContainer>
  );
}

CreateButton.propTypes = {
  action: func.isRequired,
  disabled: bool,
  glyph: string,
};

CreateButton.defaultProps = {
  glyph: null,
  disabled: false,
};

export default CreateButton;
