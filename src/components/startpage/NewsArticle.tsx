import * as React from 'react';
import { StyleSheet, View, Image } from "react-native";
import { Text } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

export function NewsArticle({ article }: { article: any }) {
  var findStr = "-";
  var searchString = article.title;
  var endOf = -1;
  endOf = searchString.lastIndexOf(findStr) > 0 ? searchString.lastIndexOf(findStr) + findStr.length : endOf;
  const title = article.title.substring(endOf + -2, 0)

  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={() => alert(article.url)} 
      style={styles.container}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: article.urlToImage }} style={styles.image}/>
          <View style={{ width: '75%', }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{article.source.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    flexWrap: 'wrap',
    marginLeft: 17
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  author: {
    fontSize: 11,
    lineHeight: 20
  },
  image: {
    height: 64,
    width: 64,
    borderRadius: 8,
    margin: 4,
    marginRight: 12
  }
})