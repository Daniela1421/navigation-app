import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform } from 'react-native';
import { TopTapNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios'
  ? <TabsIOS/>
  : <TabsAndroid/>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary, 
      }}
      screenOptions={({route}) => ({ 
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name){
            case 'Tab1Screen': 
              iconName= 'home-outline'
            break;

            case 'TopTabNavigator': 
              iconName= 'heart-outline'
            break; 

            case 'StackNavigator': 
              iconName= 'notifications-outline'
            break;  
          }
          return <Icon name={iconName} size={25} color={color}/>
        }
      })
    }
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Home'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title: 'Favorites'}} component={TopTapNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Notifications'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary, 
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0
        }, 
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name){
            case 'Tab1Screen': 
              iconName= 'home-outline'
            break;

            case 'TopTabNavigator': 
              iconName= 'heart-outline'
            break; 

            case 'StackNavigator': 
              iconName= 'notifications-outline'
            break;  
          }
          return <Icon name={iconName} size={25} color={color}/>
        }
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon: () => <Text>t1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title: 'Top'}} component={TopTapNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}