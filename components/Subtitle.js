import { View, Text, StyleSheet } from "react-native"

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>{children}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContainer: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    subtitleText: {
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 8,
        fontFamily: "AvenirNext-Medium"
    }
})