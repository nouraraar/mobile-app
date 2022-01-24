import React, { useRef, useState ,useEffect} from 'react';
import {View , StyleSheet ,Text, Alert , FlatList} from 'react-native';
import Card from '../components/Card';
import {AntDesign} from '@expo/vector-icons'
import NumberContainer from '../components/NumbreContainer';
import TextStyle from '../components/TextStyle';
import MainButton from '../components/MainButton';
import List from '../components/List';
const GenerateRandomBetween=(min, max ,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const RandNum=Math.floor(Math.random()*(max-min)+min)
    if (RandNum===exclude)
    {return GenerateRandomBetween(min,max,exclude)}
    else 
    {return RandNum;}}
    const renderItemList =(listLength,itemData)=>(
<List >
    <Text>#{listLength-itemData.index}</Text>
    <Text>{itemData.item}</Text>
</List>
    )
export default function GameScreen (props) {
    const initialGuess=GenerateRandomBetween(1,100,props.userChoice);
    const [guessedNumber,setguessedNumber]=useState(initialGuess);
    const [guessedNumbers, setguessedNumbers]=useState([initialGuess.toString()]);
    const currentLow=useRef(1);
    const currentHigh=useRef(100);
  
    const nextGuessNumberHandler =(direction)=> {
        if ((direction==='lower' && guessedNumber<props.userChoice) ||(direction==='greater' && guessedNumber>userChoice))
         {Alert.alert('Don\'t lie ! ',
         'You know this is wrong ...',
          [{Text:'sorry !' , style:'cancel'}])
        return ;}
      if (direction === 'lower')
      {
          currentHigh.current=guessedNumber
      }
      else 
      {currentLow.current=guessedNumber + 1}
    
    const nextNumber=GenerateRandomBetween(currentLow.current,currentHigh.current,guessedNumber);
     setguessedNumber(nextNumber);
     setguessedNumbers(currguessedNumbers=>[nextNumber.toString(),...currguessedNumbers])
    }
    const {userChoice,onGameOver}=props;
    useEffect (()=>{
        if (guessedNumber === props.userChoice)
         { onGameOver(guessedNumbers.length),[guessedNumbers,userChoice,onGameOver]
        }
    })
    return (
        <View style={styles.screen}>
    <TextStyle>Opponent's Guess</TextStyle>
    <NumberContainer>{guessedNumber}</NumberContainer>
    <Card style={styles.ButtonContainer}>
        <MainButton onPress={nextGuessNumberHandler.bind(this,'lower')} >  <AntDesign name="arrowdown" size={24} color="black" /></MainButton>
        <MainButton onPress={nextGuessNumberHandler.bind(this,'greater')}>  <AntDesign name="arrowup" size={24} color="black" /> </MainButton>
    </Card>
       <View style={styles.list}>
       <FlatList  keyExtractor={(item)=>item} data={guessedNumbers} renderItem={renderItemList.bind(this,guessedNumbers.length)}></FlatList>
        </View>
        </View>
    );
    }
const styles=StyleSheet.create({
screen : {
    alignItems :'center',
    padding :10,

},
ButtonContainer : {
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10,
    width:300
},
list : {
    //width:'80%',
    flex:1,
  
   

}
})