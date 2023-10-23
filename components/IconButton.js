import React from 'react'
import { View, Text, Pressable, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const IconButton = ({handlePress, icon, color}) => {
  return (
    <Pressable 
    onPress={handlePress}
    style={({pressed}) => pressed ? styles.pressed : null}
    >
        <Ionicons name={icon} size={30} color={color}/>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: .5
    }
})