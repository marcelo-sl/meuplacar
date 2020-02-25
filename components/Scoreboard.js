import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneScore: 0,
      playerTwoScore: 0,
    };
  }

  incrementScoreOne = () => {
    this.setState({playerOneScore: this.state.playerOneScore + 1});
  };
  incrementScoreTwo = () => {
    this.setState({playerTwoScore: this.state.playerTwoScore + 1});
  };

  decrementScoreOne = () => {
    this.setState({
      playerOneScore:
        this.state.playerOneScore > 0 ? this.state.playerOneScore - 1 : 0,
    });
  };
  decrementScoreTwo = () => {
    this.setState({
      playerTwoScore:
        this.state.playerTwoScore > 0 ? this.state.playerTwoScore - 1 : 0,
    });
  };

  resetScore = () => {
    this.setState({playerOneScore: 0});
    this.setState({playerTwoScore: 0});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.player}>
          <TextInput
            style={styles.playerName}
            placeholder="Jogador 1"
            placeholderTextColor="#000"
          />
          <Text style={styles.playerScore}>{this.state.playerOneScore}</Text>
          <View style={styles.playerButton}>
            <TouchableOpacity
              style={styles.inputButton}
              onPress={this.decrementScoreOne}>
              <Icon name="minus" size={10} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.inputButton}
              onPress={this.incrementScoreOne}>
              <Icon name="plus" size={10} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.resetButton} onPress={this.resetScore}>
          <Icon name="trash" size={15} color="#333" />
          <Text style={styles.textResetButton}>Reiniciar</Text>
        </TouchableOpacity>
        <View style={styles.player2}>
          <TextInput
            style={styles.playerName}
            placeholder="Jogador 2"
            placeholderTextColor="#000"
          />
          <Text style={styles.playerScore}>{this.state.playerTwoScore}</Text>
          <View style={styles.playerButton}>
            <TouchableOpacity
              style={styles.inputButton}
              onPress={this.decrementScoreTwo}>
              <Icon name="minus" size={10} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.inputButton}
              onPress={this.incrementScoreTwo}>
              <Icon name="plus" size={10} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Scoreboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
  player: {
    position: 'relative',
    width: '95%',
    height: '42%',
    marginTop: '2%',
    borderRadius: 2,
    backgroundColor: '#f00',
    alignItems: 'center',
  },
  player2: {
    position: 'relative',
    width: '95%',
    height: '42%',
    borderRadius: 2,
    backgroundColor: '#00A0F0',
    alignItems: 'center',
  },
  playerName: {
    textAlign: 'center',
    fontSize: 15,
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 2,
    width: '94%',
  },
  playerScore: {
    fontSize: 70,
    color: '#fff',
    margin: '6%',
  },
  playerButton: {
    position: 'absolute',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 10,
  },
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  resetButton: {
    flexDirection: 'row',
    width: '95%',
    height: '8%',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    color: '#333',
    borderRadius: 3,
  },
  textResetButton: {
    marginLeft: 8,
  },
});
