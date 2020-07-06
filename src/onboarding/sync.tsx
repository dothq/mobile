import * as React from 'react';
import { View, StatusBar, Image, Text } from 'react-native';
import { OnboardingStyles } from '../components/onboarding/styles';
import { NoCtaButton, CtaButton } from '../components/button';
import Icon from 'react-native-vector-icons/Feather';

export default function OnboardingSyncScreen({ navigation }: { navigation: any }) {
  return (
    <View style={OnboardingStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={OnboardingStyles.header}>
        <Icon name={"refresh-cw"} style={OnboardingStyles.headerImage}/>
        <Text style={OnboardingStyles.headerTitle}>Sync your data between devices</Text>
        <Text style={OnboardingStyles.description}>You can sync history, bookmarks and downloads by signing in or creating your Dot ID.</Text>
      </View>
      <View style={OnboardingStyles.footer}>
        <View style={OnboardingStyles.buttonRow}>
          <NoCtaButton onClick={() => navigation.navigate('OnboardingCustomize')} buttonText={'Skip'} />
          <CtaButton onClick={null} buttonText={'Sign In'} />
        </View>
        <View style={OnboardingStyles.dotRow}>
          <View style={OnboardingStyles.dot} />
          <View style={OnboardingStyles.dotActive} />
          <View style={OnboardingStyles.dot} />
        </View>
      </View>
    </View>
  )
}