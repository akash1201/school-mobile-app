import { StyleSheet, Text, View,StatusBar,SafeAreaView} from 'react-native'
import React from 'react'
// navigation container
import { NavigationContainer } from '@react-navigation/native';

// stack
import MainStack from './src/navigation/MainStack/MainStack'
import { Colors } from './src/global';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.THEME_COLOR} />
        <MainStack/>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
