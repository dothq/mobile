import * as React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { OnboardingStyles } from '../components/onboarding/styles';
import { CtaButton } from '../components/button';

export default function OnboardingScreen({ navigation }: { navigation: any }) {
  return (
    <View style={OnboardingStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={OnboardingStyles.header}>
        <Image source={require('../../assets/onboarding/logo.png')} style={OnboardingStyles.headerImage}/>
        <Text style={OnboardingStyles.headerTitle}>Welcome to Dot Browser</Text>
        <Text style={OnboardingStyles.description}>A privacy-conscious web browser that protects you from being tracked.</Text>
      </View>
      <View style={OnboardingStyles.footer}>
        <CtaButton onClick={() => navigation.navigate('OnboardingSync')} buttonText={'Get Started'} />
        <View style={OnboardingStyles.dotRow}>
          <View style={OnboardingStyles.dotActive} />
          <View style={OnboardingStyles.dot} />
          <View style={OnboardingStyles.dot} />
        </View>
      </View>
    </View>
  )
}