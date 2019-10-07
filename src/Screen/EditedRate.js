import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
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
  IconNB,
  Form,
  Item,
  Input,
} from "native-base";

class EditedRate extends React.Component {

  static navigationOptions = ({navigation})=>{
    let headerTitle = 'เพิ่มรายการ';
    return {headerTitle}
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Form>
            <Item rounded>
              <Input placeholder="ชื่อรายการ" />
            </Item>
            <Item rounded>
                <Input placeholder="ราคา/ชิ้น" />
            </Item>
            <Button block onPress={()=> this.props.navigation.navigate('Order')}>
                <Text>บันทึก</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});

export default EditedRate;
