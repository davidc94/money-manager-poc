import React from 'react';
import styled from 'styled-components/native';

const fontSize = {
  base: 18,
  large: 35,
};

const fontWeight = {
  base: 300,
  large: 900,
};

const TextStyling = styled.Text`
    font-size: ${ props => props.size ? fontSize.large : fontSize.base};
    font-weight: ${ props => props.weight ? fontWeight.large : fontWeight.base};
`;

const StyledText = (props) => (
  <TextStyling
    size={props.size}
    style={props.style}
    weight={props.weight}
  >
    {props.children}
  </TextStyling>
);

export default StyledText;
