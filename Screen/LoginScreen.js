import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input,Button,Text } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';


const userInfo ={username:'admin',password:'12345'}

export default class LoginScreen extends Component {

    static navigationOptions = {
      Header:null
    };

    constructor(props) {
      super(props);
      this.state = {
        username:'',
        password:''
      }
    }

  render() {
    return (
      <Container>

        <Content>
        <Item regular>
            <Input placeholder='ชื่อผู้ใช้' 
             onChangeText={(username)=>this.setState({username})} 
             value={this.state.username}
             autoCapitalize="none"
             />
          </Item>
          <Item regular>
            <Input placeholder='รหัสผ่าน'
            onChangeText={(password)=>this.setState({password})} 
            value={this.state.password}
             />
          </Item>
          {/*oldbutton 
          <Button block onPress={()=> this.props.navigation.replace('Home')}>*/}
          <Button block onPress={this._login}>
            <Text>เข้าสู่ระบบ</Text></Button>
        </Content>
      </Container>
    );
  }
  _login = async() => {
    if(userInfo.username === this.state.username && userInfo.password === this.state.password){
      //alert('logged in');
      await AsyncStorage.setItem('isLoggedIn','1');
      this.props.navigation.navigate('Home')
      //this.props.navigation.navigate('Home')
  }else {
    alert('Username or Password is incorret.');
  }
 }
}