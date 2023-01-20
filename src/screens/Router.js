import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ContactsScreen from './ContactsScreen';
import ContactsDetail from './ContactsDetail';


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ConDetail" component={ContactsDetail} />
      <HomeStack.Screen name="Constant" component={ContactsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="ConDetail" component={ContactsDetail} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/favicon.png')}
                style={[styles.icon]}
              />
            ),
            tabBarLabel: 'Home Page', headerShown:false
          }} />
      
          <Tab.Screen name="SettingsStack" component={SettingsStackScreen} options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/favicon.png')}
                style={[styles.icon]}
              />
            ), tabBarLabel: 'Setting Page', headerShown:false
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}



const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  }
});


