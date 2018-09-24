import React from 'react';
import styled from 'styled-components/native';

const fontSize = {
  base: 18,
  large: 35,
  small: 12,
};

const fontWeight = {
  base: 300,
  large: 900,
};

const customColor = {
  normal: "#000",
  error: "#FF0000",
};

const TextStyling = styled.Text`
    padding: 2px;
    font-size: ${ props => props.size ? fontSize[props.size] : fontSize['base']};
    font-family: Verdana;
    font-weight: ${ props => props.weight ? fontWeight.large : fontWeight.base};
    width: 95%;
    margin: 5px auto;
    color: ${ props => props.color ? customColor.error : customColor.normal};
`;

const StyledText = (props) => (
  <TextStyling
    size={props.size}
    style={props.style}
    weight={props.weight}
    color= {props.color}
  >
    {props.children}
  </TextStyling>
);

export default StyledText;
