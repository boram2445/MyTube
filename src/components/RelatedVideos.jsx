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
  } = useQuery(["related", videoId], () => youtube.relatedVideoList(videoId), {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러</p>;

  return (
    <ul className="m-auto hidden md:block lg:block ">
      {relatedVideos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          video={video.snippet}
          id={video.id.videoId}
          watch
        />
      ))}
    </ul>
  );
}
