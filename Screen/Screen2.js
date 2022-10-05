import React, {Component} from "react";
import {
    StyleSheet, Text, View,Image,TouchableOpacity
} from 'react-native'
export default class MauJoy3 extends Component{
    render(){
        const{navigation} = this.props
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                    <Image style={{width:130,height:165}} source={require('../image/hdimg.png')}></Image>
                    
                    </View>
                    <View style={{flex:2,paddingTop:15}}>
                        <Text style={styles.text}>Điện thoại Vsmart Joy3</Text>
                        <Text style={styles.text}>Hàng chính hãng</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:18,paddingTop:10}}>Chọn 1 màu bên dưới</Text>
                    <View style={{flex:1,alignItems:'center',justifyContent:'space-between',paddingTop:10}}>
                        <TouchableOpacity style={styles.btn}>                          
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn1}>                          
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}>                          
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn3}>                          
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btnMua} onPress={()=>{navigation.navigate('Screen2')}}>  
                        <Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>Xong</Text>                        
                    </TouchableOpacity>
                </View>
            </View>
        )}
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'white'
},
header:{
    flex:1,
    flexDirection:'row'
},
body:{
    flex:2.5
},
footer:{
    flex:0.6,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
text:{
    fontSize:18,
    fontWeight:'bold'
},
btn:{
    alignItems: "center",
    backgroundColor: "white",
    width:90,
    height:90,
    backgroundColor:'#C5F1FB'
  },
  btn1:{
    alignItems: "center",
    backgroundColor: "white",
    width:90,
    height:90,
    backgroundColor:'#F30D0D'
  },
  btn2:{
    alignItems: "center",
    backgroundColor: "white",
    width:90,
    height:90,
    backgroundColor:'#000000'
  },
  btn3:{
    alignItems: "center",
    backgroundColor: "white",
    width:90,
    height:90,
    backgroundColor:'#234896'
  },
  btnMua:{
    alignItems: "center",
    justifyContent:'center',
    height:60,
    flex:0.9,
    backgroundColor: "#1952E2",
    borderRadius:5,
    
  },


})