import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import DetailsMealItem from './DetailsMealItem'


const Favorite = ({ data }) => {

  const navigation = useNavigation()

  const itemDetailsHandler = () => {
    navigation.navigate("MealDetails", {itemId: data.id})
  }


  return (
    <View style={styles.container}>
      <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({pressed}) => [styles.container, pressed ? styles.IOSpressedEffect : null]}
      onPress={itemDetailsHandler}
      >
        <Image source={{ uri: data?.imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{data?.title}</Text>
          <View>
            <DetailsMealItem title={'DURATION'} text={data?.duration} time={true} distence={{ marginTop: 30 }} />
            <DetailsMealItem title='COMPLEXITY' text={data?.complexity.toUpperCase()} />
            <DetailsMealItem title='AFFORDABILITY' text={data?.affordability === "affordable" ? "YES" : "NO"} />
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: "40%",
    height: 150,
    borderRadius: 10
  },
  imageContainer: {
    marginBottom: 20
  },
  textContainer: {
    marginLeft: 10
  },
  text: {
    fontSize: 20,
    width: 200,
    color: "grey"
  },
  IOSpressedEffect: {
    opacity: 0.25
  },
})