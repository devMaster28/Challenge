import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from 'react';
import ListDocument from "../../Components/ListDocument";
import GridView from "../../Components/GridView";

function DocumentsPage(props) {

    const documents = props.documents
    console.log("DocumentsPage:", documents)
    return (
        <View >
            <GridView documents={documents}></GridView>

        </View>

    )
}

export default DocumentsPage