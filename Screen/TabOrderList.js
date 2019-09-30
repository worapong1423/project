import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {Container,Header,Title,Content,Button,Icon,List,ListItem,Text,Thumbnail,Left,Right,Body} from "native-base";

const datas = [
  {
    text: "HT0004",
    status: "สถานะ : เสร็จสิ้น",
    date : "02/02/2562"
  },
];

class TabOrderList extends Component {
  render() {
    return (
      <Container style={styles.container}>

        <Content>
          <List>
            {datas.map((data, i) => (
              <ListItem avatar>
                <Left>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>
                  </Text>
                </Left>

                <Body></Body>

                <Right>
                  <Text numberOfLines={1} note>
                    {data.date}
                  </Text>
                  <Text note>{data.status}</Text>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
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