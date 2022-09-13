import VideoItem from "../videoItem/VideoItem";
import styles from "./videoList.module.css";

function VideoList({ videoLists }) {
  return (
    <section className={styles["list-container"]}>
      <ul className={styles["video-list"]}>
        {videoLists.map((item) => (
          <VideoItem key={item.id} video={item.snippet} />
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
