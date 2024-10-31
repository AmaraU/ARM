import { handleErrors } from "../utils/handleResponse";
import api from "../api/api";

const utilsService = {
  getNationaties: async () => {
    try {
      const response = await api.get("/utilities/get-nationalities");
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },

  getSourceOfFunds: async () => {
    try {
      const response = await api.get("/utilities/source-of-funds");
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },

  getSecurityQuestion: async () => {
    try {
      const response = await api.get("/utilities/secret-questions");
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },

  getDocumentTypes: async () => {
    try {
      const response = await api.get("/utilities/document-types");
      return response.data;
    } catch (error) {
      handleErrors(error);
    }
  },
};
export default utilsService;
