import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MEALS, CATEGORIES } from '../data/meal-data'
import { useRoute } from '@react-navigation/native'
import MealItem from '../components/MealItem'

const MealsScreen = ({ route, navigation }) => {

    // const route = useRoute()
    const categoryId = route.params.itemId;

    const filteredMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    })

    useLayoutEffect(() => {

        const categoryTitle = CATEGORIES.find((category) => 
        category.id === categoryId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [categoryId, navigation])

    const renderMealHandler = (itemData) => {
        return <MealItem data={itemData.item} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredMeals}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => renderMealHandler(itemData)}
            />
        </View>
    )
}

export default MealsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})