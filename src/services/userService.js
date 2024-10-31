import api from "../api/api";
import { handleErrors, handleSuccess } from "../utils/handleResponse";

const userService = {
  dashboardSummary: async () => {
    try {
      const response = await api.get("/report/dashboard-summary");
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  accountBalance: async () => {
    try {
      const response = await api.get("/profile/get-accounts");
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  setTransactionPin: async (data) => {
    try {
      const response = await api.post("/settings/set-transaction-pin", data);
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  getSetupStatus: async () => {
    try {
      const response = await api.get("/profile/setup-status");
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  verifyEmailOtp: async (data) => {
    try {
      const response = await api.post("/validate/EmailVerifyOtp", data);
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
  validateEmail: async (data) => {
    const { otpNumber, EmailAddress } = data;
    try {
      const response = await api.get(
        `/validate/EmailVerification?otpNumber=${otpNumber}%26EmailAddress=${EmailAddress}`
      );
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  getCustomerDetails: async () => {
    try {
      const response = await api.get("/profile/customer-details");
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  updateCustomerDetails: async (data) => {
    try {
      const response = await api.put("/profile/update-customer-details", data);
      handleSuccess("Profile updated successfully");
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  getContactDetails: async () => {
    try {
      const response = await api.get("/profile/contact-details");
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  updateContactDetails: async (data) => {
    try {
      const response = await api.put("/profile/update-contact-details", data);
      handleSuccess("Contact details updated successfully");
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  verifyPin: async (data) => {
    try {
      const response = await api.get(
        "/validate/TransactionPIN?transactionPIN=" + data
      );
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  changePassword: async (data) => {
    try {
      const response = await api.post("/settings/changepassword", data);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  resetPin: async (data) => {
    try {
      const response = await api.post("/settings/set-transaction-pin", data);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  getBvnInfo: async () => {
    try {
      const response = await api.get("/validate/bvn-info");
      console.log(response);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  updateNin: async () => {
    try {
      const response = await api.put("/validate/bvn-info");
      console.log(response);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
};

export default userService;
