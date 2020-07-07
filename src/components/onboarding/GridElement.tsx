import * as React from 'react';
import { StyleSheet, View, Image } from "react-native";
import { Text } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Feather';

export function GridElement({ isVisible, onClick, icon, size }: { isVisible: boolean; onClick: any; icon: any; size?: number }) {
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.2} >
      <View style={styles.gridElement}>
        {isVisible && <View style={styles.gridCircle}>
          <Icon name="check" style={styles.gridCircleCheckmark}/>
        </View>}
        <View style={isVisible ? styles.gridContentSpacer : { display: 'none' }} />
          <Image source={icon} style={{ width: size ? size : 56, height: size ? size : 56}} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
  gridContentSpacer: {
    marginBottom: -20,
  },
  gridCircle: {
    width: 20,
    height: 20,
    top: -15,
    left: '40%',
    position: 'relative',
    backgroundColor: '#007AFF',
    borderRadius: 100,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  gridCircleCheckmark: {
    color: '#fff',
    fontSize: 18
  }
})