import { axiosInstance } from "../../../config";
const apiURL = process.env.REACT_APP_API_URL;

export const getAllOrder = async () => {
  try {
    let res = await axiosInstance.get(`${apiURL}/api/order/get-all-orders`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = async (oId, status) => {
  let data = { oId: oId, status: status };
  console.log(data);
  try {
    let res = await axiosInstance.post(`${apiURL}/api/order/update-order`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = async (oId) => {
  let data = { oId: oId };
  try {
    let res = await axiosInstance.post(`${apiURL}/api/order/delete-order`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
