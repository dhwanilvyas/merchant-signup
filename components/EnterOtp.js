import React, { Component } from 'react';
import { View, Modal, Text, StyleSheet } from 'react-native';
import { Form, Item, Input } from 'native-base';

class EnterOtp extends Component {
  render() {
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={this.props.visble}>
          <View style={styles.container}>
            <View style={styles.modal}>
              <Text>Enter OTP received by merchant</Text>
              <Form>
                <Item>
                  <Input />
                </Item>
              </Form>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080'
  },
  modal: {
    height: 100,
    width: 300,
    backgroundColor: '#ffffff',
    padding: 20
  }
});

export default EnterOtp;
