import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {Container,Header,Title,Content,Button,Icon,List,ListItem,Text,Left,Right,Body,View,Fab,IconNB} from "native-base";


const datas = [
  {
    text: "HT0001",
    status: "สถานะ : เสร็จสิ้น",
    date : "01/02/2562"
  },
  {
    text: "HT0002",
    status: "สถานะ : ส่งคืนออเดอร์",
    date : "03/02/2562"
  },
  {
    text: "HT0003",
    status: "สถานะ : กำลังดำเนินการ",
    date : "03/02/2562"
  },
];

class TabOrderList extends Component {

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
                  <Text>{data.text}</Text>
                </Left>

                <Body>
                  <Text numberOfLines={1} note>
                    {data.date}
                  </Text>
                  <Text note>{data.status}</Text>
                </Body>

              </ListItem>
            ))}
          </List>
        </Content>

        <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight" onPress={() => this.props.navigation.setParams('OrderAdd')}
          >
            <IconNB name="md-add" />
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

export default TabOrderList;

