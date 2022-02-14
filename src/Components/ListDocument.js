import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from 'react';

function ListDocument(props) {

    const documents = props.documents
    return (
        <View >

            {documents.map((document, key) => {
                return (
                    <ItemListComponent key={key} document={document}></ItemListComponent>
                );
            })}

        </View>

    )
}

export default ListDocument


function ItemListComponent(props) {

    const document = props.document
    return <View style={itemListStyle.container}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={itemListStyle.titleStyle}>{document.Title}</Text>
            <Text style={itemListStyle.versionStyle} >{document.Version}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <View style={itemListStyle.setionContainer}>
                <Text style={itemListStyle.titleSetion}>Contributions</Text>
                {document.Contributors.map((contributor, key) => {
                    return (
                        <Text>{contributor.Name}</Text>
                    );
                })}
            </View>
            <View style={{ flexDirection: 'column' }}>
                <Text style={itemListStyle.titleSetion} >Attachments </Text>
                {document.Attachments.map((attachments, key) => {
                    return (
                        <Text>{attachments}</Text>
                    );
                })}
            </View>
        </View>

    </View>

}

const itemListStyle = StyleSheet.create({
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
        marginHorizontal: 10

    },
    titleStyle: {
        fontSize: 16,
        marginRight: 10,
        fontWeight: 'bold',

    },
    versionStyle: {
        color: 'gray',
        fontSize: 10,
        alignSelf: 'flex-end',
        paddingBottom: 2
    },
    setionContainer: {
        width: '50%',
        flexDirection: 'column'
    },
    titleSetion: {
        fontWeight: 'bold',
    }
})