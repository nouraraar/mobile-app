import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function MainButton(props) {
    return (
    <TouchableOpacity onPress={props.onPress}>
    <View style={styles.button}>
        <Text style={styles.buttonText}>
        {props.children}
        </Text>
    </View> 
    </TouchableOpacity>  
    )
}
const styles=StyleSheet.create({
    button : {
        backgroundColor:'#ff7b25',
        paddingVertical:10,
        paddingHorizontal:12
    },
    buttonText:{
        color:'white',
        fontSize:15,
    }

})