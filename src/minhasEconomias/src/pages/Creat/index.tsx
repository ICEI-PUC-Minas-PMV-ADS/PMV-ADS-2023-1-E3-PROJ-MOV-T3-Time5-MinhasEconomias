import React from 'react';

import {useState} from 'react';

import {View, StyleSheet} from 'react-native';

import { Button, TextInput, Text } from 'react-native-paper';





function App() {

 
  
  const [text, onChangeText] = useState();

 

  function InputText () {

  return onChangeText(text);

  };

 

  return (

  <View style={styles.container}>

  <Text style={styles.text}>Valor</Text>

    <TextInput style={styles.input}

    mode="outlined"

    value={text}

    />

 

    <Text style={styles.text1}>Descrição</Text>

    <TextInput

    style={styles.input}

    mode="outlined"

    value={text}

    />

     

  <Button style={styles.button} mode="contained" onPress={InputText}>

    Adicionar

  </Button>

 

  </View>

  );

}

export default App;

 

const styles = StyleSheet.create({

  text1: {

    marginTop: 40,

  },

  container: {

    marginTop: 120,

    marginLeft: 20,

    marginRight: 20

  },

  button: {

    marginTop: 200,

    backgroundColor: "#414BB2",

  },
  text: {

  },
  input: {

  },

});