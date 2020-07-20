import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import OnboardingScreen from './onboarding';
import OnboardingSyncScreen from './onboarding/sync';
import OnboardingCustomizeScreen from './onboarding/customize';
import StartPage from './Startpage';
import PageView from './pageView';

const Stack = createStackNavigator();

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
          headerShown: false,
          
        }} 
        >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
        <Stack.Screen
          name="OnboardingSync"
          component={OnboardingSyncScreen}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
        <Stack.Screen
          name="OnboardingCustomize"
          component={OnboardingCustomizeScreen}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />

        <Stack.Screen
          name="StartPage"
          component={StartPage}
          options={{  }} />

        <Stack.Screen
          name="PageView"
          component={PageView}
          options={{  }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
};