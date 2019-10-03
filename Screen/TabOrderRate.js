import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {Container,Header,Title,Content,Button,Icon,List,ListItem,Text,Left,Right,Body,View,Fab,IconNB} from "native-base";

const datas = [
      {
        list: "ผ้าปูที่นอน 3.5 ฟุต",
        rate: "10",
      },
  {
    list: "ผ้าปูที่นอน 5-6 ฟุต",
    rate: "12",
  },
  {
    list: "ปลอกหมอน",
    rate: "5",
  },
  {
    list: "ปลอกผ้านวม เล็ก",
    rate: "25",
  },
];

class TabOrderRate extends Component {

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
              <ListItem>
                <Left>
                  <Text>{data.list} เรท : {data.rate}</Text>
                </Left>
                <Right>
                  <Text onPress={()=> this.props.navigation.navigate('EditedRate ')}> แก้ไข </Text>
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
            position="bottomRight" onPress={() => this.props.navigation.navigate('')}

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

export default TabOrderRate;
