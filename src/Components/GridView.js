import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from 'react';

function GridView(props) {

    console.log("gridView", props)
    const documents = props.documents
    const renderItem = ({ item }) => {
        console.log("item:", item)
        return <View style={styles.container}>
            <Text>{item.Title}</Text>
            <Text>{item.Version}</Text>
        </View>
    }



    return (
        <View >
            <FlatList
                nestedScrollEnabled
                numColumns={2}
                data={documents}
                keyExtractor={item => item.ID}
                renderItem={renderItem}
            >

            </FlatList>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        padding: 8,
        borderRadius: 5,
        display: 'flex',
        flexDirection: "column",
        marginTop: 10,
        marginHorizontal: 10,
        width: '45%'

    },
})
export default GridView