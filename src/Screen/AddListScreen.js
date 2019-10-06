import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export class AddListScreen extends React.Component {
    static navigationOptions = ({navigation})=> {
        let headerTitle = 'เพิ่มออเดอร์';
        return {headerTitle}
        };
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
export default AddListScreen;