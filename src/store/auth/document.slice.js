import { createSlice } from "@reduxjs/toolkit";

const saveToSessionStorage = (data) => {
  sessionStorage.setItem("document", JSON.stringify(data));
};

const loadFromSessionStorage = () => {
  const data = sessionStorage.getItem("document");
  return data ? JSON.parse(data) : null;
};

const initialState = loadFromSessionStorage()

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setDocumentDetails: (_, action) => {
      saveToSessionStorage(action.payload.customerDocumentUpload)
    },
    resetDocumentDetails: () => {
      sessionStorage.removeItem("document");
    },
    loadDocumentDetailsFromStorage: (state) => {
      const data = loadFromSessionStorage();
      if (data) {
        state.phoneNumber = data.phoneNumber;
        state.email = data.email;
        state.bvn = data.bvn;
        state.nin = data.nin;
        state.otpCode = data.otpCode;
      }
    },
  },
});

export const { setDocumentDetails, resetDocumentDetails, loadDocumentDetailsFromStorage } =
  documentSlice.actions;

export default documentSlice.reducer;
