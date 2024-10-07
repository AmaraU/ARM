import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleErrors } from "../../utils/handleResponse";
import userService from "../../services/userService";

export const getDashboardSummary = createAsyncThunk(
  "user/getDashboardSummary",
  async () => {
    try {
      const response = await userService.dashboardSummary();
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  }
);

export const getAccountBalance = createAsyncThunk(
  "user/getAccountBalance",
  async () => {
    try {
      const response = await userService.accountBalance();
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  }
);

const saveToSessionStorage = (data) => {
  const existingData = sessionStorage.getItem("user");
  const parsedData = existingData ? JSON.parse(existingData) : {};
  const updatedData = { ...parsedData, ...data };
  sessionStorage.setItem("user", JSON.stringify(updatedData));
};

const loadFromSessionStorage = () => {
  const data = sessionStorage.getItem("user");
  return data ? JSON.parse(data) : null;
};

const initialState = loadFromSessionStorage();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (_, action) => {
      saveToSessionStorage(action.payload.data);
      sessionStorage.setItem("authToken", action.payload.token.accessToken);
    },
    resetUserDetails: () => {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("authToken");
    },
    loadUserDetailsFromStorage: (state) => {
      const data = loadFromSessionStorage();
      if (data) {
        state.phoneNumber = data.phoneNumber;
        state.email = data.email;
        state.bvn = data.bvn;
        state.nin = data.nin;
        state.otpCode = data.otpCode;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardSummary.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDashboardSummary.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
        saveToSessionStorage(action.payload.data.result.data);
      })
      .addCase(getDashboardSummary.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAccountBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAccountBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.accountBalance = action.payload.data.result.accountInfo;
      })
      .addCase(getAccountBalance.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setUserDetails, resetUserDetails, loadUserDetailsFromStorage } =
  userSlice.actions;

export default userSlice.reducer;
