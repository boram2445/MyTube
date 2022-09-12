import { useEffect, useState } from "react";
import VideoItem from "../videoItem/VideoItem";
import styles from "./videoList.module.css";

function VideoList() {
  const [videoLists, setVideoLists] = useState([]);
  const BASE_URL = "https://www.googleapis.com/youtube/v3";
  const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
  async function getVideoLists() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(
      `${BASE_URL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`,
      requestOptions
    );
    const data = await response.json();
    const items = data.items;
    console.log(items);
    setVideoLists(items);
  }

  useEffect(() => {
    getVideoLists();
  }, []);
  return (
    <ul className={styles.videoList}>
      {videoLists.map((item) => (
        <VideoItem key={item.id} video={item.snippet} />
      ))}
    </ul>
  );
}

export default VideoList;
