import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/youtubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ videoId }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: relatedVideos,
  } = useQuery(["detail", videoId], () => youtube.relatedVideoList(videoId), {
    staleTime: 1000 * 60 * 5,
  });

  console.log(relatedVideos);
  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러</p>;
  return (
    // <p>list</p>
    <ul className="m-auto  hidden md:block lg:block ">
      {relatedVideos.map((video) => (
        <li key={video.id.kind} className="cursor-pointer mt-3">
          <VideoCard video={video.snippet} id={video.id.kind} watch />
        </li>
      ))}
    </ul>
  );
}
