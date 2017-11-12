import React, { Component } from 'react';
import { Container, Content, H1, Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Image source={{uri: 'https://www.seeklogo.net/wp-content/uploads/2014/01/bank-of-baroda-vector-logo-400x400.png'}} style={styles.image} />
          <H1 style={styles.text}>Welcome, correspondent!</H1>
          <Button block style={styles.button} onPress={() => navigation.navigate('Signup')}>
            <Text>Merchant signup</Text>
          </Button>
          <Button block style={styles.button} onPress={() => navigation.navigate('DepositMoney')}>
            <Text>Collect money</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10
  },
  text: {
    textAlign: 'center',
    margin: 15
  },
  button: {
    margin: 5,
    backgroundColor: '#e67e22'
  },
  image: {
    height: 250,
    width: 200,
    alignSelf: 'center',
  }
});

export default Home;
