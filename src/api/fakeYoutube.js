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
}
