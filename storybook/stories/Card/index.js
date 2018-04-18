import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

const users = [
	{
		name: 'brynn',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
	},
	{
		name: 'wei wei',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
	},
	{
		name: 'tony',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
	},
	{
		name: 'wjwjwjwjwj',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
	}
];

const MyCard = props => (
	<Card title="CARD WITH DIVIDER">
		{users.map((u, i) => {
			return (
				<View key={i}>
					<Image resizeMode="cover" source={{ uri: u.avatar }} />
					<Text>{u.name}</Text>
				</View>
			);
		})}
	</Card>
);

export { MyCard as default };
