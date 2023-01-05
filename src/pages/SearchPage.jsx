import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { BsFilterSquare } from "react-icons/bs";

export default function SearchPage() {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => setVideos(data.items));
  }, []);

  console.log(videos);

  return (
    <div className="grow mt-4">
      <div className="border-b border-middle-grey">
        <button className="flex gap-2 items-center hover:bg-middle-grey p-2 pl-4 pr-4 rounded-full">
          <BsFilterSquare className="text-xl" />
          <span className="text-sm">필터</span>
        </button>
      </div>
      <ul className="m-auto mt-3 flex flex-col gap-4">
        {videos.map((video) => (
          <li key={video.id} className="cursor-pointer">
            <VideoCard
              video={video.snippet}
              videoType={video.id.kind.includes("video") ? "video" : "channel"}
              search
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
