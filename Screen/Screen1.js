import React, {Component} from "react";
import {
    StyleSheet, Text, View,Image,TouchableOpacity
} from 'react-native'

export default class Joy3 extends Component{
    render(){
        const{navigation} = this.props
        return(
            <View style={styles.container}>
      <View style = {styles.header}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Image
        style={{width:250,height:275,}}
        source={require('../image/hdimg.png')}
      />
      </View>
      
      
      </View>
      <View style={styles.body}>
        <View style={{flex:1,justifyContent:'space-between' }}>
        <Text style={styles.text}>Điện Thoại Vsmart Joy3 - Hàng chính hãng</Text>
      <View style={{flexDirection:'row'}}>
      <Image
        source={require('../image/Star_1.png')}
      />
      <Image
        source={require('../image/Star_1.png')}
      />
      <Image
        source={require('../image/Star_1.png')}
      />
      <Image
        source={require('../image/Star_1.png')}
      />
      <Image
        source={require('../image/Star_1.png')}
      />
      <Text style={{fontSize:16,fontWeight:'bold',paddingLeft:50}}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'row',flex:0.8,justifyContent:'space-between',alignItems:'center'}}>
          <Text style={styles.text}>1.790.000đ</Text>
          <Text style={{fontSize:15,color:'#C4C4C4'}}>1.790.000đ</Text>
        </View>
        
      </View>
      <View>
        <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Ở đâu rẻ hơn hoàn tiền</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Option')}} >
            <Text style={styles.mau}>4 màu - Chọn màu  </Text>
            <Image source={require('../image/Vector.png')}></Image>
         </TouchableOpacity>
      </View>
        </View>
      </View>
      <View style = {styles.footer}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.btnmua} >
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Chọn mua</Text>
         </TouchableOpacity>
      </View>
      </View>
      
    </View>


        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
     
      flex:1,
      
  
    },
    body:{
      flex:1,
    },
    footer:{
      flex:0.5,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      fontSize:20,
      fontWeight:'bold'
    },
    btn:{
      alignItems: "center",
      backgroundColor: "white",
      padding: 10,
      borderWidth:1,
      borderRadius:10,
      flexDirection:'row',
      justifyContent:'space-between',
      paddingLeft:50,
      paddingRight:50
    },
    btnmua:{
      alignItems: "center",
      justifyContent:'center',
      height:60,
      flex:0.9,
      backgroundColor: "#EE0A0A",
      borderRadius:5,
      
    },
    mau:{
      fontSize:17,
    }
  
  
  });