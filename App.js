import React from 'react';
import {SafeAreaView, LogBox} from 'react-native';
import RootNavigation from './app/navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
