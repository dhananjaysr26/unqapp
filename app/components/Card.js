import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors';
import Icon from './Icon';


const Card = ({ }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image style={styles.userPic} source={require("../assets/avatar.jpg")}></Image>
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.userName}>Dhananjay Singh</Text>
                    <View style={styles.headerSubContent}>
                        <Text style={styles.userID}>@dhananjaysr</Text>
                    </View>
                </View>
                <Text style={styles.time}>.24 min ago</Text>
            </View>
            <View style={styles.cardContent}>
                <Text>What's Your View on Budget 2022?</Text>
            </View>
            <View style={styles.cardImageContainer}>
                <Image style={styles.cardImage} source={require("../assets/Budget.jpg")}></Image>
            </View>
            <View style={styles.reactionContainer}>
                <Icon style={styles.heartIcon} name="heart-outline" />
                <View style={styles.responseContainer}>
                    <Icon style={styles.reactionIcon} name="twitter-retweet" />
                    <Icon style={styles.reactionIcon} name="twitter-retweet" />
                    <Icon style={styles.reactionIcon} name="twitter-retweet" />
                </View>

                <Icon style={styles.shareIcon} name="share-variant" />
            </View>




        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ccd4e0',
        height: 500,
        width: "100%",
        borderRadius: 30,
        margin: 0,
        marginBottom: 10,
        padding: 12,
    },
    header: {
        flex: 0,
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: "#bec3cc",
        padding: 10,
        borderRadius: 5
    },
    headerContent: {
        justifyContent: "flex-start"
    },
    headerSubContent: {
        flex: 1,
        flexDirection: 'row',
    },
    userPic: {
        width: 50,
        height: 50,
        alignContent: "flex-start",
        borderRadius: 25,
        marginRight: 10,
    },
    userName: {

    },
    userID: {
        flex: 1,
    },
    time: {
        paddingLeft: 10,
        paddingTop: 10
    },
    cardImageContainer: {
        width: "100%",
        marginTop: 10

    },
    cardImage: {
        width: "100%",
        height: 300,
        justifyContent: "center"

    },
    reactionContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginTop: 10,
        justifyContent: "space-around"
    },
    reactionIcon: {

    },
    responseContainer: {
        display: "flex",
        flexDirection: "row",
    },
    heartIcon: {
        justifyContent: "flex-start"
    },
    shareIcon: {
        justifyContent: "flex-end"
    }
});

export default Card
