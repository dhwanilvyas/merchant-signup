import React, { Component } from 'react';
import { Container, Content, Card, Form, Item, Label, Input, H1, H2, Button, Text } from 'native-base';
import { View, Image, Alert, StyleSheet } from 'react-native';
import Merchant from '../services/Merchant';

class DepositMoney extends Component {
  static navigationOptions = {
    title: 'Collect money',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#e67e22',
    }
  };

  state = {
    aadhar_number: null,
    image_url: null,
    name: null,
    visible: false,
    currentAmountInWallet: 0
  };

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value
    });
  }

  getInfo = () => {
    if (this.state.aadhar_number) {
      Merchant.getProfile(this.state.aadhar_number)
        .then(response => {
          if (response) {
            this.setState(response)
          }
          else
            alert('Invalid aadhar number!')
        })
        .catch(err => alert('Error!'));
    }
  }

  openOtpModal = () => {
    this.setState({
      visible: true
    });

    Merchant.transferMoney(this.state)
      .then(() => {
        alert('Money deposited successfully!');
        this.setState({
          visible: false
        });
        this.props.navigation.navigate('Home');
      })
      .catch(() => {
        alert('Error!');
      });
  }

  transferMoney = () => {
    Alert.alert('Confirm action', 'Are you sure to transfer money?', [
      {text: 'No'},
      {text: 'Yes', onPress: () => this.openOtpModal()},
    ]);
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Card>
            <Form>
              <Item floatingLabel>
                <Label>Merchant aadhar number</Label>
                <Input
                  value={this.state.aadhar_number}
                  onChangeText={(value) => this.handleInputChange('aadhar_number', value)}
                  onBlur={this.getInfo} />
              </Item>
            </Form>
          </Card>
          {this.state.name && (
            <Card style={{flex: 3, justifyContent: 'space-between', alignItems: 'center'}}>
              {this.state.image_url && <Image source={{uri: this.state.image_url}} style={styles.image} />}
              <H1>{this.state.name}</H1>
              <Text>{this.state.address}</Text>
              {this.state.currentAmountInWallet < 0 ? (
                <View>
                  <Text>Made transactions worth {this.state.currentAmountInWallet - (this.state.currentAmountInWallet * 2)} today.</Text>
                  <Button block onPress={this.transferMoney} style={{backgroundColor: "#e67e22"}}>
                    <Text>{this.state.visible ? 'Please wait...' : 'Transfer money'}</Text>
                  </Button>
                </View>
              ):  <H2>No balance due.</H2>}
            </Card>
          )}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 150,
    width: 160,
    alignSelf: 'center',
    margin: 5
  }
});

export default DepositMoney;
