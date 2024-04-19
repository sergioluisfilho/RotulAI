import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Image } from 'expo-image';

export default function MyCarousel() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Image
            style={{ width: 400, height: 151 }}
            source={require('../assets/images/FotoCarrossel.png')}
          />
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
