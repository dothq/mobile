import * as React from 'react';
import { Text, View, Image, StatusBar, StyleSheet } from 'react-native';
import { OnboardingStyles } from '../components/onboarding/styles';
import { CtaButton } from '../components/button';
import Icon from 'react-native-vector-icons/Feather'
import { GridElement } from '../components/onboarding/GridElement';

export default function OnboardingCustomizeScreen({ navigation }: { navigation: any }) {
  const [googleChecked, setGoogleChecked] = React.useState(false);
  const [ddgChecked, setDdgChecked] = React.useState(false);
  const [wikipediaChecked, setWikipediaChecked] = React.useState(false);

  return (
    <View style={OnboardingStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={OnboardingStyles.header}>
        <Icon name={"grid"} style={OnboardingStyles.headerImage} />
        <Text style={OnboardingStyles.headerTitle}>Customize your experience</Text>
        <Text style={OnboardingStyles.description}>Add your favorite sites and news sources to the start-page.</Text>
      </View>
      <View style={{ marginTop: '15%' }}>
        <View style={OnboardingStyles.grid}>
          <GridElement isVisible={googleChecked} onClick={() => setGoogleChecked(!googleChecked)} icon={require('../../assets/startpage/google.png')} size={96}/>
          <GridElement isVisible={ddgChecked} onClick={() => setDdgChecked(!ddgChecked)} icon={require('../../assets/startpage/duckduckgo.png')}/>
          <GridElement isVisible={wikipediaChecked} onClick={() => setWikipediaChecked(!wikipediaChecked)} icon={require('../../assets/startpage/wikipedia.png')} size={96}/>
        </View>
        <View style={OnboardingStyles.grid}>
          <GridElement isVisible={googleChecked} onClick={() => setGoogleChecked(!googleChecked)} icon={'Google'} size={96}/>
          <GridElement isVisible={ddgChecked} onClick={() => setDdgChecked(!ddgChecked)} icon={'DDG'}/>
          <GridElement isVisible={wikipediaChecked} onClick={() => setWikipediaChecked(!wikipediaChecked)} icon={'Wikipedia'} size={96}/>
        </View>
      </View>
      <View style={OnboardingStyles.footer}>
        <CtaButton onClick={() => navigation.navigate('StartPage')} buttonText={'Finish'} />
        <View style={OnboardingStyles.dotRow}>
          <View style={OnboardingStyles.dot} />
          <View style={OnboardingStyles.dot} />
          <View style={OnboardingStyles.dotActive} />
        </View>
      </View>
    </View>
  )
}