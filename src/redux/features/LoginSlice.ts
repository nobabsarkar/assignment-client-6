import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetLoginState: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { setEmail, setPassword, resetLoginState } = loginSlice.actions;

export default loginSlice.reducer;
