import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Button, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { View, Text } from '@/components/Themed';
import { Image } from 'expo-image';

type page = {
    name: string;
    pic: string;
    pageName: string;
};

export default function Header({name, pic, pageName}: page): JSX.Element {
    return (
        <View style={styles.container}>
          <Text style={styles.page}>{pageName}</Text>
          <View style={{display: 'flex', flexDirection: 'row', backgroundColor: '#212B4E'}}>
            <View style={{
              display: 'flex', 
              flexDirection: 'column', 
              backgroundColor: '#212B4E', 
              alignSelf: 'flex-start',
              }}>
              <Text style={styles.title}>Olá, {name}!</Text>
              <Text style={styles.subTitle}>Bem-vinde!</Text>
            </View>
            <View style={styles.frame}>
              <Image source={{uri: pic}} style={{width: 49, height: 45, borderRadius: 2}}/>
            </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '30%',
        paddingTop: 40,
        paddingRight: 34,
        paddingLeft: 34,
        backgroundColor: '#212B4E',
    },
    page: {
      fontSize: 28,
      fontFamily: 'Poppins_600SemiBold',
      alignSelf: 'center',
      marginBottom: 36,
      color: '#fff',
  },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        alignSelf: 'flex-start',
        color: '#fff',
    },
    subTitle: {
        fontSize: 18,
        fontFamily: 'Poppins_500Medium',
        color: '#fff',
        marginBottom: 45,

    },
    frame: {
        position: 'absolute',
        flexDirection: 'column',
        width: 55,
        height: 51,
        borderRadius: 6,
        borderWidth: 3,
        borderColor: '#CFEE2F',
        backgroundColor: 'transparent',
        left: 275,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    image: {
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 52,
        width: 132,
        height: 32
    },
});
