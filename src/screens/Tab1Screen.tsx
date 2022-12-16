import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1screen Effect');
  }, [])
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>  
      <Text>
        <TouchableIcon iconName="woman-outline" />
        <TouchableIcon iconName="bicycle-outline" />
        <TouchableIcon iconName="color-palette-outline" />
        <TouchableIcon iconName="paw-outline" />
      </Text>
    </View>
  )
}
