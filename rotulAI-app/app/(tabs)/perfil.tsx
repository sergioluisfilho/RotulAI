import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
  useFonts
} from '@expo-google-fonts/poppins';
import { Image } from 'expo-image';

export default function PerfilScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  const user = {
    username: '@Leonardo',
    pic: 'https://www.w3schools.com/howto/img_avatar.png',
    nome: 'Leonardo Seabra da Silva',
    nascimento: '01/01/2000',
    genero: 'Masculino',
    cpf: '123.456.789-00',
    rg: '12.345.678-9',
    email: 'leozinhobra@gmail.com',
    numero: '(11) 99999-9999',
    senha: '**********',
  }  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PERFIL</Text>
      <View style={{display: 'flex', flexDirection:'column', backgroundColor: 'transparent'}}>
        <View style={styles.frame}>
          <Image source={{uri: user.pic}} style={{width: 101, height: 95, borderRadius: 15}}/>
        </View>
        <View style={{display:'flex', flexDirection:'column', backgroundColor: 'transparent', marginLeft: 90}}>
          <Text style={styles.inputLabel}>Usuário</Text>
          <View style={styles.userView}>
            <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#001c99'}}>{user.username}</Text>
          </View>
        </View>
        <View style={{display:'flex', flexDirection:'column', backgroundColor: 'transparent', marginTop: 20}}>
          <Text style={styles.inputLabel}>Nome completo</Text>
          <View style={styles.inputLarge}>
            <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#001c99'}}>{user.nome}</Text>
          </View>
        </View>
        <View style={{display:'flex', flexDirection:'row', backgroundColor: 'transparent'}}>
          <View style={{display:'flex', flexDirection:'column', backgroundColor: 'transparent', marginTop: 20}}>
            <Text style={styles.inputLabel}>Data de nascimento</Text>
            <View style={styles.inputSmall}>
              <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#001c99'}}>{user.nascimento}</Text>
            </View>
          </View>
          <View style={{display:'flex', flexDirection:'column', backgroundColor: 'transparent', marginTop: 20}}>
            <Text style={styles.inputLabel}>Gênero</Text>
            <View style={styles.inputSmall}>
              <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#001c99'}}>{user.genero}</Text>
            </View>
          </View>
        </View>
        <View style={{display:'flex', flexDirection:'row', backgroundColor: 'transparent',}}>
          <View style={{display:'flex', flexDirection:'column', backgroundColor: 'transparent', marginTop: 20}}>
            <Text style={styles.inputLabel}>CPF</Text>
            <View style={styles.inputSmall}>
              <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#001c99'}}>{user.cpf}</Text>
            </View>
          </View>
          <View style={{display:'flex', flexDirection:'column', backgroundColor: 'transparent', marginTop: 20}}>
            <Text style={styles.inputLabel}>RG</Text>
            <View style={styles.inputSmall}>
              <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#001c99'}}>{user.rg}</Text>
            </View>
          </View>
        </View>
        <View style={{display:'flex', flexDirection:'column', backgroundColor: 'transparent', marginTop: 20}}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputLarge}>
            <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#001c99'}}>{user.email}</Text>
          </View>
        </View>
        <View style={{display:'flex', flexDirection:'row', backgroundColor: 'transparent',}}>
          <View style={{display:'flex', flexDirection:'column', backgroundColor: 'transparent', marginTop: 20}}>
            <Text style={styles.inputLabel}>Número de celular</Text>
            <View style={styles.inputSmall}>
              <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#001c99'}}>{user.numero}</Text>
            </View>
          </View>
          <View style={{display:'flex', flexDirection:'column', backgroundColor: 'transparent', marginTop: 20}}>
            <Text style={styles.inputLabel}>Senha</Text>
            <View style={styles.inputSmall}>
              <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16, color: '#001c99'}}>{user.senha}</Text>
            </View>
          </View>
        </View>

        

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#F9F9F9'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: '#001c99',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 14,
    color: '#001c99',
    marginBottom: 5,
    fontFamily: 'Poppins_600SemiBold',
    lineHeight: 20,
    marginLeft: 35,

  },
  inputLarge : {
    backgroundColor: '#F4F4F4',
    color: '#001c99',
    borderRadius: 60,
    width: 337,
    height: 39,
    paddingLeft: 18,
    paddingRight: 18,
    marginBottom: 21,
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 4,
        height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputSmall : {
    backgroundColor: '#F4F4F4',
    color: '#001c99',
    borderRadius: 60,
    width: 162,
    height: 39,
    paddingLeft: 18,
    paddingRight: 18,
    marginBottom: 21,
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 8,
  },
    shadowOpacity: 0.2,
    marginRight: 18,
  },
  frame: {
    width: 107,
    height: 100,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#CFEE2F',
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 255,
},
  userView: {
    display: 'flex',
    width: 156,
    height: 37,
    backgroundColor: '#CFEE2F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginBottom: 27,
    paddingLeft: 13,
    paddingRight: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 8,
  },
  shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 33,
    marginRight: 18,

  },

});
