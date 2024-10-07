import { toast } from "react-hot-toast";

export const handleErrors = (error) => {
  if (error?.response?.data?.message) {
    return toast.error(error.response.data.message);
  } 
  else if (error?.response?.data?.result?.error?.validationMessages?.length > 0) {
    return error.response.data.result.error.validationMessages.forEach((message) => {
      toast.error(message);
    });
  } 
  else if (error?.response?.data?.result?.message) {
    return toast.error(error.response.data.result.message);
  } 
  else if(error?.message) {
    return toast.error(error?.message);
  }
};


export const handleSuccess = (message) => {
  toast.success(message);
};
