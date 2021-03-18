import React, {Component} from 'react';
import {Alert, TouchableHighlight, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';
// import {ListItem} from 'react-native-elements';
import {db} from '../config';

let addTodo = todo => {
  db.ref('/todos').push({
    subject: todo,
  });
};

export default class ArddTodos extends Component {
  state = {
    todo: '',
  };

  handleChange = event => {
    this.setState({
      todo: event.nativeEvent.text,
    });
  };

  handleSubmit = () => {
    addTodo(this.state.todo);
    Alert.alert('Successful');
  };
  render() {
    return (
      <View>
        <Text>Todo List</Text>
        <Input onChange={this.handleChange} placeholder="BASIC INPUT" />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    backgroundColor: 'black',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    // alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
