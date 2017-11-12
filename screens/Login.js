import React, { Component } from 'react';
import { Container, Content, Text, Form, Item, Label, Input, Button } from 'native-base';

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Text>Login to continue</Text>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
          </Form>
          <Button block onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Send OTP</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }
};

export default Login;
