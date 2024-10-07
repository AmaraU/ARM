import api from "../api";
import { handleErrors } from "../utils/handleResponse";

const transactionService = {
  transactionHistory: async () => {
    try {
      const response = await api.get("/report/transaction-history");
      return response;
    } catch (error) {
      console.log(error)
      throw error;
    }
  },

  banks: async () => {
    try {
      const response = await api.get("/transaction/banks");
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
};

export default transactionService;
