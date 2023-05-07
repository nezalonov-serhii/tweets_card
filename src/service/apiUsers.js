import axios from "axios";

axios.defaults.baseURL = "https://645463d0c18adbbdfeb53283.mockapi.io/";

export const getAllPageTweets = async () => {
   try {
      const { data } = await axios.get("/users");

      return await data;
   } catch (error) {
      return Promise.reject(error.message);
   }
};

export const getPageUsersTwits = async (page = 1) => {
   try {
      const response = await axios.get(`/users?page=${page}&limit=3`);

      return await response.data;
   } catch (error) {
      return Promise.reject(error.message);
   }
};

export const updateUsersTweets = async (id, user) => {
   console.log(user);
   try {
      const response = await axios.put(`/users/${id}`, user);

      return await response.data;
   } catch (error) {
      return Promise.reject(error.message);
   }
};
