/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Button, TextInput, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import backicon from '../../../assets/backicon.png';

function Create() {
  const [text, onChangeText] = useState();
  const {goBack} = useNavigation();

  function InputText() {
    return onChangeText(text);
  }

  function handleBackButton() {
    goBack();
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nova Movimentação</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={handleBackButton}>
        <Image source={backicon} />
      </TouchableOpacity>


      <View>
        <Text style={styles.text}>Valor</Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder={'R$'}
          keyboardType={'numeric'}
          value={'R$' + text}
          //TODO AsyncStorage
          onChangeText={value => setValor(value)}
        />
      </View>
      <View>
        <Text style={styles.text1}>Descrição</Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          placeholder={'Ex: Salário'}
          value={text}
          //TODO AsyncStorage
          onChangeText={value => setDescription(value)}
        />
      </View>
      <View>
        <Button style={styles.button} mode="contained" onPress={InputText}>
          Adicionar
        </Button>
      </View>
    </ScrollView>
  );
}
export default Create;
