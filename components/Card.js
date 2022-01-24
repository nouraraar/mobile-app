import React from 'react';
import {StyleSheet , View} from 'react-native';
export default function Card (props) {
    return (
    <View style={{... styles.inputContainer, ...props.style}}>{props.children}</View>
    )
}
const styles=StyleSheet.create ({
    inputContainer : {
       // display:'flex',
        justifyContent:'space-between',
        marginVertical:30,
        elevation:8,
        shadowColor:'blue',
        borderRadius:10,
        paddingVertical:20,
        paddingHorizontal:30 ,
     },
}) 