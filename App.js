import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class HelloWorldApp extends Component {
  
  renderCells() {
    const array = ['one', 'two', 'three'];
    
    return array.map((item) => {
      return (
        <View style={styles.cellItem}>
          <Text> { item} </Text>
          <Text> X </Text>
        </View>
      )
    })
  };
  
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Title */}
        <Text style={styles.title}> My To-Do App</Text>
        
        {/* Body */}
        <View style={styles.body}>
          {/* TextInput */}
          <View>
            <TextInput 
              style={styles.textInput} 
              placeholder="Set To-Do"
            />
          </View>
          
          {/* Cell Items */}
          {this.renderCells()}
          
        </View>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#bd2828',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    marginTop: 20,
  },
  body: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    width: 150,
    minHeight: 100,
  },
  textInput: {
   textAlign: 'center',
   borderBottomWidth : 1,
   borderColor: 'grey',
  },
  cellItem: {
    // borderWidth: 1,
    height: 25,
    marginVertical: 10,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}
