import React from "react";
import {View, Text, StyleSheet, Button } from 'react-native'
const Todo = ({item, index, deleteItem})=>{
    return(
        <View style={[styles.item, {margin: 8, padding: 8}]}>
            <Text>
               {item}
            </Text>
            <Button title='Delete' color={'red'} onPress={()=>deleteItem(item)} />
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