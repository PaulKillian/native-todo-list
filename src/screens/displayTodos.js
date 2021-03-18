import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {db} from '../config';

let todosRef = db.ref('/todos');

export default class List extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    todosRef.on('value', snapshot => {
      const todoObj = snapshot.val();
      let todos = todoObj.subject;
      this.setState([{todos}]);
    });
  }

  render() {
    if (this.state.todos.lenght > 0) {
      return (
        <View style={styles.container}>
          {this.state.todos.map((todo, index) => {
            return <Text key={index}>{todo.todos}</Text>;
          })}
        </View>
      );
    } else {
      return (
        <View>
          <Text>No todos</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
