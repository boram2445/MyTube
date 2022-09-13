import { useEffect, useState } from "react";
import VideoList from "../../components/videoList/VideoList";
import Navbar from "../../components/navbar/Navbar";
import styles from "./homePage.module.css";
function HomePage({ youtube }) {
  const [videoLists, setVideoLists] = useState([]);
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
      <Navbar onSearch={onSearch} />
      <VideoList videoLists={videoLists} youtube={youtube} />
    </div>
  );
}

export default HomePage;
