import React, { useEffect, useState } from 'react';
import {documents} from '../mock/documents.js';
import { Platform, StyleSheet, SafeAreaView, TouchableOpacity, Linking, Image, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';

const webViewStyle = `
body {
  margin: 0;
  padding: 0;
}
img {
  max-width: 100%;
  height: auto;
}
`;

export default function DocumentsScreen() {
  const router = useRouter();
    const openFile = (fileUrl: string) => {
      Linking.openURL(fileUrl);
    };
  
    return (
      <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.container}>
      <View style={styles.topBar}>
      <Image source={require('../assets/images/arrow.png')} />
      <Text style={styles.title}>Documentos</Text>
      </View>
      <View>
      <View style={styles.documentsFeed}>
      {documents.map((document, index) => (
              <View key={index} style={styles.filebox}>
              <TouchableOpacity onPress={()=>{openFile(document.url)}}>
                <View>
                <Text >{document.fileName}</Text>
                </View>
                <Text >{document.reward_points} pontos</Text>
                <Button title="Descrever" onPress={()=>{router.navigate('/descrever')}}></Button>
              </TouchableOpacity>

              </View>
            ))}
      </View>
    </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212B4E',
    marginTop: 10,
  },
  safeAreaView: {  
    flex: 1,
    backgroundColor: '#212B4E',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
    marginLeft: 20,
    backgroundColor: '#212B4E',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  filebox: {
    margin: 10
  },
  documentsFeed: {

  },
});
