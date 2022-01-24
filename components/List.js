import React from 'react';
import {View,StyleSheet} from 'react-native';
export default function List (props) {
    return (<View {...props } style={styles.ListItems}>
              {props.children}
           </View>)
}
const styles=StyleSheet.create({
    ListItems : {
        borderColor:'#82b74b',
        borderWidth:3,
        marginVertical:10,
        padding:15,
        flexDirection:'row',
        justifyContent:'space-around'
        }
    })