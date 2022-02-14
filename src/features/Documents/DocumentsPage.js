import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from 'react';
import ListDocument from "../../Components/ListDocument";

function DocumentsPage(props) {

    const documents = props.documents
    return (
        <View >
            <ListDocument documents={documents}></ListDocument>

        </View>

    )
}

export default DocumentsPage