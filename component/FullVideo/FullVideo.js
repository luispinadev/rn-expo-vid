import React from 'react'
import { Video } from 'expo'
import { withStateHandlers } from 'recompose'
import { StyleSheet, View, TouchableHighlight } from 'react-native'

const FullVideo = ({ navigation, stop, shouldPlay }) => (
  <View style={styles.container}>
    <TouchableHighlight
      onPress={() => {
        stop()
        navigation.navigate('Home')
      }}
    >
      <Video
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        rate={1.0}
        volume={1.0}
        muted={true}
        resizeMode="cover"
        shouldPlay={shouldPlay}
        isLooping={true}
        style={{ width: 300, height: 300 }}
      />
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default withStateHandlers(
  ({ shouldPlay = false }) => ({ shouldPlay }),
  { 
    stop: () => () => ({ shouldPlay: false }),
  }
)(FullVideo)
