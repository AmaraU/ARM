import api from "./index.js";

export default {
  get(url) {
    return api.get("/get?url=" + url);
  },

  put(url, data) {
    return api.put("/put?url=" + url, data);
  },

  post(url, data) {
    return api.post("/post?url=" + url, data);
  },

  delete(url, data) {
    return api.delete("/delete?url=" + url, { data });
  },
};
