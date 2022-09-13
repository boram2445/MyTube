import { useEffect, useState } from "react";
import styles from "./videoItem.module.css";
import { unescapeHtml } from "../../utils/unescapeHtml";

function VideoItem({ video, youtube }) {
  const { thumbnails, title, channelId, channelTitle } = video;
  const convertTitle = unescapeHtml(title);
  const [channelImg, setChannelImg] = useState("");

  async function getChannelImg() {
    const img = await youtube.channelImg(channelId);
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
