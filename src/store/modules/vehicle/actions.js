import axios from "axios";

export const actions = {
  async setInformation({ commit }, payload) {
    const response = await axios.post("content/profile/newvehicle", {
      ...payload.newVehicle,
      imagesUrl: []
    });
    if (payload.images.length !== 0) {
      payload.images.forEach(async item => {
        const postData = new FormData();
        postData.append("image", item);
        postData.append("id", response.data._id);
        await axios.put("content/profile/newvehicle/images", postData);
      });
    }
    console.log(response);
    commit("changeInformation", response.data);
  },
  async getAllVehicles({ commit }) {
    const response = await axios.get("content/profile/newvehicle");
    commit("setInformation", response.data);
  },
  async getVehicle({ commit }) {
    const response = await axios.get("content/profile/myvehicle");
    commit("setUserVehicles", response.data);
  },
  async removeVehicle({ commit }, payload) {
    console.log(payload);
    const response = await axios.delete(
      "content/profile/myvehicle/" + payload._id
    );
    commit("setUserVehicles", response.data);
  }
};
