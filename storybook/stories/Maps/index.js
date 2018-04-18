// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import MapView from 'react-native-maps';
//
// // AIzaSyCkbo9MslRBIW13E7FMQ2qt4WWynzPbX78
//
// const styles = StyleSheet.create({
// 	container: {
// 		...StyleSheet.absoluteFillObject,
// 		height: 400,
// 		width: 400,
// 		justifyContent: 'flex-end',
// 		alignItems: 'center'
// 	},
// 	map: {
// 		...StyleSheet.absoluteFillObject
// 	}
// });
//
// class MyMap extends Component {
// 	render() {
// 		const { region } = this.props;
//
// 		return (
// 			<View style={styles.container}>
// 				<MapView
// 					style={styles.map}
// 					region={{
// 						latitude: 37.78825,
// 						longitude: -122.4324,
// 						latitudeDelta: 0.015,
// 						longitudeDelta: 0.0121
// 					}}
// 				/>
// 			</View>
// 		);
// 	}
// }
//

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, MapView } from 'expo';

class MyMap extends Component {
	state = {
		mapRegion: {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
		}
	};

	_handleMapRegionChange = mapRegion => {
		this.setState({ mapRegion });
	};

	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={{ alignSelf: 'stretch', height: 200 }}
					region={this.state.mapRegion}
					onRegionChange={this._handleMapRegionChange}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1'
	}
});

export { MyMap as default };
