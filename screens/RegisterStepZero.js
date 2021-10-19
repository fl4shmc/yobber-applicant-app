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
} from './../components/styles';
import { Formik } from 'formik';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const RegisterStepZero = () => {
  return <SubTitle>Let's take the details first</SubTitle>;
};

export default RegisterStepZero;
