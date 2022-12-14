import { axiosInstance } from "../../../config";
const apiURL = process.env.REACT_APP_API_URL;

export const wishListProducts = async () => {
  let productArray = JSON.parse(localStorage.getItem("wishList"));
  try {
    let res = await axiosInstance.post(`${apiURL}/api/product/wish-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
