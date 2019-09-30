import React, { Component } from "react";
import { StyleSheet } from 'react-native'
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
            <Button style={{ backgroundColor: "#34A34F" }}>
              <IconNB name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: "#3B5998" }}>
              <IconNB name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: "#DD5144" }}>
              <IconNB name="ios-mail" />
            </Button>
          </Fab>
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});


export default HotelScreen;

