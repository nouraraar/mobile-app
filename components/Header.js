import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
export default function Header () {
    return (
        <View style={styles.header}>
            <Text style={{color : '#ada397', fontSize:20}}>GUESS A NUMBER</Text>
        </View>
    )
}
const styles=StyleSheet.create ({
    header :{
        height:90,
        paddingTop:50,
        width :'100%',
        backgroundColor :'#405d27',
        alignItems:'center'
    }
})