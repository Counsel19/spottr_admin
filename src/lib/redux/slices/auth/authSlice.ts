import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const stringUser = localStorage.getItem('user')
const user = stringUser ?  JSON.parse(stringUser) : null;

const initialState = {
  user: user || null,
  token: token || null,
  isAuthenticated: !!token,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
