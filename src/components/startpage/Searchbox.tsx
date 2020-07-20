import * as React from 'react';
import { StyleSheet, View, Image, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

export function Searchbox({ engine }: { engine: string }) {
  return (
    <View style={styles.container}>
      <Icon name={"search"} style={styles.iconImage}/>
      <TextInput 
        style={styles.input}
        placeholder={`Search ${engine} or type URL`}
        placeholderTextColor={'#AAAAAA'}
        clearTextOnFocus={true} >
      
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderColor: '#F1F3F4',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#F1F3F4',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 2,
    color: '#000',
    fontFamily: '-apple-system, "Inter", sans-serif',
    flexDirection: 'row',
    width: '100%'
  },
  input: {
    fontSize: 14,
    padding: 10,
    paddingVertical: 2,
    marginRight: 50
  },
  iconImage: {
    color: '#AAAAAA',
    paddingHorizontal: 0,
    marginHorizontal: 0,
    fontSize: 16
  },
  spacer: {
    fontSize: 7,
    color: '#f1f3f4'
  }
})