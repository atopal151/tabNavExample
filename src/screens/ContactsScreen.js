import React, { Component } from 'react'
import { Button, View, StyleSheet } from 'react-native'

export default class ContactsScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button title='Go To Detail Screen' 
        onPress={() => (navigation.navigate('ConDetail'))} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});