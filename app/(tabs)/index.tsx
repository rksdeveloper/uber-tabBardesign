import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Trackza</Text>
      <Text>Tony Strak</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})

