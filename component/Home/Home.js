import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Item from '../Item'
export default ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Item onPress={() => {
        navigation.navigate('FullVideo')
      }}/>
    <Item onPress={() => {
        navigation.navigate('FullVideo')
      }}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
