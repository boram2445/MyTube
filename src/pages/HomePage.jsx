import React, { useState, useEffect } from "react";
import TagList from "../components/TagList";
import VideoCard from "../components/VideoCard";

export default function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25')
    fetch("data/mostPopular.json")
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);

  return (
    <div className="m-auto pl-8 pr-8">
      <TagList />
      <ul className="m-auto mt-6 grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {videos.map((video) => (
          <li key={video.id} className="cursor-pointer">
            <VideoCard video={video.snippet} id={video.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
