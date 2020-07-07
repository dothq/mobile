import * as React from 'react';
import { StyleSheet, View, Image } from "react-native";
import { Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export function GridElement({ elementName, onClick, icon, size }: { elementName: string; onClick: any; icon: any; size?: number }) {
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.2} 
      style={styles.container} >
      <View style={styles.gridElement}>
          <Image source={icon} style={{ width: size ? size : 56, height: size ? size : 56 }}/>
      </View>
      <Text style={styles.gridElementName}>{elementName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridElement: {
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
	    width: 0,
	    height: 0,
    },
    shadowRadius: 10,
    borderWidth: 0.2,
    borderColor: '#fff',
    elevation: 3,
    width: 82,
    height: 82,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  gridElementName: {
    fontSize: 12,
    color: '#525252',
    fontFamily: '-apple-system, "Inter", sans-serif'
  }
})