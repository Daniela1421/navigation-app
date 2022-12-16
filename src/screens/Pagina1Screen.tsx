import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 screen</Text>
      <Button
        title='Ir página 2'
        color='#7775E3'
        onPress = {() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
      }}> 
        Navegar con argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#7775E3'
          }}
          onPress={()=> navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Icon name='body-outline' size={35} color='white'/>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity> 

        <TouchableOpacity
          style={{ 
            ...styles.botonGrande,
            backgroundColor: '#ff9427'
          }}
          onPress={()=> navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Icon name='woman-outline' size={35} color='white'/>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity> 
      </View>
    </View>
  )
}

//import { DrawerScreenProps } from '@react-navigation/drawer';
//interface Props extends DrawerScreenProps<any, any>{};
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => {
  //       <Button 
  //         title='menu'
  //         onPress={() => navigation.toggleDrawer()}
  //       />
  //     }
      
  //   })
  // }, [])
