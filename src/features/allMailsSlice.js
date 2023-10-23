import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  emails: [],
  error: "",
};

export const fetchEmails = createAsyncThunk("email/fetchEmails", async () => {
  const response = await fetch("https://flipkart-email-mock.now.sh/");
  const json = await response.json();
  return json.list.map((email) => ({
    ...email,
    status: { isRead: false, isFavorite: false },
  }));
});

const allMailsSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const email = state.emails.find((email) => email.id === action.payload);
      if (email) {
        email.status.isRead = true;
      }
    },
    markAsFavorite: (state, action) => {
      const email = state.emails.find((email) => email.id === action.payload);
      if (email) {
        email.status.isFavorite = true;
      }
    },
  },
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

export const { markAsRead, markAsFavorite } = allMailsSlice.actions;

export const selectEmailById = (state, emailId) =>
  state.allMails.emails.find((email) => email.id === emailId);

export default allMailsSlice.reducer;
