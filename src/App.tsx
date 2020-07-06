import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './onboarding';
import OnboardingSyncScreen from './onboarding/sync';
import OnboardingCustomizeScreen from './onboarding/customize';
import StartPage from './Startpage';

const Stack = createStackNavigator();

function BlankHeader() {
  return (
    <>
    </>
  )
}

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  
  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={'Onboarding'}
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerTitle: props => <BlankHeader /> }} />
        <Stack.Screen
          name="OnboardingSync"
          component={OnboardingSyncScreen}
          options={{ title: 'Sync' }} />
        <Stack.Screen
          name="OnboardingCustomize"
          component={OnboardingCustomizeScreen}
          options={{ title: 'Customize' }} />

        <Stack.Screen
          name="StartPage"
          component={StartPage}
          options={{ title: 'Start' }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
};