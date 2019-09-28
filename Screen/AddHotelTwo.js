import React, { Component } from "react";
import { StyleSheet,View} from 'react-native'
import {Header,Title,Content,Button,Icon,Left,Right,Body,Text} from "native-base";
import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';

export default class AddHotelTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead : ['รายการ', 'บาท/ชิ้น'],
      tableData : [
                      ['ผ้าปูที่นอน 3.5 ฟุต', ' '],
                      ['ผ้าปูที่นอน 5-6 ฟุต', ' '],
                      ['ปลอกหมอน', ' '],
                      ['ปลอกผ้านวม เล็ก', ' '],
                      ['ปลอกผ้าหนวมใหญ่', ' '],
                      ['ผ้าเช็ดตัว', ' '],
                      ['ผ้าเช็ตหน้า', ' '],
                      ['ผ้าเช็ดมือ', ' '],
                      ['ผ้าเช็ตเท้า', ' '],
                      ['เสื้อคลุม', ' '],
                      ['รองเท้า', ' '],
      ]
    }
  }
  static navigationOptions = ({navigation})=>{
      let headerTitle = 'เพิ่มโรงแรม';
      return {headerTitle}
  };
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        <Button block onPress={()=> this.props.navigation.replace('Profile')}>
                <Text>ขั่นตอนต่อไป</Text></Button>
      </View>

    )
  }
}

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 10 }
});
