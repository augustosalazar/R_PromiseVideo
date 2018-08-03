import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableWithoutFeedback,Alert} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      feed:'the feed',
    }
  }

  function1 = () => {
    return new Promise(function(resolve,reject){


      setTimeout(function() {

      var didSucceed = Math.random() >= 0.5;
      if (didSucceed) {
        resolve();
      } else {
        reject();
      }

    }, 2000);

    });
  }

  _onPressButton = () => {
    this.setState({feed:'processing'});
    this.function1().then( (value) => {this.setState({feed:'ok'})} ).catch(err => {this.setState({feed:'nok'})});
  }



  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <View style={styles.myButton}>
            <Text style={styles.myButtonText}> press to start </Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.feedText}> {this.state.feed} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop:15,
    },
    myButton:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
      borderRadius:10,
      marginHorizontal:30,
      padding:10,
    },
    myButtonText:{
      color:'white',
      fontSize:20,
    },
    feedText:{
      fontSize:20,
      margin:20,
      textAlign:'center',
    }
});
