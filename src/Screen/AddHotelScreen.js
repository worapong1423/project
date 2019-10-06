
import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {Container,Header,Title,Content,Button,Icon,Body,Left,Right,Item,Input,Form,Text} from "native-base";

class AddHotelScreen extends Component {

  static navigationOptions = ({navigation})=>{
    let headerTitle = 'เพิ่มโรงแรม';
    return {headerTitle}
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Form>
            <Item rounded>
              <Input placeholder="ชื่อโรงแรม" />
            </Item>
            <Item rounded>
                <Input placeholder="ที่อยู่" />
            </Item>
            <Item rounded>
                <Input placeholder="อำเภอ" />
            </Item>
            <Item rounded>
                <Input placeholder="จังหวัด" />
            </Item>
            <Item rounded>
                <Input placeholder="รหัสไปรษณีย์" />
            </Item>
            <Item rounded>
                <Input placeholder="เบอร์ติดต่อ" />
            </Item>
            <Item rounded>
                <Input placeholder="อีเมล์" />
            </Item>
            <Item rounded>
                <Input placeholder="เลขประจำตัวผู้เสียภาษี" />
            </Item>
            <Button block onPress={()=> this.props.navigation.navigate('Home')}>
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

export default AddHotelScreen;