import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {createAppContainer} from 'react-navigation';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  View,
  Fab,
  IconNB,
  Card,
  CardItem,
  Item,
  Input,

} from "native-base";
import { createStackNavigator } from 'react-navigation-stack';

const data = [
  {
    nameOrder: "HT0001",
    nameHotel: "สถานะ : เสร็จสิ้น",
    date : "01/02/2562",
  },
  {
    list: "ผ้าปูที่นอน 3.5 ฟุต",
    rate: "10",
  },
  {
    list: "ผ้าปูที่นอน 5-6 ฟุต",
    rate: "12",
  },
  {
    list: "ปลอกหมอน",
    rate: "5",
  },
  {
    list: "ปลอกผ้านวม เล็ก",
    rate: "25",
  },
];

export class StatusTwosScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
        return {
          headerTitle : 'ดำเนิดการซัก',
        };
      };

    render() {
        return (
        <Container>
            <Content>
                <Card>
                    <CardItem header>
                        <Right>
                            <Text>{data.date}</Text>
                        </Right>
                        <Left>
                            <Text>{data.nameOrder}</Text>
                            <Text>{data.nameHotel}</Text>
                        </Left>
                    </CardItem>
                    <Body>
                        <List>
                          {data.map((data, i) => (
                          <ListItem>
                            <Body>
                              <Text>{data.list} จำนวน  {data.rate}</Text>
                            </Body>
                          </ListItem>
                          ))}
                        </List>
                    </Body>
                    <Button block onPress={() => this.props.navigation.navigate('Home')}>
                        <Text>เสร็จสิ้น</Text>
                    </Button>
                </Card>
            </Content>
        </Container>
        )
    }
}
export default StatusTwosScreen;