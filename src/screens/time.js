/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

const CaptureTime = () => {
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');
  const [clockinButtonStatus, setClockinButtonStatus] = useState(false);
  const [clockoutButtonStatus, setClockoutButtonStatus] = useState(true);

  const capture = id => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();

    id === 'in'
      ? (setTimeIn(
          `${
            month +
            '/' +
            date +
            '/' +
            year +
            ' ' +
            hours +
            ':' +
            min +
            ':' +
            sec
          }`,
        ),
        setClockoutButtonStatus(false),
        setClockinButtonStatus(true))
      : (setTimeOut(
          `${
            month +
            '/' +
            date +
            '/' +
            year +
            ' ' +
            hours +
            ':' +
            min +
            ':' +
            sec
          }`,
        ),
        setClockoutButtonStatus(true),
        setClockinButtonStatus(false));
  };

  const clockIn = id => {
    capture(id);
  };

  const clockOut = id => {
    capture(id);
  };

  return (
    <>
      <View style={styles.content}>
        <Button
          disabled={clockinButtonStatus}
          key={'in'}
          title="Clock In"
          onPress={id => clockIn('in')}
        />
        <Text>{timeIn}</Text>
        <Button
          buttonStyle={{
            backgroundColor: 'green',
          }}
          disabled={clockoutButtonStatus}
          key={'out'}
          title="Clock Out"
          onPress={id => clockOut('out')}
        />
        <Text>{timeOut}</Text>
      </View>
    </>
  );
};

var styles = StyleSheet.create({
  content: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CaptureTime;
