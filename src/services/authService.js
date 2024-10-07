import api from "../api";
import kyc from "../api/kyc";
import { handleErrors } from "../utils/handleResponse";

const authService = {
  checkBVNorNIN: async (number) => {
    try {
      const response = await api.get(
        "/validate/IsExistBvnOrNIN?number=" + number
      );
      console.log(response);
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
  verifyBVN: async (kycData) => {
    try {
      const response = await kyc.post("/QoreId/BVN", kycData);
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  verifyNIN: async (kycData) => {
    try {
      const response = await kyc.post("/QoreId/NIN", kycData);
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  livenessCheck: async (data, type) => {
    try {
      const response = await kyc.post(
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
        `/validate/OtpVerification?otpNumber=${otp}&phoneNumber=${phoneNumber}`,
        otpData
      );
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  // completeRegistration: async (registrationData) => {
  //   try {
  //     const response = await api.post(
  //       "/account/finalize-registration",
  //       registrationData
  //     );
  //     return response;
  //   } catch (error) {
  //     handleErrors(error);
  //   }
  // },

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
};

export default authService;
