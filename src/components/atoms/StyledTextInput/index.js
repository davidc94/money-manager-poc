import React from 'react';
import styled from 'styled-components/native';

const TextInputStyling = styled.TextInput`
  border-color: gray;
  border-width: 2px;
  width: 95%;
  margin: 0 auto;
  paddingLeft: 20;
  fontSize: 20;
`;

const StyledTextInput = props => (
  <TextInputStyling 
    secureTextEntry={!!props.password}
  />
);

export default StyledTextInput;
