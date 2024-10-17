import axios from "axios";

const API_URL = "http://localhost:52142/jsonapi";

export const fetchContent = async (contentType) => {
  try {
    const response = await axios.get(`${API_URL}/${contentType}`);
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.error(`Error fetching content for ${contentType}:`, error);
    throw error;
  }
};
