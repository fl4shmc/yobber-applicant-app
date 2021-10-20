import React, { useState } from 'react';
import Login from './screens/Login';
import LoginServices from './screens/LoginServices';
import Signup from './screens/Signup';
import RegisterSteps from './screens/RegisterSteps';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'exo-thin': require('./assets/fonts/Exo-Thin.ttf'),
    'exo-light': require('./assets/fonts/Exo-Light.ttf'),
    'exo-medium': require('./assets/fonts/Exo-Medium.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={console.warn} />;
  } else {
    return <RegisterSteps />;
  }
}
