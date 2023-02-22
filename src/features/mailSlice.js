import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
  },

  reducers: {
    openedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { openedMail } = mailSlice.actions;

export const selectedMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
