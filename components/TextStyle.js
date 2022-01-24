import React from 'react';
import {StyleSheet, Text} from 'react-native';
export default function TextStyle (props) {
return <Text style={{...styles.Text,...props.style}}>{props.children} </Text>
}
const styles=StyleSheet.create({
    Text: {
        fontSize:20, 
    }
})