import api from "../api/api";
import { USER } from "../constants";
import { handleErrors, handleSuccess } from "../utils/handleResponse";

const transactionService = {
  transactionHistory: async (number) => {
    try {
      const { casaAccountBalances } = USER;
      const response = await api.get(
        `/report/transaction-history?Row=${number}%26AccountNumber=` +
          casaAccountBalances[0]?.accountnumber
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getDefaultTransactionLimit: async () => {
    try {
      const response = await api.get("/transaction/default-limits");
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  getTransactionLimit: async () => {
    try {
      const response = await api.get("/transaction/get-transaction-limit");
      return response;
    } catch (error) {
      console.log(error)
      throw error;
    }
  },

  setTransactionLimit: async (data) => {
    try {
      const response = await api.post(
        "/transaction/set-transaction-limit",
        data
      );
      console.log(response);
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },

  updateTransactionLimit: async () => {
    try {
      const response = await api.put("/transaction/update-transaction-limit");
      console.log(response);
    } catch (error) {
      handleErrors(error);
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

  statementRequest: async (data) => {
    try {
      const response = await api.post("/report/statement-request", data);
      handleSuccess(response.data.result.message);
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
};

export default transactionService;
