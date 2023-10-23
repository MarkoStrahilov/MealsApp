import React, { useContext, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { FavoritesContext } from '../store/context/favories.context'
import { MEALS } from '../data/meal-data'
import Favorite from '../components/Favorite'

const FavoriteMeal = ({ navigation }) => {

  const FavoriteMealContext = useContext(FavoritesContext)

  const favoriteMeal = MEALS.filter(meal => FavoriteMealContext.ids.includes(meal.id))

  useLayoutEffect(() => {

    navigation.setOptions({
      title: 'Favorite Meals',
    })

  }, [navigation])

  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.emptyMealsContainer}>
        <Ionicons name='close' size={150} />
        <Text style={styles.emptyMealText}>You don't have any favorite meals</Text>
      </View>
    )
  } else {
    return (
      <ScrollView>
        {favoriteMeal.map(meal =>
          <Favorite key={meal?.title} data={meal} />
        )}
      </ScrollView>
    )
  }
}

export default FavoriteMeal

const styles = StyleSheet.create({
  emptyMealsContainer: {
    flex: 1,
    marginTop: 150,
    alignItems: "center",
  },
  emptyMealText: {
    fontSize: 30,
    textAlign: "center"
  }
})