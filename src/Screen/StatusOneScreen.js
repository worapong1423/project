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
    date : "01/02/2562"
  }];

export class StatusOneScreen extends React.Component {
    static navigationOptions = ({navigation})=> {
        let headerTitle = 'รับออเดอร์';
        return {headerTitle}
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
                    <CardItem>
                      <Body>
                        <Item rounded>
                            <Input placeholder="จำนวนผ้าปูที่นอน 3.5 ฟุต " />
                        </Item>
                        <Item rounded>
                            <Input placeholder="ผจำนวน้าปูที่นอน 5-6 ฟุต" />
                        </Item>
                        <Item rounded>
                            <Input placeholder="จำนวนปลอกหมอน" />
                        </Item>
                        <Item rounded>
                            <Input placeholder="จำนวนปลอกผ้านวม เล็ก" />
                        </Item>
                      </Body>
                    </CardItem>
                    <Button block onPress={() => this.props.navigation.navigate('Signature')}>
                        <Text>ขั้นตอนต่อไป</Text>
                    </Button>

                </Card>
            </Content>
        </Container>
        )
    }
}
export default StatusOneScreen;