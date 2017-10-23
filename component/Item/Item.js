import React from 'react'
import { Video } from 'expo'
import {
  StyleSheet,
  View,
  Button,
} from 'react-native'

export default class Item extends React.Component {
  render() {
    const { onPress } = this.props
    return (
      <View>
        <Video
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          muted={true}
          resizeMode="cover"
          shouldPlay={false}
          style={{ width: 300, height: 300 }}
        />
        <Button
          title="full screen"
          onPress={onPress}
        />
      </View>
    )
  }
}
