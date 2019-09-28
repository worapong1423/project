import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input,Button,Text } from 'native-base';

export default class FormExample extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <Container>

        <Content>
        <Item regular>
            <Input placeholder='ชื่อผู้ใช้' />
          </Item>
          <Item regular>
            <Input placeholder='รหัสผ่าน' />
          </Item>
          <Button block onPress={()=> this.props.navigation.replace('Home')}>
            <Text>เข้าสู่ระบบ</Text></Button>
        </Content>
      </Container>
    );
  }
}