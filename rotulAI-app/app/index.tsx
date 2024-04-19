import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Button, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { View, Text } from '@/components/Themed';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  } from '@expo-google-fonts/poppins';
import { useRouter } from 'expo-router';
import SubmitButton from '@/components/SubmitButton';

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{
                display: 'flex',
                backgroundColor: '#fff',
                height: '100%',
            }}>
                <View style={styles.container}>
                    <Image source={require('../assets/images/Logo.svg')} style={styles.image} />
                    <Text style={styles.title}>Olá,</Text>
                    <Text style={styles.subTitle}>Entre na sua conta</Text>
                    <Text style={styles.label}>
                        Email
                    </Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.label}>
                        Senha
                    </Text>
                    <TextInput style={styles.input} secureTextEntry={true}/>
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>
                            Esqueceu a senha?
                        </Text>
                    </TouchableOpacity>
                    <SubmitButton text="Entrar" onPress={() => router.navigate('feed')} />

                    
                </View>
                <Text style={styles.registerText}  >
                    Não tem uma conta? <Text style={{color: '#761736'}}>Cadastre-se</Text>
                </Text>
                <TouchableOpacity style={styles.govButton} onPress={() => router.navigate('feed')}>
                    <Text style={styles.govText}>
                        Entrar com  
                    </Text>
                    <Image source={require('../assets/images/Gov.svg')} style={styles.govImg} />
                </TouchableOpacity>
                <Image source={require('../assets/images/aaa.png')}
                    style={{
                        marginTop: 42,
                        alignSelf: 'center',
                        width: 113,
                        height: 71,
                    }} 
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '65%',
        paddingRight: 47,
        paddingLeft: 47,
        backgroundColor: '#212B4E',
        borderBottomEndRadius: 100,
        marginBottom: 70,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Poppins_600SemiBold',
        alignSelf: 'flex-start',
        color: '#fff',
    },
    subTitle: {
        fontSize: 17,
        fontFamily: 'Poppins_500Medium',
        color: '#fff',
        marginBottom: 45,

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
    registerText: {
        color: '#081448',
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium',
        letterSpacing: 0.78,
        fontSize: 13,
    },
    govButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 173,
        height: 40,
        marginTop: 18,
        textAlign: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#253673',

    },
    govText: {
        color: '#253673',
        fontSize: 15,
        letterSpacing: 1,
        marginRight: 2,
        
    },
    govImg: {
        width: 56,
        height: 20,
    },
    input : {
        backgroundColor: '#fff',
        borderRadius: 600,
        width: 296,
        height: 38,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 9,
    },
    label : {
        color: '#fff',
        fontSize: 13,
        fontFamily: 'Poppins_400Regular',
        marginBottom: 5,
        marginLeft: 5,
    },
    forgotPassword: {
        color: '#fff',
        fontSize: 10,
        fontFamily: 'Poppins_500Medium',
        marginLeft: 200,
    }
});
