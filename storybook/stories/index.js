import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import Card from './Card';
import Maps from './Maps';
import Progress from './Progress';
import Swipe from './Swipe';

storiesOf('Welcome', module).add('to Storybook', () => (
	<Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('with text', () => (
		<Button onPress={action('clicked-text')}>
			<Text>Hello Button hi</Text>
		</Button>
	))
	.add('with some emoji', () => (
		<Button onPress={action('clicked-emoji')}>
			<Text>😀 😎 👍 💯</Text>
		</Button>
	));

storiesOf('Maps', module)
	// .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('MapView', Maps);

storiesOf('UI', module)
	// .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.add('Progress', Progress)
	.add('Card with divider', Card)
	.add('Swipe', Swipe);
