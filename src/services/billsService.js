import { handleErrors } from "../utils/handleResponse";
import api from "../api/api";
import coralApi from "../api/coral.api";

const billsService = {
  getNetworkPlans: async () => {
    try {
      const response = await api.get("/bills/network-plans");
      return response;
    } catch (error) {
      handleErrors(error);
    }
  },

  getBillerGroup: async () => {
    try {
      const response = await coralApi.get("/Lookup/BillerGroup");
      return response;
    } catch (error) {
      handleErrors(error);
    }
  },

  getBillerGroupProvider: async (id) => {
    try {
      const response = await coralApi.get("/Lookup/BillerGroup/" + id);
      return response;
    } catch (error) {
      handleErrors(error);
    }
  },

  getBillerGroupPackage: async (slug) => {
    try {
      const response = await coralApi.get("/Lookup/BillersSlug/" + slug);
      return response;
    } catch (error) {
      handleErrors(error);
    }
  },

  makePayment: async (data) => {
    try {
      const response = await api.post("/bills/make-payment", data);
      return response;
    } catch (error) {
      handleErrors(error);
    }
  },

  vend: async (data) => {
    try {
      const response = await api.post("/bills/vend", data);
      return response;
    } catch (error) {
      handleErrors(error);
    }
  },
};

export default billsService;
