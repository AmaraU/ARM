import api from "../api/api";
import { handleErrors, handleSuccess } from "../utils/handleResponse";

const transferService = {
  transferFunds: async (payload) => {
    try {
      const response = await api.post("/transaction/funds-transfer", payload);
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  saveBeneficiary: async (payload) => {
    try {
      const response = await api.post("/profile/save-beneficiary", payload);
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  getBeneficiaries: async () => {
    try {
      const response = await api.get("/profile/get-beneficiaries");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  deleteBeneficiary: async (id) => {
    try {
      const response = await api.delete("/profile/delete-beneficiary", id);
      console.log(response);
      handleSuccess(response.data.result.data.retMsg);
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  accountInquiry: async (payload) => {
    const { AccountNumber, BankCode } = payload;
    try {
      const response = await api.get(
        `/transaction/account-enquiry?AccountNumber=${AccountNumber}%26BankCode=${BankCode}`
      );
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
};

export default transferService;