import { createSlice } from "@reduxjs/toolkit";
import { getDeviceDetails } from "../../utils/deviceDetails";

const saveToSessionStorage = (data) => {
  sessionStorage.setItem("auth-onboarding", JSON.stringify(data));
};

const loadFromSessionStorage = () => {
  const data = sessionStorage.getItem("auth-onboarding");
  return data ? JSON.parse(data) : null;
};

const initialState = loadFromSessionStorage() || {
  phoneNumber: "",
  email: "",
  otpCode: "",
  title: "",
  gender: "",
  firstname: "",
  othername: "",
  surname: "",
  address: "",
  password: "",
  confirmPassword: "",
  username: "",
  ...getDeviceDetails(),
};

const authSlice = createSlice({
  name: "authOnboarding",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      const {
        phoneNumber,
        email,
        bvn,
        nin,
        otpCode,
        title,
        firstname,
        surname,
        gender,
        othername,
        address,
        photo,
        image,
        password,
        confirmPassword,
        accountNo,
      } = action.payload;
      state.phoneNumber =
        phoneNumber !== undefined ? phoneNumber : state.phoneNumber;
      state.email = email !== undefined ? email : state.email;
      if (bvn) {
        state.bvn = bvn !== undefined ? bvn : state.bvn;
      }
      if (nin) {
        state.nin = nin !== undefined ? nin : state.nin;
      }

      state.otpCode = otpCode !== undefined ? otpCode : state.otpCode;
      state.title = title !== undefined ? title : state.title;
      state.gender = gender !== undefined ? gender : state.gender;
      state.firstname = firstname !== undefined ? firstname : state.firstname;
      state.surname = surname !== undefined ? surname : state.surname;
      state.othername = othername !== undefined ? othername : state.othername;
      state.address = address !== undefined ? address : state.address;
      state.password = password !== undefined ? password : state.password;
      state.confirmPassword =
        confirmPassword !== undefined ? confirmPassword : state.confirmPassword;
      state.username = (state.email.split("@")[0]).toLowerCase()
      state.photo = photo !== undefined ? photo : state.photo;
      if (image) {
        state.image = image !== undefined ? image : state.image;
      }
      if (accountNo) {
        state.accountNo = accountNo !== undefined ? accountNo : state.accountNo;
      }
      saveToSessionStorage({ ...state, ...getDeviceDetails() });
    },
    resetDetails: () => {
      sessionStorage.removeItem("auth-onboarding");
    },
    loadDetailsFromStorage: (state) => {
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
});

export const { setDetails, resetDetails, loadDetailsFromStorage } =
  authSlice.actions;

export default authSlice.reducer;
