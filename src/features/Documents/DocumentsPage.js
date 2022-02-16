import { Button, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from 'react';
import ListDocument from "../../Components/ListDocument";
import GridView from "../../Components/GridView";
import IconSwitch from "../../Components/IconSwitch";
import Svg, { Path } from "react-native-svg"

function DocumentsPage(props) {

    const documents = props.documents
    const [mode, setMode] = useState("LIST");

    const callbackSwitch = (mode) => {
        setMode(mode)
    }
    console.log("DocumentsPage:", documents)
    return (
        <View style={styles.container}>
            <View style={styles.btnsContainer}>
                <View style={{ flexGrow: 2 }}></View>
                <IconSwitch callback={callbackSwitch}></IconSwitch>
            </View>
            {mode == "LIST" && <ListDocument documents={documents}></ListDocument>}
            {mode == "GRID" && <GridView documents={documents}></GridView>}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    btnsContainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        padding: 10

    }
})
export default DocumentsPage

