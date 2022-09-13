const BASE_URL = "https://www.googleapis.com/youtube/v3";

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOpsions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `${BASE_URL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOpsions
    );
    const data = await response.json();
    const items = data.items;
    return items;
  }

  async search(query) {
    const response = await fetch(
      `${BASE_URL}/search?part=snippet&maxResults=25&q=${query}&key=${this.key}`,
      this.getRequestOpsions
    );
    const data = await response.json();
    const items = data.items;
    return items;
  }

  async channelImg(channelId) {
    const response = await fetch(
      `${BASE_URL}/channels?part=snippet&id=${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${this.key}`,
      this.getRequestOpsions
    );
    const data = await response.json();
    const img = data.items[0].snippet.thumbnails.default.url;
    return img;
  }
}

export default Youtube;
