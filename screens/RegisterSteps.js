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
import DateTimePicker from '@react-native-community/datetimepicker';

const { darklight } = Colours;

const RegisterStepZero = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

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
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
              <Formik
                initialValues={{ firstname: '', lastname: '', dateofbirth: '' }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <StyledFormArea>
                    <MyTextInput
                      label="Firstname"
                      onChangeText={handleChange('firstname')}
                      onBlur={handleBlur('firstname')}
                      value={values.firstname}
                      keyboardType="default"
                    />
                    <MyTextInput
                      label="Lastname"
                      onChangeText={handleChange('lastname')}
                      onBlur={handleBlur('lastname')}
                      value={values.lastname}
                      keyboardType="default"
                    />
                    <MyTextInput
                      label="Date of Birth"
                      onChangeText={handleChange('dateofbirth')}
                      onBlur={handleBlur('dateofbirth')}
                      value={dob ? dob.toDateString() : ''}
                      isDate={true}
                      editable={false}
                      showDatePicker={showDatePicker}
                    />
                    <MyTextInput
                      label="Address"
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      value={values.address}
                      keyboardType="default"
                    />
                    <MyTextInput
                      label="Postal Code"
                      onChangeText={handleChange('postalcode')}
                      onBlur={handleBlur('postalcode')}
                      value={values.postalcode}
                      keyboardType="default"
                    />
                    <MyTextInput
                      label="Location"
                      onChangeText={handleChange('location')}
                      onBlur={handleBlur('location')}
                      value={values.location}
                      keyboardType="default"
                    />
                  </StyledFormArea>
                )}
              </Formik>
            </View>
          </ProgressStep>
          <ProgressStep>
            <View style={{ alignItems: 'center' }}>
              <Text>What type of job are you interested in?</Text>
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

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput type="noicon" {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput type="noicon" {...props} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RegisterStepZero;
