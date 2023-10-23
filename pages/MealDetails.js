import { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { MEALS, CATEGORIES } from "../data/meal-data";
import DetailsMealItem from "../components/DetailsMealItem";
import Subtitle from "../components/Subtitle";
import ListItems from "../components/ListItems";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favories.context";

const MealDetails = ({ route, navigation }) => {

  const FavoriteMealContext = useContext(FavoritesContext)

  const itemId = route.params.itemId;

  const foundMeal = MEALS.find((meal) => {
    return meal.id === itemId;
  })

  const mealIsFavorite = FavoriteMealContext.ids.includes(itemId)

  const handleIconButtonPress = () => {
    if(mealIsFavorite) {
      FavoriteMealContext.removeFavorites(itemId)
    } else {
      FavoriteMealContext.addFavories(itemId)
    }
  }

  useLayoutEffect(() => {

    navigation.setOptions({
      title: foundMeal?.title,
      headerRight: () => {
        return <IconButton handlePress={handleIconButtonPress} icon={mealIsFavorite ? "heart" : "heart-outline"} color={'red'}/>
      }
    })

  }, [foundMeal, navigation, handleIconButtonPress ])

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: foundMeal?.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.ingredientHolder}>
          <Subtitle>Startup Ingredients</Subtitle>
          <ListItems data={foundMeal?.ingredients} />
        </View>
        <View style={styles.holderItem}>
          <Subtitle>Steps For Making The Dish</Subtitle>
          <ListItems data={foundMeal?.steps} />
        </View>
        <View>
          <Subtitle>What To Expect When Done</Subtitle>
          <DetailsMealItem title={'Is Gluent Free'} text={foundMeal?.isGlutenFree ? "Yes" : "No"} details={true} />
          <DetailsMealItem title={'Is Lactose Free'} text={foundMeal?.isLactoseFree ? "Yes" : "No"} details={true} />
          <DetailsMealItem title={'Is Vegetarian'} text={foundMeal?.isVegetarian ? "Yes" : "No"} details={true} />
          <DetailsMealItem title={'Is Vegan'} text={foundMeal?.isVegan ? "Yes" : "No"} details={true} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30
  },
  contentContainer: {
    flex: 1,
    padding: 10
  },
  imageContainer: {
    marginBottom: 20
  },
  image: {
    width: "100%",
    height: 250,
  },
  ingredientHolder: {
    marginBottom: 15
  },
  ingredientsText: {
    color: "#9e9e9e",
  },
  holderItem: {
    marginBottom: 20
  },
  description: {
    color: "#9e9e9e",
    fontSize: 18,
    padding: 3
  },
})