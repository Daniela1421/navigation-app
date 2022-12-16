import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo', //Titulo de la pagina tiene mayor peso aca, que en el stack con options para IOS
      headerBackTitle: 'Atras'
    })
  }, [])
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2 screen</Text>
      <Button
        title="Ir página 3"
        color='#7775E3'
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  )
}