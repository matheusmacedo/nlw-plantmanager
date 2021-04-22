import React from 'react'
import { StyleSheet, View } from 'react-native'
import { UserIdentification, Welcome } from 'pages'
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'

import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        {/* <Welcome /> */}
        <UserIdentification />
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Jost_400Regular',
  },
})
