import axios from "axios";

const baseURL = "https://wtsacademy.dedicateddevelopers.us/api/";

export const signInUser = async (signInInfo) => {
  const response = await axios.post(`${baseURL}/user/signin`, signInInfo);
  return response.data;
};

export const signUpUser = async (signUpInfo) => {
  const response = await axios.post(`${baseURL}/user/signup`, signUpInfo);
  return response.data;
};

export const getProfileDetails = async () => {
  const response = await axios.get(`${baseURL}/user/profile-details`, {
    headers: {
      "x-access-token": JSON.parse(localStorage.getItem("loginToken")),
    },
  });
  return response.data.data;
};

export const getProductList = async () => {
  const pageDetails = { page: 1, perpage: 10 };
  const response = await axios.post(`${baseURL}/product/list`, pageDetails, {
    headers: {
      "x-access-token": JSON.parse(localStorage.getItem("loginToken")),
    },
  });
  return response.data.data;
};

export const createProduct = async (userInfo) => {
  const response = await axios.post(`${baseURL}/product/create`, userInfo, {
    headers: {
      "x-access-token": JSON.parse(localStorage.getItem("loginToken")),
    },
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.post(`${baseURL}product/remove`, id, {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("loginToken")),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const getSingleProduct = async (id) => {
  const response = await axios.get(`${baseURL}/product/detail/${id}`, {
    headers: {
      "x-access-token": JSON.parse(localStorage.getItem("loginToken")),
    },
  });
  return response.data.data;
};

export const updateProduct = async (userInfo) => {
  const response = await axios.post(`${baseURL}product/update`, userInfo, {
    headers: {
      "x-access-token": JSON.parse(localStorage.getItem("loginToken")),
    },
  });
  return response.data.data;
};
