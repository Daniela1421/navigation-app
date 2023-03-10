import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props}/>}
      // screenOptions={{ 
      //   drawerPosition:'right', 
      // }}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Contenedor del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif'
          }}
          style={styles.avatar}
        />
      </View>

       {/*Opciones de menú */}
        <View style={styles.menuContainer}> 
          <TouchableOpacity 
            style={{
              ...styles.menuBtn, 
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('Tabs')}
          >
            <Icon name='compass-outline' size={25} color='black'/>
            <Text style={styles.menuTexto}> Navegación</Text>
          </TouchableOpacity>
          <TouchableOpacity 
             style={{
              ...styles.menuBtn, 
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('SettingsScreen')}
          >
            <Icon name='settings-outline' size={25} color='black'/>
            <Text style={styles.menuTexto}> Ajustes</Text>
          </TouchableOpacity>
        </View>

    </DrawerContentScrollView>
  );
}