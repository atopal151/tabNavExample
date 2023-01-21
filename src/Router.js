import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ContactsScreen from './screens/ContactsScreen';
import ContactsDetail from './screens/ContactsDetail';
import SettingsModal from './screens/component/SettingsModal';
import DrawerMenu from './screens/component/DrawerMenu';



const ContactStack = createNativeStackNavigator();

function ContactStackScreen() {
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen name="Constant" component={ContactsScreen} />
      <ContactStack.Screen name="ConDetail" component={ContactsDetail} 
        />
    </ContactStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ConDetail" component={ContactsDetail} 
     />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="ConDetail" component={ContactsDetail} 
      />
    </SettingsStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function TabNavStack() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel:false, tabBarStyle:{backgroundColor:'#f2f2f2'}}}>
          <Tab.Screen name="HomeStack" component={HomeStackScreen} 
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/GameCentre.png')}
                style={[styles.icon]}
              />
            ),
            tabBarLabel: 'Home Page', headerShown: false
          }} />
          <Tab.Screen name="ConstantStack" component={ContactStackScreen} options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/Contacts.png')}
                style={[styles.icon]}
              />
            ), tabBarLabel: 'Constant Page', headerShown: false
          }} />
          <Tab.Screen name="SettingsStack" component={SettingsStackScreen} options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/ColorSync.png')}
                style={[styles.icon]}
              />
            ), tabBarLabel: 'Setting Page', headerShown: false,
          }} />
        </Tab.Navigator>
  );
}


const Drawer=createDrawerNavigator();



export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator 
        drawerContent={(props)=> <DrawerMenu{...this.props}/>}
        screenOptions={{
          drawerStyle:{width:100}
        }}>
            <Drawer.Screen name='TabNav' component={TabNavStack} options={{headerShown:false}}/>
            <Drawer.Screen name='ConDetail' component={ContactsDetail} options={{headerShown:false}}/>
        
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}



const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40
  }
});


