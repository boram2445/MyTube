import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items);
  }

  async #mostPopular() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }

  //관련 비디오 가져오기
  async relatedVideoList(videoId) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoId: videoId,
        },
      })
      .then((res) => res.data.items);
  }

  //채널 정보 가져오기
  async channelImgUrl(channelId) {
    return this.httpClient
      .get("channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
}
