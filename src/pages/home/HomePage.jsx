import { useState, useRef, useEffect } from "react";
import VideoList from "../../components/videoList/VideoList";
import Navbar from "../../components/navbar/Navbar";
import styles from "./homePage.module.css";
function HomePage() {
  const [videoLists, setVideoLists] = useState([]);
  const BASE_URL = "https://www.googleapis.com/youtube/v3";
  const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
  const inputRef = useRef();
  useEffect(() => {
    // getVideoLists();
  }, []);

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

  async function getSearchVideo(e) {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    const requestOption = {
      method: "GET",
    };
    const response = await fetch(
      `${BASE_URL}/search?part=snippet&maxResults=25&q=${inputValue}&key=${API_KEY}`,
      requestOption
    );
    const data = await response.json();
    const items = data.items;
    console.log(items);
    setVideoLists(items);
  }

  return (
    <div className={styles["home-container"]}>
      <Navbar inputRef={inputRef} getSearchVideo={getSearchVideo} />
      <VideoList videoLists={videoLists} />
    </div>
  );
}

export default HomePage;
