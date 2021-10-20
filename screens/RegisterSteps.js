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
  SubTitle,
} from '../components/styles';
import { Formik } from 'formik';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const { darklight } = Colours;

const RegisterStepZero = () => {
  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <StyledContainer>
        <ProgressSteps
          activeStepIconBorderColor="#009cb4"
          activeStepIconColor="#009cb4"
          activeStepNumColor="white"
          completedProgressBarColor="#009cb4"
          completedStepIconColor="#009cb4"
        >
          <ProgressStep>
            <View style={{ alignItems: 'center' }}>
              <SubTitle>Let's take the details first!</SubTitle>
              <Formik
                initialValues={{ firstname: '', lastname: '' }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <StyledFormArea>
                    <MyTextInput
                      label="Firstname"
                      onChangeText={handleChange('firstname')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                    />
                    <MyTextInput
                      label="Lastname"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                    />
                  </StyledFormArea>
                )}
              </Formik>
            </View>
          </ProgressStep>
          <ProgressStep>
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep>
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </StyledContainer>
    </View>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput type="noicon" {...props} />
    </View>
  );
};

export default RegisterStepZero;
