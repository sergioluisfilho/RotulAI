import React, {useState} from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Iconify } from 'react-native-iconify';
import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useFonts } from '@expo-google-fonts/poppins';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [activeTab, setActiveTab] = useState('feed');
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(8, 20, 72, 1)',
          paddingTop: 20,
          paddingBottom: 0,
          borderRadius: 60,
          marginBottom: 20,
          height: 60,
          width: '95%',
          alignSelf: 'center',
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#aaaa',
        headerShown: useClientOnlyValue(false, true),
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 15,
          marginBottom: 10,
          fontFamily: 'Poppins_500Medium',
        },
        
      }}>
      <Tabs.Screen
        name="feed"
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Iconify icon="bx:home-alt-2" color={color} size={29} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          tabBarLabel: 'Score',
          tabBarIcon: ({ color }) => <Iconify icon="akar-icons:trophy" color={color} size={29} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => <Iconify icon="iconamoon:profile" color={color} size={29} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarIconContainer: {
    alignItems: 'center',
  },
  activeTab: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: -20, // Ajuste conforme necessário
  },
});
