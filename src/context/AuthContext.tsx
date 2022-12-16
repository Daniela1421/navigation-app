import {createContext, useReducer} from 'react';
import { authReducer } from './AuthReducer';

//  Definir que información voy a tener en el context
export interface AuthState{
  isLoggedIn: boolean, 
  username?: string, 
  favoriteIcon?: string,
}

// estado inicial
export const authInicialState: AuthState = {
  isLoggedIn: false, 
  username: undefined, 
  favoriteIcon: undefined,
}

//Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps{
  authState: AuthState,
  signIn: () => void,
  logout: () => void,
  changeFavoriteIcon: (iconName: string) => void, 
  changeUserName: (username: string) => void
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

//proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInicialState);
  
  const signIn = () => {
    dispatch({type: 'sigIn'})
  }

  const changeFavoriteIcon = (iconName : string) => {
    dispatch({type: 'changeFavIcon', payload: iconName})
  }

  const logout = () => {
    dispatch({type: 'logout'})
  }

  const changeUserName = (username: string) => {
    dispatch({type: 'changeUserName', payload: username})
  }

  return (
    <AuthContext.Provider value={{
      authState: authState,
      signIn, 
      logout,
      changeFavoriteIcon, 
      changeUserName
    }}>
      {children}
    </AuthContext.Provider>
  )
}