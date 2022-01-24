import React from 'react';
import {Text,View,StyleSheet, Button , Image} from 'react-native';
import TextStyle from '../components/TextStyle';
export default function GameOverScreen (props) {
    return (<View style={styles.screen}>
        <Text style={{fontSize:40}}> The Game is over !</Text>
        <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/final.jpg')}></Image>
        </View>
        <TextStyle>Number of rounds : {props.number}</TextStyle>
        <TextStyle>User number was : {props.userChoice}</TextStyle>
        <View style={{paddingTop:50}}>
        <Button title='Restart Game' onPress={props.RestartGame} color='#c1946a' />
        </View>
    </View>)
}
const styles=StyleSheet.create ({
screen :{
    paddingTop:100,
    justifyContent:'center',
    alignItems:'center'
},
image :{
    height:300,
    width:'100%'
},
container :{
    width:300,
    height:300,
    borderRadius:200,
    marginVertical:20,
    borderColor:'black',
    borderWidth:3,
    overflow:'hidden'
}
})