export const errorHandler = (error: any) => {
  let message = error.message || "Server Error";
  if (error.response && error.response.data && error.response.data.message) {
    message = error.response.data.message;
  }
  return message;
};
