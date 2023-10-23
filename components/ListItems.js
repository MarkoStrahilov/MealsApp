import React from 'react'
import { View, Text, StyleSheet } from "react-native"

const ListItems = ({data}) => {
  return data.map(element => (
    <View key={element} style={styles.listContainer}>
        <Text style={styles.listValue}>{element}</Text>
    </View>
  ))
}

export default ListItems

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: "#e6e6e6",
        borderRadius: 6,
        marginBottom: 8,
        padding: 7
    },
    listValue: {
        fontSize: 18,
        fontFamily: "Baskerville"
    }
})