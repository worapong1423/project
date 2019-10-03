import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container,Header,Title,Content,Button,Icon,List,ListItem,Text,Left,Right,Body,View,Fab,IconNB} from "native-base";

const datas = [
  "โรงเเรม อินเตอร์เนชั่นแนลเฮาล์",
  "โรงเเรม วีพี",
  "โรงเเรม เอ็มพลัส",
  "โรงเเรม Zen Hostel",
];

class HotelScreen extends Component {

  static navigationOptions = {
    title: 'โรงแรม',
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container style={styles.container}>

        <Content>
          <List >
            {datas.map((data, i) => (
              <ListItem onPress={()=> this.props.navigation.navigate('Order')} >
                <Left>
                  <Text>{data}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            ))}
          </List>
          <Button onPress={this._logout} title="Logout">
            <Text>logout</Text>
          </Button>
        </Content>

        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight" onPress={() => this.props.navigation.navigate('addHotel')}

          >
            <IconNB name="md-add" />
          </Fab>
        </View>

      </Container>
    );
  }
   _logout = async() =>{
     await AsyncStorage.clear();
     this.props.navigation.navigate('Auth');
   }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});


export default HotelScreen;

