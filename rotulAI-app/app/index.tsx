import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Button, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { View, Text } from '@/components/Themed';
import { Image } from 'expo-image';
import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  } from '@expo-google-fonts/poppins';
import { useRouter } from 'expo-router';

export default function LoginScreen(): JSX.Element {
    const router = useRouter();
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        Poppins_900Black,
      });
    if (!fontsLoaded) {
        return <View />;
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/Logo.svg')} style={{ width: 132, height: 32     }} />
            <Text style={styles.title}>Olá,</Text>
            <Text style={styles.title}>Entre na sua conta</Text>
            <Button title="Entrar" onPress={() => router.navigate('feed')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});