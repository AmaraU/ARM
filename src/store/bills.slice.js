import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleErrors } from "../utils/handleResponse";
import billsService from "../services/billsService";

export const getNetworkPlans = createAsyncThunk(
  "bills/getNetworkPlans",
  async () => {
    try {
      const response = await billsService.getNetworkPlans();
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  }
);

const initialState = {
  networks: [],
};

const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNetworkPlans.pending, (state) => {
        state.loading = true;
        state.networks = [];
      })
      .addCase(getNetworkPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.networks =
          action.payload.data.result.data.responseEntity.body.subscribedServices;
      })
      .addCase(getNetworkPlans.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default billsSlice.reducer;
