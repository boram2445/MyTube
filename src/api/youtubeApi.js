import axios from 'axios';

export async function search(keyword) {
    // axios.get(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&${!keyword ? 'chart=mostPopular' : `q=${keyword}`}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
    // )
    const url = !keyword ? "/data/mostPopular.json" : "/data/search.json";
    return axios.get(url)
        .then(res => res.data.items);
}

//비디오 상세 내용 가져오기
export async function getDetail(videoId) {
    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
    // )
    return axios.get("/data/info.json")
        .then((res) => res.data.items[0].snippet);
}

//관련 비디오 가져오기
export async function getRelated(videoId) {
    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}`
    // )
    return axios.get("/data/related.json")
        .then((res) => res.data.items)

}

export async function getChannelInfo(channelId) {
    return axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
    )
        .then((res) => res.data.items[0].snippet.thumbnails.default.url);
}