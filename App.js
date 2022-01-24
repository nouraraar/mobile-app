import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';
import  * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts=()=>{
  Font.loadAsync({
    'open-sans': require ('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require ('./assets/fonts/OpenSans-Bold.ttf')})
  };
  

export default function App() {
  const [dataLoaded,setdataLoaded]=useState(false);
  const [userNumber ,setuserNumber]=useState();
  const [guessRounds,setguessRounds]=useState(0);
  if (!dataLoaded)
{return <AppLoading startAsync={fetchFonts} onFinish={()=>setdataLoaded(true)} onError={(err)=>console.log(err)} />}

  const configureNewGameHandler =()=> {
    setguessRounds(0);
    setuserNumber(null);
  }
  const startGameHandler =(selectedNumber)=> {
    setuserNumber(selectedNumber);
    setguessRounds(0);
}
  const gameOverHandler =(numberOfRounds)=>{
    setguessRounds(numberOfRounds)
  }
 let content=<StartScreen onStartGame={startGameHandler} />
 if (userNumber && guessRounds===0) {
   content= <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
 } else if (guessRounds>0)
   {content=<GameOverScreen number={guessRounds} userChoice={userNumber} RestartGame={configureNewGameHandler}/>}
  
  return (
    <View>
     <Header />
     {content}
    </View>
  );
}
