/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const boltimage = require('./images/bolt.png');
const upimage = require('./images/up.png');
const boltposter = require('./images/bolt-poster.png');
const upposter = require('./images/up-poster.png');

class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity style={s.boltup} onPress={this.props.islem}>
        <Image
          source={this.props.img}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />
        <View
          style={{
            backgroundColor: '#4B0082',
            width: 100,
            borderRadius: 6,
            marginTop: 4,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  state = {
    boltup: true,
  };
  render() {
    return (
      <View style={s.container}>
        <Text style={s.title}>Bolt & Up Posters</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <MyButton
            img={boltimage}
            title="Bolt"
            islem={() => this.setState({boltup: true})}
          />
          <MyButton
            img={upimage}
            title="Up"
            islem={() => this.setState({boltup: false})}
          />
        </View>

        <View style={{flex: 1, padding: 10}}>
          <Image
            source={this.state.boltup ? boltposter : upposter}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 10,
              borderWidth: 10,
              borderColor: '#4B0082',
            }}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDA0DD',
  },
  title: {
    fontSize: 40,
    color: '#4B0082',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 90,
  },
  boltup: {
    width: 130,
    height: 150,
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#4B0082',
    alignItems: 'center',
  },
});
