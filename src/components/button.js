import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const onPress = (props) => props.setPressed(!props.pressed);

const button = props => {
    const {follow, setFollow} = props;
    const onButtonPress = () => {
        setFollow(follow == "FOLLOW"?"UNFOLLOW" : "FOLLOW")
    }
    return(
    <View>
        <TouchableOpacity style={styles.button} onPress={() => onButtonPress()} ><Text style={styles.text}>{follow}</Text></TouchableOpacity>
    </View>
    )
};

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#ff6600',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    text: {
        color: "white",
        fontWeight: "500"
    }
})

export default button;
