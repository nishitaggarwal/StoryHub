import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class WriteStoryScreen extends React.Component {
    render(){
      return (
        
        <View style={styles.container}>
        <TextInput style={styles.input1Box} placeholder="Story Title" />
        <TextInput
          style={styles.input1Box}
          multiline={true}
          placeholder="Name of the Author"
        />
        <TextInput
          style={styles.inputBox}
          multiline={true}
          placeholder="Type up your story"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
  },
  input1Box: {
    backgroundColor: 'yellow',
    marginTop: 25,
    height: 30,
    borderWidth: 1.5,
    borderRightWidth: 1,
    fontSize: 20,
  },

  inputBox: {
    backgroundColor: 'yellow',
    marginTop: 25,
    width: 325,
    height: 140,
    borderWidth: 1.5,
    borderRightWidth: 1,
    fontSize: 20,
  },
});