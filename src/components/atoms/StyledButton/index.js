import React from 'react';
import styled from 'styled-components/native';

const colors = {
  accent: '#2E7AF6',
  disabled: '#C9C9C9',
  contrast: '#FFF',
}
const Label = styled.Text`
  color: ${props => props.disabled
    ? '#000'
    : colors.contrast};
  font-weight: 700;
  font-size: 20px;  
  align-self: center;
  padding: 20px;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.disabled
    ? colors.disabled
    : colors.accent};
  border-color: ${props => props.disabled
    ? colors.disabled
    : colors.accent};
  border-width: 2px;
  border-radius: 50;
  width: 50%;
  margin: 0 auto;
`;

const StyledButton = (props) => {
  return (
    <ButtonContainer
      underlayColor={colors.highlight}
      disabled={props.disabled}
      onPress={(props.disabled) ? null : props.onPress}
    >
      <Label
        disabled={props.disabled}
      >
        {props.children}
      </Label>
    </ButtonContainer>
  );
};

export default StyledButton;
