import {StyleSheet} from 'react-native';

export const colores = {
  // primary: '#5856d6', 
  primary: '#7775E3'
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20
  }, 
  title: {
    fontSize: 30, 
    marginBottom: 10
  }, 
  botonGrande: {
    width: 100, 
    height: 80, 
    backgroundColor: 'red', 
    borderRadius: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 10
  }, 
  botonGrandeTexto: {
    color: 'white', 
    fontSize: 15, 
    fontWeight: 'bold'
  },
  avatarContainer:{
    alignItems: 'center', 
    marginTop: 10
  }, 
  avatar: {
    width: 150, 
    height: 150,
    borderRadius: 100
  }, 
  menuContainer: {
    marginVertical: 30, 
    marginHorizontal: 50, 
  }, 
  menuBtn: {
    marginVertical: 10
  },
  menuTexto: {
    fontSize: 20
  }
});