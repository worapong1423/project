import React, { Component } from "react";
import { StyleSheet,View} from 'react-native'
import {Header,Title,Content,Button,Icon,Left,Right,Body,Text} from "native-base";
import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';


export default class TabOrderRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead : ['รายการ', 'บาท/ชิ้น'],
      tableData : [
                      ['ผ้าปูที่นอน 3.5 ฟุต', '3'],
                      ['ผ้าปูที่นอน 5-6 ฟุต', '4'],
                      ['ปลอกหมอน', '1'],
                      ['ปลอกผ้านวม เล็ก', '4'],
                      ['ปลอกผ้าหนวมใหญ่', '3'],
                      ['ผ้าเช็ดตัว', '5'],
                      ['ผ้าเช็ตหน้า', '6'],
                      ['ผ้าเช็ดมือ', '7'],
                      ['ผ้าเช็ตเท้า', '2'],
                      ['เสื้อคลุม', '1'],
                      ['รองเท้า', '1'],
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
      </View>

    )
  }
}

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 10 }
});