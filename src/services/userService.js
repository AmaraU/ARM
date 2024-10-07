import api from "../api";
import { handleErrors } from "../utils/handleResponse";

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
      handleErrors(error)
      throw error;
    }
  },
};

export default userService;
