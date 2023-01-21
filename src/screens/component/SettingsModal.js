import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class SettingsModal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> Settings Modal </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle:{
        color:'#f1f1f1',
        fontSize:32
    }
  });