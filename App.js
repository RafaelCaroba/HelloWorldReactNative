import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Button, View } from 'react-native';
import Textt from './text';

export default function App() {
  return (
    <View style={styles.container}>
    <Textt limite={10}/>
    <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingLeft: 10
  },
});
