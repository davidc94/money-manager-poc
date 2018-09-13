import React from 'react';
import styled from 'styled-components/native';

const TextInputStyling = styled.TextInput`
    border-color: blue;
    border-width: 2px;
    width: 95%;
    margin: 0 auto;
`;

const StyledTextInput = props => (
  <TextInputStyling secureTextEntry ={!!props.password} />
);

export default StyledTextInput;
