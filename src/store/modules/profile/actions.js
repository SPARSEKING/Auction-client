import axios from "axios";

export const actions = {
  async changeInformation({ commit }, payload) {
    if (payload.image !== null) {
      const postData = new FormData();
      postData.append("image", payload.image);
      await axios.put("content/profile/image", postData);
    }
    const response = await axios.put("content/profile", {
      ...payload.changedData,
      imageUrl: ""
    });
    commit("changeInformation", response.data);
  },
  async getInformation({ commit }) {
    const response = await axios.get("content/profile");
    commit("changeInformation", response.data);
  },
  async updatePassword({ commit }, payload) {
    const response = await axios.put("content/profile/password", payload);
    commit("updatePassword", response.data);
  }
};
