import React from 'react';
import { string } from 'prop-types';

import Style from './Icon.style';

const Icon = (props) => {
  const { glyph } = props;
  const iconSrc = require(`./svg/${glyph}.svg`);

  return (
    <Style.Icon src={iconSrc} alt={glyph} />
  );
};

Icon.propTypes = {
  glyph: string.isRequired,
};

export default Icon;
