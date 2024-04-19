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
import Header from '@/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';
import MyCarousel from '@/components/Carousel';
export default function HomeScreen(): JSX.Element {
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

    const carouselItems = [
      {
          title: 'Item 1',
          image: require('../../assets/images/icono.svg'),
      },
      {
          title: 'Item 2',
          image: require('../../assets/images/Logo.svg'),
      },
      {
          title: 'Item 3',
          image: require('../../assets/images/fono.svg'),
      },
  ];


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={{
                display: 'flex',
                backgroundColor: '#212B4E',
                height: '100%',
            }}>
              <Header 
                pageName="HOMEPAGE"
                name="Leonardo" 
                pic="https://www.w3schools.com/howto/img_avatar.png"
              />
                <TextInput 
                  style={styles.input} 
                  placeholder='Buscar serviço ou informção'
                  placeholderTextColor='rgba(94, 94, 94, 0.60)'
                  >
                </TextInput>
                <View style={{backgroundColor: '#fff', width: 332, height: 151, alignSelf: 'center', marginTop: 24, borderRadius: 20,
}}>
                  <MyCarousel/>  
                </View>                
                <View style={styles.bottomView}>
                  <Text style={{
                    color: '#081448',
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 20,
                    marginTop: 26,
                  }}>
                    Categorias
                  </Text>
                  <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 20,
                    backgroundColor: '#FCFCFC',
                    flexWrap: 'wrap',
                    height: 200,
                    width: 400,
                    
                  }}>
                    <TouchableOpacity style={{
                      width: 141, 
                      height: 166,
                      borderRadius: 10,
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      shadowColor: '#000',
                      shadowOffset: {
                          width: 0,
                          height: 4,
                      },
                      shadowOpacity: 0.25,
                      marginRight: 12,
                                     
                    }}
                    onPress={() => router.push('/documents',)}
                    >
                      <Image source={require('../../assets/images/Textual.svg')} style={{width: 84, height: 84, marginTop: 24}}/>
                      <Text style={styles.categoryText}>
                        Textual
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallCategory} onPress={() => router.navigate('documents')}>
                      <Image source={require('../../assets/images/mapa.svg')} style={{width: 36, height: 36, marginTop: 11}}/>
                      <Text style={styles.categoryTextSmall}>
                        Cartográficos
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallCategory} onPress={() => router.navigate('documents')}>
                      <Image source={require('../../assets/images/icono.svg')} style={{width: 36, height: 36, marginTop: 11}}/>
                      <Text style={styles.categoryTextSmall}>
                        Iconográficos
                      </Text>
                    </TouchableOpacity>
                    <View style={{
                      position: 'absolute',
                      flexDirection: 'row',
                      marginLeft: 139,
                      marginTop: 85,
                      marginBottom: 40,
                      backgroundColor: 'transparent',
                    }}>
                      <TouchableOpacity style={styles.smallCategoryBottom} onPress={() => router.navigate('documents')}>
                        <Image source={require('../../assets/images/fono.svg')} style={{width: 36, height: 36, marginTop: 11}}/>
                        <Text style={styles.categoryTextSmall}>
                          Sonoro
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.smallCategoryBottom} onPress={() => router.navigate('documents')}>
                        <Image source={require('../../assets/images/audiovisual.svg')} style={{width: 36, height: 36, marginTop: 11}}/>
                        <Text style={styles.categoryTextSmall}>
                          Audiovisuais
                        </Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                </View>
              </SafeAreaView>
                
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
    image: {
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 52,
        width: 132,
        height: 32
    },
    input : {
        backgroundColor: '#fff',
        borderRadius: 60,
        width: 339,
        height: 43,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 9,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,

    },
    bottomView: {
        display: 'flex',
        backgroundColor: '#FCFCFC',
        height: '45%',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        flexDirection: 'column',
        paddingRight: 36,
        paddingLeft: 36,
        top: 20,
        
    },
    categoryText: {
        color: '#5E5E5E',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        marginTop: 4,
    },
    categoryTextSmall: {
        color: '#5E5E5E',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 10,
        marginTop: 4,
        marginBottom: 10,
    },
    smallCategory: {
      width: 78, 
      height: 80,
      marginRight: 11,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.25,
    },
    smallCategoryBottom: {
      width: 78, 
      height: 80,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.25,
      marginLeft: 11,
    },


});
