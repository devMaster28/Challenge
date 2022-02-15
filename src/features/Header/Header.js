import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from 'react';

export default function Header(props) {

    var ws = React.useRef(new WebSocket('ws://localhost:8080/notifications')).current

    console.log("WebSocket", ws)
    useEffect(() => {

        ws.onmessage = (e) => {
            console.log(e)
        };
    })

    return <Text>Documents</Text>

}