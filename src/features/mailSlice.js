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
    resetSelectedMail: (state) => {
      state.selectedMail = null;
    },
  },
});

export const { openedMail, resetSelectedMail } = mailSlice.actions;

export const selectedMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
