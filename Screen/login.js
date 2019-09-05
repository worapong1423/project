
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input,Button,Text } from 'native-base';
export default class FormExample extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Content>
    
        <Item regular>
            <Input placeholder='ชื่อผู้ใช้' />
          </Item>
          <Item regular>
            <Input placeholder='รหัสผ่าน' />
          </Item>
          <Button  block  primary>
            <Text>เข้าสู่ระบบ</Text>
          
          </Button>
        </Content>
      </Container>
    );
  }
}