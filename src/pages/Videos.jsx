import React from "react";
import { useQuery } from '@tanstack/react-query';
import TagList from "../components/TagList";
import VideoCard from "../components/VideoCard";
import Aside from "../components/Aside";
import { useParams } from 'react-router-dom';
import { BsFilterSquare } from "react-icons/bs";
import { search } from '../api/youtubeApi';


export default function Videos() {
  const { keyword } = useParams();

  const { isLoading, error, data: videos } = useQuery(['videos', keyword], () => search(keyword))

  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="flex">
      <Aside />
      <div className="m-auto pl-8 pr-8">
        {!keyword ? <TagList /> :
          <div className="border-b border-middle-grey">
            <button className="flex gap-2 items-center hover:bg-middle-grey p-2 pl-4 pr-4 rounded-full">
              <BsFilterSquare className="text-xl" />
              <span className="text-sm">필터</span>
            </button>
          </div>
        }
        <ul className="m-auto mt-6 grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {videos.map((video) => {
            const id = !keyword ? video.id : video.id.videoId;
            return (
              <VideoCard key={id} video={video.snippet} id={id} search={keyword} />
            );
            // return (<li key={id}>{video.snippet.title}</li>)
          })}
        </ul>
      </div>
    </div>
  );
}

// videoType={
//   keyword && video.id.kind.includes("video") ? "video" : "channel"
// }