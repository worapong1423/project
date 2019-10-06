import React, { Component } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
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
  IconNB
} from "native-base";
import { createDrawerNavigator } from "react-navigation-drawer";
const datas = [
  "โรงเเรม อินเตอร์เนชั่นแนลเฮาล์",
  "โรงเเรม วีพี",
  "โรงเเรม เอ็มพลัส",
  "โรงเเรม Zen Hostel"
];

class HotelScreen extends Component {
      static navigationOptions = {
         headerTitle: 'โรงแรม',
         headerLeft: (
           <Button  onPress={() =>this.props.navigation.dispatch(DrawerActions.openDrawer())}>
               <Text>Drawer</Text>
           </Button>
         ),

         /*headerLeft: (
         <Image style={{ width: 28, height: 28, marginLeft: 5 }} source={require('../Image/drawer.png')} onPress={() =>this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
         ),*/
         /*drawerLabel: 'โรงแรม',
         drawerIcon: ({ tintColor }) => (
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
          <List>
            {datas.map((data, i) => (
              <ListItem onPress={() => this.props.navigation.navigate("Order")}>
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
          <Button
            title="open drawer"
            onPress={() => this.props.navigation.toggleDrawer()}
          ></Button>
          <Button
            title="Signature"
            onPress={() => this.props.navigation.navigate('Signature')}
          ><Text>Signature</Text></Button>
        </Content>

        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate("AddHotelScreen")}
          >
            <IconNB name="md-add" />
          </Fab>
        </View>
      </Container>
    );
  }
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  icon: {
    width: 24,
    height: 24
  }
});

export default HotelScreen;
