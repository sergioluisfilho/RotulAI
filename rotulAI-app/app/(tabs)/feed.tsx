import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

type Archive = {
  title: string;
  description: string;
};


export default function TabOneScreen() {
  const archives = [
    {
      title: 'Documento 1',
      description: 'Descrição do Documento 1',
    },
    {
      title: 'Documento 2',
      description: 'Descrição do Documento 2',
    },
    {
      title: 'Documento 3',
      description: 'Descrição do Documento 3',
    },
    
  ];

  const renderItem = ({ item }: { item: Archive }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );  

  const renderFeed = () => {
    return (
      <FlatList
        data={archives}
        renderItem={renderItem}
        keyExtractor={(item: Archive) => item.title}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {renderFeed()}
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
    padding: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
