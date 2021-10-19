import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colours,
  StyledButton,
  ButtonText,
  MessageBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from './../components/styles';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { View } from 'react-native';

const { darklight } = Colours;

const LoginServices = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/logo.png')} />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <StyledButton provider="google" onPress={handleSubmit}>
                <Fontisto name="google" color={darklight} size={25} />
                <ButtonText provider="google">Sign in with Google</ButtonText>
              </StyledButton>
              <StyledButton provider="facebook" onPress={handleSubmit}>
                <Fontisto name="facebook" color="white" size={25} />
                <ButtonText provider="facebook">Sign in with Facebook</ButtonText>
              </StyledButton>
              <StyledButton provider="linkedin" onPress={handleSubmit}>
                <Fontisto name="linkedin" color="white" size={25} />
                <ButtonText provider="linkedin">Sign in with LinkedIn</ButtonText>
              </StyledButton>
              <StyledButton provider="microsoft" onPress={handleSubmit}>
                <Fontisto name="microsoft" color="white" size={25} />
                <ButtonText provider="microsoft">Sign in with Microsoft</ButtonText>
              </StyledButton>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={darklight} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darklight} />
        </RightIcon>
      )}
    </View>
  );
};

export default LoginServices;
