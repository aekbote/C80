import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView,
  Linking,
  FlatList,
} from 'react-native';

import axios from 'axios';


  export default class DailyPicScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aircrafts: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(
        'https://ll.thespacedevs.com/2.0.0/config/spacecraft/'
      )
      .then((response) => {
        this.setState({ aircrafts: response.data.results });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  renderItem = ({ item }) => {
        return (
            <View style={styles.contentCard}>
                <Image source={{ uri: item.agency.image_url }} style={styles.itemImage}></Image>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>{item.name}</Text>
                    <Text style={{ color: '#696969', fontSize: 16 }}>{item.agency.name}</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#A9A9A9', fontSize: 13 }}>{item.agency.description}</Text>
                    </View>
                </View>
            </View>
        )
    }


    keyExtractor = (item, index) => index.toString();

    render() {
        return (
          <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                    <View styles={{flex:0.25}}>
                      <Text>Space Crafts!</Text> 
                    </View>
                    <View styles={{flex:0.75}}>  
                          <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.aircrafts}
                            renderItem={this.renderItem}
                           />
                    </View>
                </View>
             </ImageBackground>
          </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    contentCard: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        elevation: 10,
        backgroundColor: 'white'
    },
    itemImage: {
        width: "100%",
        height: 200,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
    }
})
