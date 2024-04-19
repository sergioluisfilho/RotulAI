import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SubmitButton(props: {text: string, onPress: () => void}): JSX.Element {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#CFEE2F',
        width: 150,
        height: 40,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 39,
        alignSelf: 'center',
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.65,
    },
    buttonText: {
        color: '#2C315B',
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
        textTransform: 'uppercase',
    },
});