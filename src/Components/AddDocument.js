import { Button, Modal, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from 'react';
import Svg, { SvgProps, Path } from "react-native-svg"

export default function AddDocument(props) {

    const onPressBack = props.onPressBack
    const isAddPage = props.isAddPage
    return <Modal
        visible={isAddPage}
        transparent={true}
        animationType={'slide'}

        onRequestClose={() => onPressBack()}
    >
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={styles.title}> Add Document</Text>
                    <Button title="close" onPress={onPressBack}></Button>
                </View>

                <Text style={styles.subTitle}>Document Information</Text>

                <Text>Name</Text>
                <TextInput placeholder="placeholder" style={styles.input}></TextInput>
                <Text>Version</Text>
                <TextInput placeholder="placeholder" style={styles.input}></TextInput>
                <Text>File</Text>
                <Button title="Choose a file"></Button>
            </View>
        </View>
    </Modal>

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '100%',
        height: '100%',
    },
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        padding: 10

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8
    },

    subTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 8
    },

    input: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'whitesmoke',
        padding: 8,
        marginBottom: 8
    }

})