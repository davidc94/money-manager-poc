import React from 'react';
import styled from 'styled-components/native';

const fontSize = {
  base: 25,
  large: 35,
};

const fontWeight = {
  base: 300,
  large: 900,
};

const TextStyling = styled.Text`
    padding: 2px;
    font-size: ${ props => props.size ? fontSize.large : fontSize.base};
    font-family: Verdana;
    font-weight: ${ props => props.weight ? fontWeight.large : fontWeight.base};
    width: 95%;
    margin: 5px auto;
`;

const StyledText = (props) => (
  <TextStyling
    size={props.size}
    weight={props.weight}
  >
    { props.children }
  </TextStyling>
);

export default StyledText;
