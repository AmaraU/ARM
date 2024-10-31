import { handleErrors } from "../utils/handleResponse";
import api from "../api/api";

const billsService = {
  getNetworkPlans: async () => {
    try {
      const response = await api.get("/bills/network-plans");
      return response;
    } catch (error) {
      handleErrors(error);
    }
  },
};

export default billsService;
