import { Text, View, StyleSheet } from 'react-native';
import InputSearch from '@shared/components/input-search'
import ParallaxScrollView from '@/components/parallax-scroll-view';

export default function LogWorkout() {
    return (
         <View
               headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
               >
               <Text style={styles.titleText}>Log your workout</Text>
               <InputSearch />
           </View>
        )
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});