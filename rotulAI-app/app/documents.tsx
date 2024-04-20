import React, { useEffect, useState } from 'react';
import { documents } from '../mock/documents.js';
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
  const [selectedTab, setSelectedTab] = useState('description'); // Estado para controlar a tab selecionada

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
          {/* Tabs */}
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, selectedTab === 'description' && styles.selectedTab]}
              onPress={() => setSelectedTab('description')}>
              <Text style={styles.tabText}>Descrição</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedTab === 'review' && styles.selectedTab]}
              onPress={() => setSelectedTab('review')}>
              <Text style={styles.tabText}>Avaliação</Text>
            </TouchableOpacity>
          </View>
          {/* Conteúdo das tabs */}
          <View style={styles.documentsFeed}>
            {selectedTab === 'description' && (
              // Conteúdo para a tab "Descrição"
              documents.map((document, index) => (
                <View key={index} style={styles.filebox}>
                  <TouchableOpacity onPress={() => { openFile(document.url) }}>
                    <View>
                      <Text>{document.fileName}</Text>
                    </View>
                    <Text>{document.reward_points} pontos</Text>
                    <Button title="Descrever" onPress={() => { router.navigate('/descrever') }}></Button>
                  </TouchableOpacity>
                </View>
              ))
            )}
            {selectedTab === 'review' && (
              // Conteúdo para a tab "Avaliação"
              documents.map((document, index) => (
                <View key={index} style={styles.filebox}>
                  <TouchableOpacity onPress={() => { openFile(document.url) }}>
                    <View>
                      <Text>{document.fileName}</Text>
                    </View>
                    <Text>{document.reward_points} pontos</Text>
                    <Button title="Avaliar" onPress={() => { router.navigate('/avaliar') }}></Button>
                  </TouchableOpacity>
                </View>
              ))
            )}
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
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
});
