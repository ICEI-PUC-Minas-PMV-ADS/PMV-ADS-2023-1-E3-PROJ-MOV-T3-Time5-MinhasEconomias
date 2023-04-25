import React, {useState} from 'react';
import {Avatar} from 'react-native-elements';
import {View} from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles';



function Create() {

 
  
  const [text, onChangeText] = useState(); 

  function InputText () {

  return onChangeText(text);

  }
  
  

 // function navigateToHome() {
 //   navigate('Home' as never);
 // }

  return (

    <View>
    
    <View style={styles.profileContainer}>
      <Icon 
        name="arrow-left-circle"
        size={30}
        
      //onPress={() => {navigateToHome}
      
       />
    
      <Avatar
        size="medium" // tamanho do Avatar
        rounded // Avatar em formato de círculo
        icon={{
          name: 'user',
          type: 'font-awesome',
          size: 30,
          color: '#444cb4',
        }} // ícone do Avatar
        overlayContainerStyle={styles.avatarContainer} // cor de fundo do Avatar
      />
    </View>
      <View>
        <Text style={styles.text}>Valor</Text>
          <TextInput style={styles.input}
            mode="outlined"
            placeholder={"R$"}
            keyboardType={"numeric"}
            value={text}
          />
      </View>
      <View>
        <Text style={styles.text1}>Descrição</Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder={"Ex: Salário"}
          value={text}
        />
      </View>
      <View>
        <Button style={styles.button} mode="contained" onPress={InputText}>
          Adicionar
        </Button>
      </View>
    </View>
  );
}
export default Create;

