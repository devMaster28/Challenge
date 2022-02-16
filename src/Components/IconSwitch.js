import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import React, { useState } from 'react';
import Svg, { Path } from "react-native-svg"


export default function IconSwitch(props) {
    const [type, setType] = useState("LIST")

    const onclick = (type) => {
        setType(type)
        props.callback(type)
    }

    return <View style={style.container}>

        <TouchableNativeFeedback onPress={() => onclick("LIST")} >
            <View style={{ width: '50%', backgroundColor: type == "LIST" ? 'white' : 'whitesmoke', borderTopStartRadius: 20, borderBottomStartRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                <ListIcon width="50%" height="50%" strokeWidth={2} stroke={type == "LIST" ? "blue" : "black"} />
            </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => onclick("GRID")} >

            <View style={{ width: '50%', height: "100%", borderTopEndRadius: 20, borderBottomEndRadius: 20, backgroundColor: type == "GRID" ? 'white' : 'whitesmoke', alignItems: 'center', justifyContent: 'center' }}>
                <GridIcon width="50%" height="50%" strokeWidth={2} stroke={type == "GRID" ? "blue" : "black"} />
            </View>
        </TouchableNativeFeedback >


    </View >

}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        width: 100,
        height: 50,
        elevation: 2,
        flexDirection: 'row',
        borderRadius: 20,
        borderColor: 'whitesmoke',
        borderWidth: 1
    }
})

const ListIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
        <Path d="M22.984 12.75h40a1 1 0 1 0 0-2h-40a1 1 0 1 0 0 2zm40 18.546h-40a1 1 0 1 0 0 2h40a1 1 0 1 0 0-2zm0 19.954h-40a1 1 0 1 0 0 2h40a1 1 0 1 0 0-2zm-57-45.468A5.975 5.975 0 0 0 .016 11.75a5.975 5.975 0 0 0 5.968 5.968 5.975 5.975 0 0 0 5.968-5.968 5.975 5.975 0 0 0-5.968-5.968zm0 10a4.036 4.036 0 0 1-4.032-4.032 4.036 4.036 0 0 1 4.032-4.032 4.036 4.036 0 0 1 4.032 4.032 4.037 4.037 0 0 1-4.032 4.032zm0 10.546a5.975 5.975 0 0 0-5.968 5.968 5.975 5.975 0 0 0 5.968 5.968 5.975 5.975 0 0 0 5.968-5.968 5.975 5.975 0 0 0-5.968-5.968zm0 10a4.036 4.036 0 0 1-4.032-4.032 4.036 4.036 0 0 1 4.032-4.032 4.036 4.036 0 0 1 4.032 4.032 4.037 4.037 0 0 1-4.032 4.032zm0 9.954A5.975 5.975 0 0 0 .016 52.25a5.975 5.975 0 0 0 5.968 5.968 5.975 5.975 0 0 0 5.968-5.968 5.975 5.975 0 0 0-5.968-5.968zm0 10a4.036 4.036 0 0 1-4.032-4.032 4.036 4.036 0 0 1 4.032-4.032 4.036 4.036 0 0 1 4.032 4.032 4.037 4.037 0 0 1-4.032 4.032z" />
    </Svg>
)

const GridIcon = (props) => (
    <Svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
            d="M47.547 63.547v384.906a16 16 0 0 0 16 16h384.906a16 16 0 0 0 16-16V63.547a16 16 0 0 0-16-16H63.547a16 16 0 0 0-16 16Zm288.6 16h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Zm-128.3-256.6h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Zm-128.3-256.6h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Zm0 128.3h96.3v96.3h-96.3Z"
        />
    </Svg>
)


