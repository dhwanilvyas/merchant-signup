import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppLoading, Constants } from 'expo';
import AppNavigation from './AppNavigation';

class App extends React.Component {
  state = {
    loading: true
  };

  async loadFonts() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <AppLoading
          startAsync={this.loadFonts}
          onFinish={() => this.setState({ loading: false })}
          onError={console.warn}
        />
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    backgroundColor: "#e67e22",
    height: Constants.statusBarHeight,
  },
});

export default App;
