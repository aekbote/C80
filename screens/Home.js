import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
     <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                    <Image source={require("../assets/main-icon.png")} style={{width: 150, height: 100, marginTop: 60}}></Image>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress = {()=>{this.props.navigation.navigate("SpaceCraft")}}>
                        <Text style={styles.routeText}>SpaceCraft</Text>
                      
                        
                        <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress = {()=>{this.props.navigation.navigate("StarMap")}}>
                        <Text style={styles.routeText}>StarMap</Text>
                    
                  
                        <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={styles.routeCard} onPress = {()=>{this.props.navigation.navigate("DailyPic")}}>
                        <Text style={styles.routeText}>DailyPic</Text>
                       
                      
                        <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.20,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#CC0066',
    marginTop: 75,
    paddingLeft: 30,
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
 
  iconImage: {
    position: 'absolute',
    height: 80,
    width: 80,
    resizeMode: 'contain',
    right: 10,
    top: -0,
  },
});
