import VideoItem from "../videoItem/VideoItem";
import styles from "./videoList.module.css";

function VideoList({ videoLists, youtube }) {
  return (
    <section className={styles["list-container"]}>
      <ul className={styles["video-list"]}>
        {videoLists.map((item) => (
          <VideoItem key={item.id} video={item.snippet} youtube={youtube} />
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
