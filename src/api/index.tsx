import axios from "axios";

export const fetchCatData = async () => {
  try {
    const response = await axios.get("cat");
    return response;
  } catch (error) {
    throw error;
  }
};
