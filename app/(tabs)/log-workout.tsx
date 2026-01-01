import { Text, View, StyleSheet } from 'react-native';

export default function LogWorkout() {
    return (
         <View
               headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
               >
               <Text style={styles.titleText}>Log your workout</Text>
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