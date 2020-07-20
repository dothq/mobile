import * as React from 'react';
import { Text, View, Image, StatusBar, Alert } from 'react-native';
import { StartpageStyles } from './components/startpage/styles';
import axios from 'axios';
import { GridElement } from './components/startpage/GridElement';
import { Searchbox } from './components/startpage/Searchbox';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';
import { NewsArticle } from './components/startpage/NewsArticle';
import Icon from 'react-native-vector-icons/Feather';
import { TabCountSingleNumber, TabCountDualNumber } from './components/TabCount';

export default function StartPage({ navigation }: { navigation: any }) {
  const [results, setResults] = React.useState({});
  const [showNews, setShowNews] = React.useState(true)

  React.useState(() => {
    const url = "https://dothq.co/api/browser/news"

    const newsApiInstance = axios.create({
      baseURL: url,
      headers: {'X-Dot-NTP': true}
    });

    newsApiInstance.get(url).then(res => setResults(res.data))
  })

  // Reset Navigator
  navigation.reset({
    index: 0,
    routes: []
  })

  // Load Webpage
  const performPageLoad = () => {
    navigation.navigate('PageView', { browserPage: 'https://dothq.co' })
  }
  return (
    <>
    <ScrollView
      showsHorizontalScrollIndicator={false} 
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: '#ffffff' }}>
    <View style={StartpageStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={StartpageStyles.header}>
        <Image source={require('../assets/onboarding/logo.png')} style={StartpageStyles.headerImage}/>
      </View>
      <Searchbox engine={'Google'} />
      <View style={StartpageStyles.grid}>
        <GridElement elementName={'Google'} icon={require('../assets/startpage/google.png')} onClick={null} size={96}/>
        <GridElement elementName={'DuckDuckGo'} icon={require('../assets/startpage/duckduckgo.png')} onClick={null}/>
        <GridElement elementName={'Wikipedia'} icon={require('../assets/startpage/wikipedia.png')} onClick={null} size={96}/>
      </View>
      <View style={StartpageStyles.newsHeader}>
        <Text style={StartpageStyles.newsHeaderText}>NEWS</Text>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={'#fff'}
          onPress={() => setShowNews(!showNews)}
          style={StartpageStyles.newsHeaderHide}>
            <Text style={StartpageStyles.newsHeaderHideText}>{showNews ? 'Hide' : 'Show'}</Text>
          </TouchableHighlight>
      </View>
      <View style={{ paddingBottom: '22%'}}>
        {(results as any).articles && (
          <>
            {(results as any).articles && showNews && (results as any).articles.map((articles: any) => (
              <NewsArticle article={articles}/>
            ))}
          </>
        )}
      </View>
    </View>
    </ScrollView>
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
          onPress={() => performPageLoad()} >
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

// <line x1="9" y1="9" x2="15" y2="15" />
// <line x1="15" y1="9" x2="9" y2="15" />
// <Icon name={"square"} style={StartpageStyles.footerIcon}/>