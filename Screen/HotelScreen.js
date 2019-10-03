import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container,Header,Title,Content,Button,Icon,List,ListItem,Text,Left,Right,Body,View,Fab,IconNB} from "native-base";
import { createDrawerNavigator } from 'react-navigation-drawer';
const datas = [
  "โรงเเรม อินเตอร์เนชั่นแนลเฮาล์",
  "โรงเเรม วีพี",
  "โรงเเรม เอ็มพลัส",
  "โรงเเรม Zen Hostel",
];

class HotelScreen extends Component {
   static navigationOptions = {
      drawerLabel: 'Home',
      /*drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./chats-icon.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),*/
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
          <Button title="open drawer" onPress={() =>this.props.navigation.toggleDrawer()} >
                    </Button>
        </Content>

        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight" onPress={()=> this.props.navigation.navigate('addHotel')}
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
  icon: {
      width: 24,
      height: 24,
    },
});


export default HotelScreen;

