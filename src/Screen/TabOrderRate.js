import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {Container,Header,Title,Content,Button,Icon,List,ListItem,Text,Left,Right,Body,View,Fab,IconNB,Footer,FooterTab} from "native-base";

const data = [
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
            {data.map((data, i) => (
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

        <Footer>
            <FooterTab>
                <Button full onPress={() => this.props.navigation.setParams('EditedRate') }>
                    <Text>เพิ่มรายการ</Text>
                </Button>
            </FooterTab>
        </Footer>

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
