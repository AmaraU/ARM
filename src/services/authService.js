import api from "../api";
import { handleErrors } from "../utils/handleResponse";

const authService = {
  signup: async (signupData) => {
    try {
      const response = await api.post("/account/register-new-user", signupData);
      return response;
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  sendOtp: async (otpData) => {
    try {
      const response = await api.post("/account/send-otp", otpData);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error
    }
  },

  completeRegistration: async (registrationData) => {
    try {
      const response = await api.post(
        "/account/finalize-registration",
        registrationData
      );
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },

  registerExisting: async (registrationData) => {
    try {
      const response = await api.post(
        "/account/register-existing-user",
        registrationData
      );
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },

  createAdditionalAccount: async (accountData) => {
    try {
      const response = await api.post(
        "/account/create-additional-account",
        accountData
      );
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },
  accountTierUpgrade: async (accountData) => {
    try {
      const response = await api.post(
        "/account/account-tier-upgrade",
        accountData
      );
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },
  login: async (loginData) => {
    try {
      const response = await api.post("/account/login", loginData);
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },
};

export default authService;
