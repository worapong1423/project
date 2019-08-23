
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input,Button,Text } from 'native-base';
export default class FormExample extends Component {
  render() {
    let pic = {
        uri: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjQm4y44ZPkAhVbinAKHX2zDWsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.lg.com%2Fth%2Fwashing-machine%2Flg-T2512VSAM&psig=AOvVaw3L_Y_5VP1lIlGOJoFH_6No&ust=1566469947807285'
    };
    return (
      <Container>
        <Header />
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