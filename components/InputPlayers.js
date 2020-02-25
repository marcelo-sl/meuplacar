import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const InputPlayers = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número de jogadores"
        placeholderTextColor="#999"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.inputButton}>
        <Text style={styles.buttonText}>Contar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputPlayers;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 5,
  },
  input: {
    width: '80%',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
  },
  inputButton: {
    width: '19%',
    marginLeft: '1%',
    backgroundColor: '#555',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
  },
});
