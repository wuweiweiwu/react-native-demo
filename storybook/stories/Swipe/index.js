import React from 'react';
import SwipeCards from 'react-native-swipe-cards';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
	card: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
		height: 300
	},
	noMoreCardsText: {
		fontSize: 22
	}
});

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View
				style={[styles.card, { backgroundColor: this.props.backgroundColor }]}
			>
				<Text>{this.props.text}</Text>
			</View>
		);
	}
}

const MySwipeCard = props => (
	<SwipeCards
		style={{ flex: 1 }}
		cards={[
			{ text: 'Tomato', backgroundColor: 'red' },
			{ text: 'Aubergine', backgroundColor: 'purple' },
			{ text: 'Courgette', backgroundColor: 'green' },
			{ text: 'Blueberry', backgroundColor: 'blue' },
			{ text: 'Umm...', backgroundColor: 'cyan' },
			{ text: 'orange', backgroundColor: 'orange' }
		]}
		renderCard={cardData => <Card {...cardData} />}
	/>
);

export { MySwipeCard as default };
