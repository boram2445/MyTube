import { useEffect, useState } from "react";
import styles from "./videoItem.module.css";
import { unescapeHtml } from "../../utils/unescapeHtml";

function VideoItem({ video, youtube, setSelectedVideo, display }) {
  const { thumbnails, title, channelId, channelTitle } = video.snippet;
  const convertTitle = unescapeHtml(title);
  const [channelImg, setChannelImg] = useState("");
  useEffect(() => {
    getChannelImg();
  }, []);
  async function getChannelImg() {
    const img = await youtube.channelImg(channelId);
    setChannelImg(img);
  }
  return (
    <li
      className={styles[`video-${display}`]}
      onClick={() => setSelectedVideo(video)}
    >
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
