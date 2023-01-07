import React from "react";
import { useYoutubeApi } from "../context/youtubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelImg({ channelId }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", channelId],
    () => youtube.channelImgUrl(channelId),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <img className="rounded-full w-8 h-8 cursor-pointer" src={url} alt="" />
  );
}
