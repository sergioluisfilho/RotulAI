import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

interface NovaPaginaProps {
  navigation: any; // Corrija o tipo de acordo com a tipagem de navigation
}

const Descrever: React.FC<NovaPaginaProps> = ({ navigation }) => {
  const { control, handleSubmit, formState } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Adicione aqui a lógica para enviar os dados do formulário e as imagens selecionadas
  };

  const router = useRouter();

  const handleVoltarPress = () => {
    router.back();
  };

  const handleArquivoPress = () => {
    // Adicione aqui a lógica para lidar com o clique no botão Arquivo
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#212B4E', paddingTop: 30}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleVoltarPress}>
            <Image source={require('../assets/images/Previous.svg')} style={{
              width: 30,
              height: 30,            
            }} />
          </TouchableOpacity>

          <Text style={styles.title}>Documento Cartográfico</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputRow}>
            <TouchableOpacity style={styles.inputContainer} onPress={handleArquivoPress}>
              <Text style={styles.label}>Arquivo</Text>
              <View style={[styles.customInput, { backgroundColor: '#CFEE2F' }]}>
                <Text style={[styles.input, { color: '#081448', fontWeight: '800', textAlign: 'center' }]}>Baixar</Text>
              </View>
            </TouchableOpacity>

            <Controller
              control={control}
              render={({ field }) => (
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Data</Text>
                  <View style={styles.customInput}>
                    <TextInput
                      {...field}
                      style={[styles.input, { color: 'black', textAlign: 'center' }]}
                      placeholder="XX / XX / XX"
                      placeholderTextColor="gray"
                    />
                  </View>
                </View>
              )}
              name="uf"
              rules={{ required: 'Campo obrigatório' }}
            />
          </View>

          <Controller
            control={control}
            render={({ field }) => (
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Título</Text>
                <View style={[styles.customInput, { width: '200%', marginBottom: 30 }]}>
                  <TextInput
                    {...field}
                    style={[styles.input, { color: 'black', width: '200%' }]}
                    placeholder="Escreva aqui o nome do documento"
                    placeholderTextColor="gray"
                  />
                </View>
              </View>
            )}
            name="titulo"
            rules={{ required: 'Campo obrigatório' }}
          />

          <Controller
            control={control}
            render={({ field }) => (
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Âmbito e conteúdo:</Text>
                <View style={[styles.customInput, styles.ambitoConteudoInput]}>
                  <TextInput
                    {...field}
                    style={[styles.input, { color: 'black', textAlignVertical: 'top', marginTop: -170 }]}
                    placeholder="Descreva o conteúdo do documento"
                    multiline
                    numberOfLines={4}
                    placeholderTextColor="gray"
                  />
                </View>
              </View>
            )}
            name="ambitoConteudo"
            rules={{ required: 'Campo obrigatório' }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.label, { textAlign: 'center', fontSize: 15 }]}>Pontos de acesso/indexação de assuntos</Text>
          <View style={[styles.customInput, { width: '185%', marginBottom: 30, marginLeft: 10 }]}>
            <TextInput
              style={[styles.input, { color: 'black', width: '200%' }]}
              placeholder="Ex: A Notícia (Jornal);"
              placeholderTextColor="gray"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={[styles.customInput, { width: '185%', height: '20%', marginBottom: 30, marginTop: -10, marginLeft: 10 }]}>
            <TextInput
              style={[styles.input, { color: 'black', width: '200%' }]}
              placeholder="Adicionar novo ponto"
              placeholderTextColor="gray"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#CFEE2F' }]} onPress={handleSubmit(onSubmit)} disabled={formState.isSubmitting}>
            <Text style={[styles.buttonText, { color: '#2C315B', marginBottom: 10 }]}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#212B4E',
    padding: 16,
    marginRight: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 60,
    marginTop: 5,
    fontWeight: '600',
  },
  formContainer: {
    flex: 1,
    padding: 16,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputContainer: {
    width: '48%',
  },
  inputContainer2: {
    width: '100%',
  },
  label: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 8,
    marginLeft: 2,
    fontWeight: '400',
    width: 350
  },
  customInput: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    paddingHorizontal: 16,
    
  },
  input: {
    fontSize: 16,
    color: '#4D4D4D',
  },
  ambitoConteudoInput: {
    width: 369,
    height: 224,
    flexShrink: 0,
    borderRadius: 21,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 200
  },
  button: {
    padding: 12,
    borderRadius: 60,
    width: 110,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginBottom: 50,
    marginTop: -100
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
  },
});

export default Descrever;
