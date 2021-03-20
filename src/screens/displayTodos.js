import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {db} from '../config';
import {Button, ListItem} from 'react-native-elements';
import {buttonContainer} from '../styles';

let todosRef = db.ref('/todos');

export default class List extends Component {
  state = {
    todos: [],
    id: 0,
  };

  componentDidMount() {
    todosRef.on('value', snapshot => {
      const todoObj = snapshot.val();
      this.setState({todos: todoObj});
    });
  }

  handleClickDelete = id => {
    console.log(id);
    todosRef = db.ref('/todos/' + id);
    todosRef.remove();
  };

  render() {
    console.log(this.state.todos);
    if (this.state.todos !== null) {
      return (
        <View style={styles.container}>
          {this.state.todos.map((todo, index) => {
            return (
              <View>
                <ListItem>
                  <Text>{todo.todo}</Text>
                  <View style={buttonContainer}>
                    <Button
                      key={index}
                      title="Update"
                      onPress={this.handleClickDelete}
                    />
                    <Button
                      key={index}
                      title="Delete"
                      onPress={id => this.handleClickDelete.bind(this)(index)}
                    />
                  </View>
                </ListItem>
              </View>
            );
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
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  todoContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});
