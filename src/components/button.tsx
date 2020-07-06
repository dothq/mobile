import * as React from 'react';
import { StyleSheet } from "react-native";
import { Text } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";

export function CtaButton({ onClick, buttonText }: { onClick: any, buttonText: string }) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={'#fff'}
      style={ButtonStyles.cta}
      onPress={onClick}>
        <Text style={{ color: '#fff' }}>{buttonText}</Text>
    </TouchableHighlight>
  )
}

export function NoCtaButton({ onClick, buttonText }: { onClick: any, buttonText: string }) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={'#fff'}
      onPress={onClick}
      style={ButtonStyles.notCta}>
        <Text style={{ color: 'grey' }}>{buttonText}</Text>
    </TouchableHighlight>
  )
}

const ButtonStyles = StyleSheet.create({
  cta: {
    paddingVertical: 13,
    paddingHorizontal: 40,
    borderRadius: 7,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    margin: 10
  },
  notCta: {
    paddingVertical: 13,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    alignItems: 'center',
    margin: 10
  }
})