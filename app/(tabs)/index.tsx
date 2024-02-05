import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { COLORS, SIZES } from '../../constants';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import Welcome from '../../components/Welcome';
import RecentActivity from '../../components/RecentActivity'
import { StatusBar } from 'expo-status-bar';

export default function TabOneScreen() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: ""

        }}

      />
      <StatusBar style='none'/>

      <ScrollView>
        <View
          style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
              else {
                alert("Search something!")
              }
            }}
          />
          <RecentActivity />
        </View>

      </ScrollView>


    </SafeAreaView>
  )
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
