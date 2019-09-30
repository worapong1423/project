import React, { Component } from "react";
import {Container,Header,Title,Button,Icon,Tabs,Tab,Right,Left,Body} from "native-base";
import TabOrderList from './TabOrderList';
import TabOrderRate from './TabOrderRate';
import TabOrderDetail from './TabOrderDetail';
import EditRate from './EditRate';

export default class Order extends Component {

  static navigationOptions = {
    title: 'โรงแรม',
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
