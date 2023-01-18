import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMessage: null,
  },

  reducers: {
    openMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },
  },
});

export const { openMessage } = mailSlice.actions;

export const selectedMail = (state) => state.mail.selectedMessage;

export default mailSlice.reducer;
