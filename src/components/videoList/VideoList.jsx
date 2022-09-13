import VideoItem from "../videoItem/VideoItem";
import styles from "./videoList.module.css";

function VideoList({ videoLists, youtube, setSelectedVideo, display }) {
  return (
    <section className={styles["list-container"]}>
      <ul className={styles[`video-${display}`]}>
        {videoLists.map((item) => (
          <VideoItem
            key={item.id}
            video={item}
            youtube={youtube}
            setSelectedVideo={setSelectedVideo}
            display={display}
          />
        ))}
      </ul>
    </section>
  );
}

export default VideoList;
