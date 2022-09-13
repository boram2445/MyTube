import React from "react";
import styles from "./videoDetail.module.css";

function VideoDetail({ video }) {
  const videoId = video.id;
  console.log(video);
  const { title, channelTitle, description } = video.snippet;

  return (
    <div className={styles["detail-container"]}>
      {console.log(video)}
      <iframe
        title={videoId}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div className={styles["top-wrap"]}>
        <h2 className={styles["video-title"]}>{title}</h2>
        <p className={styles["channel-info"]}>
          조회수 3.3만회 &middot; 2시간 전
        </p>
      </div>
      <div className={styles["bottom-wrap"]}>
        <h3 className={styles["channel-title"]}>{channelTitle}</h3>
        <pre className={styles["description"]}>{description}</pre>
      </div>
    </div>
  );
}

export default VideoDetail;
