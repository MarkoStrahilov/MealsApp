import { CATEGORIES } from '../data/meal-data'
import { FlatList, ScrollView, Text, View } from 'react-native'
import Category from '../components/Category';

const Home = ({ navigation }) => {

  const renderItemHandler = (item) => {

    const handleButtonPress = () => {
      navigation.navigate("Meals", { itemId: item.item.id})
    }

    return <Category data={item} pressHandler={handleButtonPress} />;
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderItemHandler(item)}
      numColumns={2}
    />
  )
}


export default Home