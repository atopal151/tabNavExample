import React, { Component } from 'react'
import {  View, StyleSheet } from 'react-native'
import ContactList from './component/ContactList';

export default class ContactsScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      
        <ContactList navigation={this.props.navigation}/>
      
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