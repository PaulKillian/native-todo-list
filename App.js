/**
 * Samplee React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import CaptureTime from './src/screens/time'
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      <CaptureTime/>
    </SafeAreaProvider>
  );
};

export default App;
