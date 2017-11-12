import React, { Component } from 'react';
import { Container, Content, Form, Card, Item, Label, Input, Button, Text } from 'native-base';
import { Image, StyleSheet, ToastAndroid } from 'react-native';
import Merchant from '../services/Merchant';

class Signup extends Component {
  static navigationOptions = {
    title: 'Merchant signup',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#e67e22',
    }
  };

  state = {
    aadhar_number: null,
    name: null,
    image_url: null,
    contact: null,
    address: null
  };

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value
    });
  }

  getInfo = () => {
    console.log(this.state);
    if (this.state.aadhar_number) {
      Merchant.getInfo(this.state.aadhar_number)
        .then(response => {
          if (response)
            this.setState(response)
          else
            alert('Invalid aadhar number!')
        })
        .catch(err => alert('Error!'));
    }
  }

  signup = () => {
    Merchant.create(this.state);
    ToastAndroid.show('Merchant added successfully', ToastAndroid.LONG);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Card>
            {this.state.image_url && <Image source={{uri: this.state.image_url}} style={styles.image} />}
            <Form>
              <Item floatingLabel>
                <Label>Aadhar number</Label>
                <Input
                  value={this.state.aadhar_number}
                  onChangeText={(value) => this.handleInputChange('aadhar_number', value)}
                  onBlur={this.getInfo}
                  keyboardType='numeric' />
              </Item>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input
                  disabled
                  value={this.state.name}
                />
              </Item>
              <Item floatingLabel>
                <Label>Contact</Label>
                <Input
                  disabled
                  value={this.state.contact}
                />
              </Item>
              <Item floatingLabel>
                <Label>Address</Label>
                <Input
                  disabled
                  value={this.state.address}
                />
              </Item>
            </Form>
          </Card>
        </Content>
        <Button full onPress={this.signup} style={{backgroundColor: "#e67e22",}}>
          <Text>Signup</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 200,
    flex: 1,
    alignSelf: 'center',
    margin: 5
  }
});

export default Signup;
