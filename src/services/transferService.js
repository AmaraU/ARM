import api from "../api/api";
import { handleErrors } from "../utils/handleResponse";

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

  accountInquiry: async (payload) => {
    const { AccountNumber, BankCode } = payload;
    try {
      const response = await api.get(
        `/transaction/account-enquiry?AccountNumber=${AccountNumber}%26BankCode=${BankCode}`);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
};

export default transferService;
