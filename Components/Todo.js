import React from "react";
import {View, Text, StyleSheet } from 'react-native'
const Todo = ({name})=>{
    return(
        <View style={[styles.item, {margin: 8, padding: 8 }]}>
            <Text>
                this is {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'white',
    }
})

export default Todo;