import React, {useEffect, useContext}from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams{
//   id: number, 
//   nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}; 

export const PersonaScreen = ({navigation, route}: Props) => {
  //const params= route.params as RouteParams
  const params= route.params

  const {changeUserName} = useContext(AuthContext)

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre
    })
  }, [])

  useEffect(() => {
    changeUserName(params.nombre)
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {
          JSON.stringify(params, null, 3)
        }
      </Text>
      <Button
        title='Ir a página 1'
        onPress={() => navigation.navigate('Pagina1Screen')}
      />
    </View>
  )
}
