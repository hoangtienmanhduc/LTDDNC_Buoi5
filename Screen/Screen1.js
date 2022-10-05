import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={{backgroundColor:'red',height:480}}>
        <Image source={require('../image/vsmart_live_xanh2.png')} />
        </View>
        <Text style={{fontSize:15,marginLeft:20,marginTop:10}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{flex:0.1,flexDirection: 'row',marginTop:10}}>
          <View style={{height:50,width:50}}>
            <Image source={require('../image/Star_1.png')} />
          </View>
          <View>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
  },
});