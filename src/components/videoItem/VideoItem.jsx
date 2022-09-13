import { useEffect, useState } from "react";
import styles from "./videoItem.module.css";
import { unescapeHtml } from "../../utils/unescapeHtml";

function VideoItem({ video }) {
  const { thumbnails, title, channelId, channelTitle } = video;
  const convertTitle = unescapeHtml(title);
  const [channelImg, setChannelImg] = useState("");

  async function getChannelImg() {
    const BASE_URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
    const requestOptions = {
      method: "GET",
    };
    const response = await fetch(
      `${BASE_URL}/channels?part=snippet&id=${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${API_KEY}`,
      requestOptions
    );
    const data = await response.json();
    const img = data.items[0].snippet.thumbnails.default.url;
    setChannelImg(img);
  }
  useEffect(() => {
    getChannelImg();
  }, []);
  return (
    <li className={styles["video-item"]}>
      <div className={styles["thumb-img"]}>
        <img alt={title} src={thumbnails.medium.url} />
      </div>
      <div className={styles["info-container"]}>
        <div className={styles["channel-img"]}>
          <img alt={channelTitle} src={channelImg} />
        </div>
        <div className={styles["right-wrapper"]}>
          <strong className={styles["video-title"]}>{convertTitle}</strong>
          <p className={styles["channel-title"]}>{channelTitle}</p>
          <p className={styles["channel-info"]}>
            조회수 3.3만회 &middot; 2시간 전
          </p>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;
