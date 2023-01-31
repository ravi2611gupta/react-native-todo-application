import React, {useState} from "react";
import { View, Text, Button, StyleSheet, ScrollView, TextInput } from "react-native";
import Todo from "./Todo";

const TodoList = ()=>{

    const [title, setTitle] = useState('Todo List')
    const [text, setText] = useState();
    const [list, setList] = useState(['Hello World']);

    const addItem = ()=>{
        let updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText('')
    }

    return(
        <View style={{width: '80%', marginBottom: 60}}>
            <Text style={[styles.align, styles.font]}>{title}</Text>
            
            <ScrollView>
                {list.map((x, index)=><Todo key={index} item={x} index={index} />)}
            </ScrollView>

            <View>
                <TextInput style={styles.input} value={text} onChangeText={(text)=>setText(text)} />
                <Button
                    onPress={addItem}
                    title="Add Item"
                    />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        alignSelf: 'center',
    },
    font:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    input:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "grey",
        marginBottom: 8,
        padding: 8
    }
})

export default TodoList;