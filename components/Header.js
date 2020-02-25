import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Icon name="trophy" size={20} color="#333" />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Meu Placar',
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
});
