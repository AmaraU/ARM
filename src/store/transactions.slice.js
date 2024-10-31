import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleErrors } from "../utils/handleResponse";
import transactionService from "../services/transactionService";

export const getTransactionHistory = createAsyncThunk(
  "transactions/getTransactionHistory",
  async () => {
    try {
      const response = await transactionService.transactionHistory();
      return response;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
);

export const getBanks = createAsyncThunk("transactions/getBanks", async () => {
  try {
    const response = await transactionService.banks();
    return response;
  } catch (error) {
    handleErrors(error);
    throw error;
  }
});

const initialState = {};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionHistory.pending, (state) => {
        state.loading = true;
        state.value = [];
      })
      .addCase(getTransactionHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload.data.result.data;
      })
      .addCase(getTransactionHistory.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getBanks.pending, (state) => {
        state.bankloading = true;
        state.banks = [];
      })
      .addCase(getBanks.fulfilled, (state, action) => {
        state.bankloading = false;
        state.banks = action.payload.data.result.data;
      })
      .addCase(getBanks.rejected, (state) => {
        state.bankloading = false;
      });
  },
});

export default transactionSlice.reducer;
