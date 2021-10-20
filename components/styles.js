import styled from 'styled-components';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;
//colours
export const Colours = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darklight: '#9CA3AF',
};

const { primary, secondary, tertiary, darklight } = Colours;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 269px;
  height: 46px;
  margin-top: 170px;
  margin-bottom: 20px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-family: 'exo-light';
  /* margin-top: 20px; */
  margin-bottom: 20px;
  letter-spacing: 1px;
  color: black;
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 50px;
  margin-top: 3px;
  margin-bottom: 10px;
  color: ${tertiary};

  ${(props) =>
    props.type != 'noicon' &&
    `
    padding-left: 55px;
    `}
`;

export const StyledInputLabel = styled.Text`
  color: ${darklight};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 31px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 31px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: #009cb4;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 5px;
  height: 60px;

  ${(props) =>
    props.provider == 'google' &&
    `
    background-color: transparent;
    border: 1px solid #009cb4;
    flex-direction: row;
    justify-content: center;
  `}

  ${(props) =>
    props.provider == 'facebook' &&
    `
    background-color: #3b5998;
    flex-direction: row;
    justify-content: center;
  `}

  ${(props) =>
    props.provider == 'linkedin' &&
    `
    background-color: #0077b5;
    flex-direction: row;
    justify-content: center;
  `}

  ${(props) =>
    props.provider == 'microsoft' &&
    `
    background-color: #7FBA00;
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${darklight};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: #009cb4;
  font-size: 15px;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;

  ${(props) =>
    props.provider == 'google' &&
    `
    color: ${darklight};
    padding: 25px;
  `}

  ${(props) =>
    props.provider == 'facebook' &&
    `
    padding: 25px;
  `}

  ${(props) =>
    props.provider == 'linkedin' &&
    `
    padding: 25px;
  `}

  ${(props) =>
    props.provider == 'microsoft' &&
    `
    padding: 25px;
  `}
`;

export const MessageBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darklight};
  margin-top: 10px;
`;
