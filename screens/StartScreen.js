import React,{useState} from 'react';
import {StyleSheet,Button, View ,Keyboard,TouchableWithoutFeedback, Alert} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input'
import NumberContainer from '../components/NumbreContainer';
import TextStyle from '../components/TextStyle';
import MainButton from '../components/MainButton'
 export default function StartScreen (props) {
     const [enteredNumber,setEnteredNumber]=useState('')
     const [confirmedNumber, setConfirmedNumber]=useState(false)
     const [selectedNumber,setSelectedNumber]=useState()
     const enteredNumberHandler = (inputText) => {
           setEnteredNumber(inputText.replace(/[^0-9]/g,''))
     }
     const resetNumberHandler = () => {
         setEnteredNumber('')
     }
     const confirmNumberHandler = () => {
         const number=parseInt(enteredNumber);
         if (isNaN(number)|| (number <= 0 )|| (number>=99))
         {
             Alert.alert (
                'Invalid Number',
                'please choose a number between 1 and 99',
                [{Text:"okay",style:"destructive",onPress:resetNumberHandler}] 
             );
             return;
         }
         setConfirmedNumber(true);
         setSelectedNumber(number);
         setEnteredNumber('');
         
        }

         
        let outputNumber;
         if(confirmedNumber) 
         { outputNumber=
         <Card style={styles.inputContainer}>
             <TextStyle>Selected Number</TextStyle>
             <NumberContainer>{selectedNumber}</NumberContainer>
             <MainButton onPress={()=>props.onStartGame(selectedNumber)}>START GAME</MainButton>
         </Card>
        }
         
       

     return (
       
         <View style={styles.container} >
            <TextStyle style={{paddingTop:20}}>Let's Start !</TextStyle>
            <Card style={styles.input}>
                <TextStyle style={{paddingBottom:20}}>Select a Number</TextStyle>
                <Input
                style={styles.textinput}
                autoCorrect={false} 
                keyboardType= "numeric"
                maxLength={2} 
                onChangeText={enteredNumberHandler} 
                value={enteredNumber} />
                <View style={styles.buttonContainer}>
                <View style={{width:100}} ><Button title='Reset' color='#c1946a' onPress={resetNumberHandler}/></View>
                <View style={{width:100}} ><Button title='Confirm' color='#dac292' onPress={confirmNumberHandler} /></View>  
                </View>
            </Card>
            {outputNumber}
        </View>
     )
     }
 
 const styles=StyleSheet.create ({
    container :{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
     buttonContainer : {
         justifyContent:'space-between',
         flexDirection:'row',
         paddingTop:50,
     },
     textinput: {
         textAlign:'center'
     },
     input :{
        width:'90%',
     },
     inputContainer :{
        height:200,
        marginTop:20,
        flexDirection:'column',
        justifyContent:'space-between',
        paddingVertical:20,
        alignItems:'center'
     }
 })