import React, { Component } from 'react';
import { View } from 'react-native';
import { connect,MapStateToProps} from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Body, Button, Card, CardItem, Container, Content, Form, Item, Input, Spinner, Text } from 'native-base';




class LoginScreen extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser(email, password, this.props.navigation.navigate('App'));
  }

  renderError() {
      if (this.props.error) {
        return (
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>
          </View>
        );
      }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner color='white' />;
    }
    return (
      <Text>Login</Text>
    );
  }

  render() {
    return (
      <Container>

        <Content>
        <Card>
            <Form>
          <Item >
            <Input placeholder='ชื่อผู้ใช้' 
             onChangeText={this.onEmailChange.bind(this)} 
             value={this.props.email}
             autoCapitalize="none"
             />
          </Item>
          <Item last>
            <Input placeholder='รหัสผ่าน'
            secureTextEntry={true}
            onChangeText={this.onPasswordChange.bind(this)} 
            value={this.props.password}
             />
          </Item>
          </Form>
          {this.renderError()}
          <CardItem>
          <Body>
          <Button block onPress={this.onButtonPress.bind(this)}>
            {this.renderButton()}
            </Button>
            </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
 /* _login = async() => {
    if(userInfo.username === this.state.username && userInfo.password === this.state.password){
      //alert('logged in');
      await AsyncStorage.setItem('isLoggedIn','1');
      this.props.navigation.navigate('Home')
      //this.props.navigation.navigate('Home')
  }else {
    alert('Username or Password is incorret.');
  }
 }*/
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);

