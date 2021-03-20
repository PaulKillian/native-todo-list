import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from '../config';
import { Button, ListItem } from 'react-native-elements';
import { buttonContainer } from '../styles';
import styled from 'styled-components/native';

const CaptureTime = () => {
	const [time, setTime] = useState('')
	const [id, setId] = useState(0)

	const capture = () => {
		const date = new Date().getDate(); //Current Date
		const month = new Date().getMonth() + 1; //Current Month
		const year = new Date().getFullYear(); //Current Year
		const hours = new Date().getHours(); //Current Hours
		const min = new Date().getMinutes(); //Current Minutes
		const sec = new Date().getSeconds(); //Current Seconds
		setTime(
			`${date + '/' + month + '/' + year
				+ ' ' + hours + ':' + min + ':' + sec}`
		);
	}

	const ClockIn = styled.View`
		display: flex;
		justify-content: center;
	`;

	const ClockInButton = styled.Button`
		width: 50%;
	`;

	const ClockInText = styled.Text`
		text-align: center
	`;

	return (
		<ClockIn>
			<ClockInButton title="Clock In" onPress={capture}></ClockInButton>
			<ClockInText>{time}</ClockInText>
		</ClockIn>
	)
}

export default CaptureTime;
