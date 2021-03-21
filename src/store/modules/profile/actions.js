import axios from "axios";

export const actions = {
  async changeInformation({ commit }, payload) {
    if (payload.image !== null) {
      console.log(payload.image);
      const postData = new FormData();
      postData.append("image", payload.image);
      console.log(postData);
      await axios.put("content/profile/image", postData);
    }
    const response = await axios.put("content/profile", {
      ...payload.changedData,
      imageUrl: ""
    });
    console.log(response);
    commit("changeInformation", response.data);
  },
  async getInformation({ commit }) {
    const response = await axios.get("content/profile");
    commit("changeInformation", response.data);
  },
  async updatePassword({ commit }, payload) {
    console.log(payload);
    const response = await axios.put("content/profile/password", payload);
    console.log(response);
    commit("updatePassword", response.data);
  }
};
