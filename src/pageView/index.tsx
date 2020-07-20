import * as React from 'react';
import { Text, View, Image, StatusBar, TouchableHighlight } from 'react-native';
import { OnboardingStyles } from '../components/onboarding/styles';
import { WebView } from 'react-native-webview';
import { StartpageStyles } from '../components/startpage/styles';
import Icon from 'react-native-vector-icons/Feather';
import { TabCountSingleNumber } from '../components/TabCount';

export default function PageView({ route, navigation }: { route: any; navigation: any }) {
  const { browserPage } = route.params;
  return (
    <>
      <WebView
        source={{ uri: browserPage }}
        javaScriptEnabled={true}
        domStorageEnabled={true} />
      <View style={{ marginTop: ('9%') }} />
      <View style={StartpageStyles.footer}>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={'#fff'}
          onPress={() => null} >
          <Icon name={"arrow-left"} style={StartpageStyles.footerIcon}/>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={'#fff'}
          onPress={() => null} >
          <Icon name={"arrow-right"} style={StartpageStyles.footerIcon}/>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={'#fff'}
          onPress={() => null} >
          <Icon name={"search"} style={StartpageStyles.footerIconCenter}/>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={'#fff'}
          onPress={() => null} >
          <TabCountSingleNumber style={StartpageStyles.footerIcon} number={1}/>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={'#fff'}
          onPress={() => null} >
          <Icon name={"more-horizontal"} style={StartpageStyles.footerIcon}/>
        </TouchableHighlight>
      </View>
    </>
  )
}