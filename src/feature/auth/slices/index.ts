import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../user/typings";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      const isAuthenticated = action.payload;
      return { ...state, isAuthenticated };
    },
    setAuthenticatedUser: (state, action: PayloadAction<User>) => {
      return { ...state, user: action.payload, isAuthenticated: true };
    },
    clearAuthenticatedUser: (state, action) => {
      return initialState;
    },
    setAuthenticationError: (state, action: PayloadAction<string | null>) => {
      return { ...state, error: action.payload };
    },
  },
});

export const {
  setAuthenticatedUser,
  clearAuthenticatedUser,
  setAuthenticationError,
} = slice.actions;

export const authReducer = slice.reducer;
