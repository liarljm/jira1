import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { User } from "screens/project-list/search-panel";
import * as auth from "auth_provider";
import { AuthForm, bootstrapUser } from "context/auth_context";
import { AppDispatch, RootState } from "store";
interface State {
  user: User | null;
}
const initialState: State = {
  user: null,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
const { setUser } = authSlice.actions;
export const login = (form: AuthForm) => (dispatch: AppDispatch) =>
  auth.login(form).then((user: any) => dispatch(setUser(user)));
export const register = (form: AuthForm) => (dispatch: AppDispatch) =>
  auth.register(form).then((user: any) => dispatch(setUser(user)));
export const logout = () => (dispatch: AppDispatch) =>
  auth.logout().then(() => dispatch(setUser(null)));
export const bootstrap = () => (dispatch: AppDispatch) =>
  bootstrapUser().then((user: any) => dispatch(setUser(user)));
export const selectUser = (state: RootState) => state.auth.user;
