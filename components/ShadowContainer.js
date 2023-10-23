import { View, StyleSheet, Platform } from 'react-native'

const ShadowContainer = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

export default ShadowContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffff",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "visible"
    }
})