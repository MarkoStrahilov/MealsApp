import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import DetailsMealItem from './DetailsMealItem'

const MealItem = ({ data }) => {

  const navigation = useNavigation()

  const itemDetailsHandler = () => {
    navigation.navigate("MealDetails", { itemId: data.id })
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [styles.mealItem, pressed ? styles.IOSpressedEffect : null]}
        onPress={itemDetailsHandler}
      >
        <View>
          <Image source={{ uri: data?.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{data?.title}</Text>
        </View>
        <View style={styles.itemDetailsHolder}>
          <DetailsMealItem title={'DURATION'} text={data?.duration} time={true} distence={{marginTop: 30}}/>
          <DetailsMealItem title='COMPLEXITY' text={data?.complexity.toUpperCase()}/>
          <DetailsMealItem title='AFFORDABILITY' text={data?.affordability.toUpperCase()}/>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  IOSpressedEffect: {
    opacity: 0.25
  },
  mealItem: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    backgroundColor: "#ffff",
    marginBottom: 25,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  itemDetailsHolder: {
    padding: 10
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10
  },
})