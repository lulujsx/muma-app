import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  usuario: {
    id: null,
    nombre: '',
    apellido: '',
    email: ''
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { token, usuario } = action.payload;
      state.token = token;
      state.usuario = usuario;
    },
    clearUserData: (state) => {
      state.token = '';
      state.usuario = {
        id: null,
        nombre: '',
        apellido: '',
        email: ''
      };
    }
  }
});

export const logout = () => async (dispatch) => {
  dispatch(clearUserData());
  await AsyncStorage.removeItem('authToken');
};

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;