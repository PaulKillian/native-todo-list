/**
 * Samplee React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import AddTodos from './src/screens/addTodos';
import DisplayTodos from './src/screens/displayTodos';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      <AddTodos />
      <DisplayTodos />
    </SafeAreaProvider>
  );
};

export default App;
