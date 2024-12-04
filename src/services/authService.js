// import api from "../api";
// import kyc from "../api/kyc";
import { handleErrors } from "../utils/handleResponse";
import api from "../api/api";
import kycApi from "../api/kyc.api";
import smileIdApi from "../api/smileId.api";

const authService = {
  checkBVNorNIN: async (number) => {
    try {
      const response = await api.get(
        "/validate/IsExistBvnOrNIN?number=" + number
      );
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
  verifyBVN: async (kycData) => {
    try {
      const response = await smileIdApi.get(
        "/Validation/ValidateBvn?bvn=" + kycData.number.trim()
      );
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  verifyNIN: async (kycData) => {
    try {
      const response = await smileIdApi.get(
        "/Validation/ValidateNin_V2?Nin_V2=" + kycData.number.trim()
      );
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  livenessCheck: async (data, type) => {
    try {
      const response = await kycApi.post(
        `/QoreId/${type === "bvn" ? "BVNLivenessCheck" : "NINLivenessCheck"}`,
        data
      );
      return response;
    } catch (error) {
      // handleErrors(error);
      console.log(error);
      throw error;
    }
  },
  signup: async (signupData) => {
    try {
      const response = await api.post("/account/register-new-user", signupData);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  sendOtp: async (otpData) => {
    try {
      const response = await api.post("/account/send-otp", otpData);
      // handleSuccess(response.data.mes)
      console.log(response);
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  verifyOtp: async (otpData) => {
    const { phoneNumber, otp } = otpData;
    try {
      const response = await api.get(
        `/validate/OtpVerification?otpNumber=${otp}%26phoneNumber=${phoneNumber}`
      );
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
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
      throw error;
    }
  },

  forgotPassword: async (forgotPasswordData) => {
    try {
      const response = await api.post(
        "/settings/forget-password",
        forgotPasswordData
      );
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  forgotPasswordOtp: async (forgotPasswordData) => {
    try {
      const response = await api.post(
        "/settings/forget-password-otp",
        forgotPasswordData
      );
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  resetPassword: async (resetPasswordData) => {
    try {
      const response = await api.post(
        "/settings/password-reset",
        resetPasswordData
      );
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  setSecurityQuestion: async (securityAnswers) => {
    try {
      const response = await api.post(
        "/settings/set-SecretQuestion-Answer",
        securityAnswers
      );
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
};

export default authService;
