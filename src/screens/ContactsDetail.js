import React, { Component, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ContactsDetail extends Component {
  
   static navigationOptions = ({navigation}) => {
    const user=navigation.getParam('user');
    return{
      headerTitle:'dfsd'
    }
  };
  

  render() {
    const { navigation, route } = this.props;
    const { user } = route.params;
    return (
      <View style={styles.container}>
        <Text> Contact Detail Screen</Text>
        <Text >Title Text : {[user.name.first, " ", user.name.last]}</Text>
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