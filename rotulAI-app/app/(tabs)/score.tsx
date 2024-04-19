import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Keyboard
, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback, } from 'react-native';
import Header from '@/components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}> 
     <ScrollView style={styles.container}>
     <Header 
      pageName="PONTOS"
      name="Leonardo" 
      pic="https://www.w3schools.com/howto/img_avatar.png"
    />
      <View style={styles.progressBox}>
        <Text style={styles.congratsText}>Parabéns, Leonardo!</Text>
        <Text style={styles.progressText}>Veja seu progresso</Text>

        <View style={styles.levelBox}>
          <Image source={require('../../assets/images/trophy.png')} style={styles.trophyIcon} />
          <View style={styles.pointsBox}>
          <Text style={styles.pointsTitle}>Pontos</Text>
          <Text style={styles.pointsText}>1.500</Text>
          </View>
          <Text style={styles.levelText}>1 Nível</Text>
        </View>

      </View>
      <Text style={styles.ChallengeText}>Desafios</Text>
      <View style={styles.challengesBox}>
        <View style={styles.challenge}>
          <Text style={styles.challengeCount}>3/10</Text>
          <Text style={styles.challengeText}>Textuais</Text>
          <TouchableOpacity style={styles.seeButton}>
            <Text style={styles.seeButtonText}>Ver</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.challenge}>
          <Text style={styles.challengeCount}>5/10</Text>
          <Text style={styles.challengeText}>Cartográficos</Text>
          <TouchableOpacity style={styles.seeButton}>
            <Text style={styles.seeButtonText}>Ver</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.challenge}>
          <Text style={styles.challengeCount}>2/10</Text>
          <Text style={styles.challengeText}>Sonoros</Text>
          <TouchableOpacity style={styles.seeButton}>
            <Text style={styles.seeButtonText}>Ver</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.ProductsText}>Produtos disponíveis</Text>
      <View style={styles.productsBox}>
        <TouchableOpacity style={styles.product}>
        <Image source={require('../../assets/images/ifood.png')} style={styles.productLogo} />
          <Text style={styles.productText}>Cupom de R$20</Text>
          <Text style={styles.pointsCost}>1000 pontos</Text>
          <TouchableOpacity style={styles.exchangeButton}>
            <Text style={styles.exchangeButtonText}>Trocar</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.product}>
          <Image source={require('../../assets/images/uber.png')} style={styles.productLogo} />
          <Text style={styles.productText}>Cupom de R$20</Text>
          <Text style={styles.pointsCost}>1000 pontos</Text>
          <TouchableOpacity style={styles.exchangeButton}>
            <Text style={styles.exchangeButtonText}>Trocar</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {  
    flex: 1,
    backgroundColor: '#212B4E',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#0000FF',
    padding: 20,
  },
  headerText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // Add styles for all elements following the design
  // Continue adding the remaining styles for each component based on the provided design

// Greeting Box
greetingBox: {
  alignItems: 'center',
  marginTop: 20,
},
greetingText: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#000',
},
welcomeText: {
  fontSize: 18,
  color: '#000',
},

// Progress Box
progressBox: {
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 20,
  borderTopLeftRadius: 20,
  alignItems: 'center',
},
congratsText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#081448',
},
ChallengeText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#081448',
  marginLeft: 30,
},
progressText: {
  fontSize: 18,
  color: '#081448',
  marginBottom: 10,
},
levelBox: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#CFEE2F',
  padding: 25,
  borderRadius: 10,
},
pointsBox: {
  marginRight: 40,
},
trophyIcon: {
  width: 59,
  height: 52,
  marginLeft: 20,
},
pointsText: {
  fontSize: 25,
  fontWeight: 'bold',
  color: '#761736',
  marginHorizontal: 10,
},
pointsTitle: {
  fontSize: 15,
  fontWeight: 'bold',
  color: '#081448',
  marginHorizontal: 10,
},
levelText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#761736',
  marginRight: 10
},

// Challenges Box
challengesBox: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 20,
  backgroundColor: '#FFFFFF',
},
challenge: {
  backgroundColor: '#FFFFFF',
  padding: 10,
  paddingVertical: 20,
  borderRadius: 10,
  alignItems: 'center',
  width: '30%', // Adjust based on the screen size
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5
},
challengeCount: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#761736',
},
challengeText: {
  fontSize: 13,
  color: '#5E5E5E',
  marginBottom: 10,
},
seeButton: {
  backgroundColor: '#761736',
  borderRadius: 20,
  padding: 5,
},
seeButtonText: {
  color: '#FFFFFF',
  fontSize: 10,
  paddingHorizontal: 10,
},

// Products Box
productsBox: {
  marginTop: 20,
  flexDirection: 'row',
},
product: {
  backgroundColor: '#fff',
  marginHorizontal: 20,
  borderRadius: 10,
  // padding: 20,
  alignItems: 'center',
  marginBottom: 90,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5
},
productLogo: {
  width: 145,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  height: 90,
},
ProductsText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#081448',
  marginLeft: 30,
  marginTop: 40,
},
productText: {
  fontSize: 13,
  fontWeight: 'bold',
  color: '#081448',
  marginVertical: 10,
},
pointsCost: {
  fontSize: 13,
  color: '#761736',
},
exchangeButton: {
  backgroundColor: '#761736',
  borderRadius: 50,
  padding: 10,
  marginTop: 10,
  paddingHorizontal: 20,
  marginBottom: 10, 
},
exchangeButtonText: {
  color: '#fff',
  fontSize: 10,
},

// Add additional styles if needed to match the design
});

export default App;
