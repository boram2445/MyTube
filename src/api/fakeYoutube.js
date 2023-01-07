import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword
      ? this.#searchByKeyword(keyword)
      : this.#mostPopular(keyword);
  }

  async #searchByKeyword(keyword) {
    return axios.get("/data/search.json").then((res) => res.data.items);
  }

  async #mostPopular(keyword) {
    return axios.get("/data/mostPopular.json").then((res) => res.data.items);
  }

  async relatedVideoList(videoId) {
    return axios.get("/data/related.json").then((res) => res.data.items);
  }

  async channelImgUrl(channelId) {
    return axios
      .get("/data/info.json")
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
}
