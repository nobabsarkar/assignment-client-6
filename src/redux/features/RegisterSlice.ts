import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  image: "",
  email: "",
  password: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword, setImage } =
  registerSlice.actions;

export default registerSlice.reducer;
