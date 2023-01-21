import React, { Component } from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native'

export default class DrawerMenu extends Component {
  navigateToScreen=(route)=>()=> {
    this.props.navigation.navigate(route)
  };


  render() {
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity 
          style={styles.menuItem} >
              <Image
            source={require('../../../assets/Network.png')}
            style={[styles.iconStyle]}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
          <Image
            source={require('../../../assets/Mail.png')}
            style={[styles.iconStyle]}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}
          onPress={this.navigateToScreen('ConDetail')}>
          <Image
            source={require('../../../assets/Safari.png')}
            style={[styles.iconStyle]}
          />
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footer}>
        <Text style={styles.footerText}> Drawer Menu </Text>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f1f1f1',
    paddingVertical:40
  },
  footer:{
    position:'absolute',
    left:0,
    bottom:0,
    width:'100%',
    paddingVertical:10
  },
  footerText:{
    textAlign:'center',
    color:'#999',
    fontSize:11
  },
  menuItem:{
    padding:10,
    margin:10,
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
    
  },
  menuText:{
    fontSize:13,
    color:'#333',
    margin:5

  },
  iconStyle:{
    height:50,
    margin:5,
    width:50,
  }
});