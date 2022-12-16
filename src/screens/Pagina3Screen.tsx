import React from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';

interface Props extends StackScreenProps<any, any>{}; 

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 3 screen</Text>

      <Button
        title='Regresar'
        color='#7775E3'
        onPress={() => navigation.pop()}
      />
       <Button
        title='Ir a página 1'
        color='#7775E3'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}