import axios from "axios";

export const saveToHistoryService = async (video, token) => {
  try {
    const response = await axios.post(
      "/api/user/history",
      { video },
      { headers: { authorization: token } }
    );
  } catch (error) {
    console.error(error);
  }
};
