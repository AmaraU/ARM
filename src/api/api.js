import api from "./index.js";

export default {
  get(url) {
    return api.get("/get?url=" + url);
  },

  post(url, data) {
    return api.post("/post?url=" + url, data);
  },

};
