import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {Container,Header,Title,Content,Button,Icon,List,ListItem,Text,Left,Right,Body} from "native-base";


const datas = [
  "โรงเเรม : อินเตอร์เนชั่นแนลเฮาล์",
  "ที่อยู่ : 999 หมู่99 ซอย99 ถนนก้าวหน้า",
  "ตำบล : แม่กา",
  "อำเภอ : เมือง ",
  "จังหวัด : เชียงราย",
  "รหัสไปรษณีย์ : 56000",
  "เบอร์ติดต่อ : 999-9999",
  "อีเมล์ :  inter002562@gmail.com",
  "เลขประจำตัวผู้เสียภาษี : 2401295847395"
];

class TabOrderDetail extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List>
            {datas.map((data, i) => (
              <ListItem>
                <Left>
                  <Text>{data}</Text>
                </Left>
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

export default TabOrderDetail;