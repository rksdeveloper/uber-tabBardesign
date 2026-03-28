import React from 'react'
import { View ,Text, StyleSheet} from 'react-native'

const revamp = () => {
  return (
    <View style={styles.container}>
        <Text>Revamp</Text>
    </View>
  )
}

export default revamp
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

})
