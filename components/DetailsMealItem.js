import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DetailsMealItem = ({ title = 'title', text = 'text', time = false, distence = { marginTop: 0 }, details = false }) => {
  return (
    <View style={[styles.itemDetailsContainer, distence]}>
      <Text style={[styles.itemDetailsTitle, { fontSize: details ? 18 : 13 }]}>{title}</Text>
      <Text style={[styles.itemDetailsText, { fontSize: details ? 18 : 13 }]}>{text} {time ? "min" : null}</Text>
    </View>
  )
}

export default DetailsMealItem

const styles = StyleSheet.create({
  itemDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    padding: 4
  },
  itemDetailsTitle: {
  },
  itemDetailsText: {
    color: "grey"
  }
})