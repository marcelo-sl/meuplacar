/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import './config/StatusBarConfig';
import Header from './components/Header';
import InputPlayers from './components/InputPlayers';
import Scoreboard from './components/Scoreboard';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <InputPlayers /> */}
      <Scoreboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
