import React from 'react';
import { StyleSheet,View , Text } from 'react-native';
export default function NumberContainer (props) {
   return <View style ={{...props.style , ...styles.container}}>
        <Text style={styles.number}>{props.children}</Text>
    </View>
}
const styles=StyleSheet.create ({
container :{
    padding:10,
    borderColor:'#c83349',
    borderRadius :10,
    borderColor:'#ffcc5c',
    borderWidth:3,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
  
},
number :{
    fontSize:20,
    color:'#FFBB00',
}
})