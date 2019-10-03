import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export class ProfileScreen extends React.Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
export default ProfileScreen;