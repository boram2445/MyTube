import { useEffect, useState } from "react";
import VideoList from "../../components/videoList/VideoList";
import Navbar from "../../components/navbar/Navbar";
import styles from "./homePage.module.css";
import VideoDetail from "../../components/videoDetail/VideoDetail";
function HomePage({ youtube }) {
  const [videoLists, setVideoLists] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    // getMostPopular();
  }, []);

  async function getMostPopular() {
    const items = await youtube.mostPopular();
    setVideoLists(items);
  }
  async function onSearch(query) {
    const items = await youtube.search(query);
    setVideoLists(items);
  }
  return (
    <div className={styles["home-container"]}>
      <Navbar onSearch={onSearch} onClick={() => setSelectedVideo(null)} />
      <section className={styles["content-wrapper"]}>
        {selectedVideo && (
          <div className={styles["detail-wrapper"]}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles["list-wrapper"]}>
          <VideoList
            videoLists={videoLists}
            youtube={youtube}
            setSelectedVideo={setSelectedVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
