import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
import userSlice from "./auth/user.slice";
import documentSlice from "./auth/document.slice";
import transactionsSlice from "./auth/transactions.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    document: documentSlice,
    transactions: transactionsSlice,
  },
});
