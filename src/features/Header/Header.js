import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from 'react';
import notifee from '@notifee/react-native';
import Svg, { SvgProps, Path } from "react-native-svg"

export default function Header(props) {


    async function onDisplayNotification(data) {
        // Create a channel
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Notifications',
        });

        // Display a notification
        await notifee.displayNotification({
            title: data.UserName,
            body: data.DocumentTitle,
            android: {
                channelId,
                smallIcon: 'ic_launcher',
            },
        });
    }


    const [notifications, setNotifications] = useState([])

    var ws = React.useRef(new WebSocket('ws://localhost:8080/notifications')).current

    useEffect(() => {
        const notificationsList = notifications
        ws.onmessage = (e) => {
            const data = JSON.parse(e.data)

            notificationsList.push(data);
            setNotifications([...notificationsList])
            onDisplayNotification(data)
        };
    })

    console.log("notifications:", notifications)
    return <View style={styles.container}>
        <Text style={styles.title} >Documents</Text>

        <View style={styles.bellButton}>
            <Bell width={30} height={30} strokeWidth={3} stroke="black"></Bell>
            <View style={styles.badge}>
                <Text style={styles.textBadge}>{notifications.length}</Text>
            </View>
        </View>
    </View>

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        height: 70
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    bellButton: {
        paddingStart: 5,
        paddingTop: 5,
        borderRadius: 5,
        borderColor: 'whitesmoke',
        borderWidth: 1,
        alignSelf: 'center',
        width: 40,
        height: 40,
        flexDirection: 'row'
    },
    badge: {
        backgroundColor: "#4169e1",
        width: 10,
        height: 10,
        borderRadius: 5,
        marginStart: -10
    },
    textBadge: {
        fontSize: 8,
        color: 'white',
        alignSelf: 'center'
    }
})



const Bell = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 611.999 611.999"
        {...props}
    >
        <Path d="M570.107 500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203C381.969 34 347.883 0 306.001 0c-41.883 0-75.968 34.002-76.121 75.849-70.682 29.804-120.425 99.801-120.425 181.203v84.578c-.046 3.181-2.522 129.251-67.561 158.622a17.257 17.257 0 0 0 7.103 32.986h164.88c3.38 18.594 12.172 35.892 25.619 49.903 17.86 18.608 41.479 28.856 66.502 28.856 25.025 0 48.644-10.248 66.502-28.856 13.449-14.012 22.241-31.311 25.619-49.903h164.88a17.26 17.26 0 0 0 16.872-13.626 17.25 17.25 0 0 0-9.764-19.358zm-85.673-60.395c6.837 20.728 16.518 41.544 30.246 58.866H97.32c13.726-17.32 23.407-38.135 30.244-58.866h356.87zM306.001 34.515c18.945 0 34.963 12.73 39.975 30.082-12.912-2.678-26.282-4.09-39.975-4.09s-27.063 1.411-39.975 4.09c5.013-17.351 21.031-30.082 39.975-30.082zM143.97 341.736v-84.685c0-89.343 72.686-162.029 162.031-162.029s162.031 72.686 162.031 162.029v84.826c.023 2.596.427 29.879 7.303 63.465H136.663c6.88-33.618 7.286-60.949 7.307-63.606zm162.031 235.749c-26.341 0-49.33-18.992-56.709-44.246h113.416c-7.379 25.254-30.364 44.246-56.707 44.246z" />
        <Path d="M306.001 119.235c-74.25 0-134.657 60.405-134.657 134.654 0 9.531 7.727 17.258 17.258 17.258 9.531 0 17.258-7.727 17.258-17.258 0-55.217 44.923-100.139 100.142-100.139 9.531 0 17.258-7.727 17.258-17.258-.001-9.532-7.728-17.257-17.259-17.257z" />
    </Svg>
)


