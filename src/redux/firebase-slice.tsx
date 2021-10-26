import firebase from "firebase/compat/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import {
  createAsyncThunk,
  createSlice,
  SerializedError,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface AuthState {
  email: string;
  password: string;
}

export const fbConfig = {
  apiKey: "AIzaSyCnoRki_c9E5DFvR1N7pVJZdZKi9PaKdyk",
  authDomain: "justdoit-e021f.firebaseapp.com",
  projectId: "justdoit-e021f",
  storageBucket: "justdoit-e021f.appspot.com",
  messagingSenderId: "926037645878",
  appId: "1:926037645878:web:cee55fd92c4a9b8c0e5697",
};

firebase.initializeApp(fbConfig);

const firebaseSlice = createSlice({
  name: "firebase",
  initialState: "",
  reducers: {},
});

export default firebaseSlice.reducer;
