import React,{useState} from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image}from 'react-native'

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App(){
  
  const [numero,setNumero] = useState('00:00:00')
  const [iniciar,setIniciar] = useState('Iniciar')
  const [text1,setText] = useState('Ultimo tempo:');


  function click(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
      setIniciar('Continuar');
      let num = 'Ultimo tempo: '+(hh <10 ? '0' + hh : hh) + ':'+(
        mm<10 ? '0' + mm : mm ) + ':'+ (ss<10 ? '0' + ss : ss 
        ) 
      setText(num);
    }else{
      timer = setInterval(() => {
        ss++;
        if(ss == 60){
          ss=0;
          mm++;
        }
        if(mm == 60 ){
          m=0;
          hh++;
        }

        let format = (hh <10 ? '0' + hh : hh) + ':'+(
        mm<10 ? '0' + mm : mm ) + ':'+ (ss<10 ? '0' + ss : ss 
        ) 
   

        setNumero(format);
        setIniciar('Pausar');
      }, 100);
    }
    
  }


  function zeraCronometro(){
    
    format = ss=0,mm=0,hh=0;
    setNumero('00:00:00')
    clearInterval(timer);
    setIniciar('Iniciar');
    timer = null
    

  }


  return(

    <View style={style.viwInicial}>
      <Image source={require('./src/crono.png')}/>
      <Text style={style.textCronometro}>{numero}</Text>
      
      <View style={style.buttonAline}>
        <TouchableOpacity onPress={click} style={style.but}>
          <Text style={style.btnText}>{iniciar}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={zeraCronometro} style={style.but}>
          <Text style={style.btnText}>Zerar</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.tempoStatic}>{text1}</Text>

    </View>
    

  );
}

const style=StyleSheet.create({
  viwInicial:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#aaee'
  },
  textCronometro:{
    color: 'white',
    fontSize:50,
    marginTop:-167
  },

  buttonAline:{
    flexDirection:'row',
    marginTop:130,
    height: 40
  },
  but:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:10,
    height: 40,
    margin: 4
  },

  btnText:{
    fontSize:30,
    color: '#7B68EE',
    alignItems:'center',
    justifyContent:'center',
    fontStyle:'italic',    
  },

  tempoStatic:{
    marginTop:50,
    fontSize:20,
  }


})


