import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import {Container,Header,Title,Button,Icon,Tabs,Tab,Right,Left,Body} from "native-base";
import TabOrderList from './TabOrderList';
import TabOrderRate from './TabOrderRate';
import TabOrderDetail from './TabOrderDetail';
import StatusOneScreen from './StatusOneScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';

export default class Order extends Component {
   static navigationOptions = {
      drawerLabel: 'Order',

      /*drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./chats-icon.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),*/
    };


  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="รายการ">
            <TabOrderList />
          </Tab>
          <Tab heading="เรท">
            <TabOrderRate />
          </Tab>
          <Tab heading="ข้อมูล">
            <TabOrderDetail />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  icon: {
      width: 24,
      height: 24,
    },
});