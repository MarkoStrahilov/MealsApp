import React from 'react'
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Category = ({data, pressHandler}) => {

   // const navigate = useNavigation()

    return (
        <View style={styles.container}>
            <Pressable
            android_ripple={{color: "#ccc"}}
            style={({pressed}) => [styles.pressableItem, pressed ? styles.IOSpressedEffect : null]}
            onPress={pressHandler}
            >
                <View style={[styles.innerItem, , {backgroundColor: data.item.color}]}>
                    <Text style={styles.title}>{data.item.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        margin: 15,
        height: 150,
        borderRadius: 6,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "visible"
    },
    pressableItem: {
        flex: 1,
    },  
    IOSpressedEffect: {
        opacity: 0.1
    },
    innerItem: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
})

export default Category