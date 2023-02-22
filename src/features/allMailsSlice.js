import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  emails: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchEmails = createAsyncThunk("email/fetchEmails", async () => {
  const response = await fetch("https://flipkart-email-mock.now.sh/");
    const json = await response.json();
    return json.list
});

const allMailsSlice = createSlice({
  name: "email",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEmails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEmails.fulfilled, (state, action) => {
      (state.loading = false),
        (state.emails = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchEmails.rejected, (state, action) => {
      (state.loading = false),
        (state.emails = []),
        (state.error = action.error.message);
    });
  },
});

export default allMailsSlice.reducer;
