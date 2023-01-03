import React, { useState } from "react";
import Aside from "../components/Aside";
import TagList from "../components/TagList";
import VideoCard from "../components/VideoCard";

export default function HomePage() {
  const [videos, setVideos] = useState(initialVideos);

  return (
    <div className="flex bg-yellow-500 text-blue-500 font-bold">
      <Aside />
      <div className="ml-5 mr-5">
        <TagList />
        {videos.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </div>
  );
}

const initialVideos = [
  {
    src: "https://i.ytimg.com/an_webp/8Qww31Iybvc/mqdefault_6s.webp?du=3000&sqp=CJ2F0J0G&rs=AOn4CLDzw8h_IZqMaKYfBsiNrayKxRg1wg",
    title: "천원vs만원vs십만원!! 홍대에서 사먹기!! 홍대놀려면 얼마 필요할까?!",
    channelTitle: "파뿌리",
    channelImg:
      "https://yt3.googleusercontent.com/ytc/AMLnZu_UlBPap4gBbyJ15ksezMro6I3lkDrkDtcfIZiAfQ=s176-c-k-c0x00ffffff-no-rj-mo",
    watched: "15만회",
    publishedAt: "3시간전",
  },
  {
    src: "https://i.ytimg.com/an_webp/8Qww31Iybvc/mqdefault_6s.webp?du=3000&sqp=CJ2F0J0G&rs=AOn4CLDzw8h_IZqMaKYfBsiNrayKxRg1wg",
    title: "천원vs만원vs십만원!! 홍대에서 사먹기!! 홍대놀려면 얼마 필요할까?!",
    channelTitle: "파뿌리",
    channelImg:
      "https://yt3.googleusercontent.com/ytc/AMLnZu_UlBPap4gBbyJ15ksezMro6I3lkDrkDtcfIZiAfQ=s176-c-k-c0x00ffffff-no-rj-mo",
    watched: "15만회",
    publishedAt: "3시간전",
  },
  {
    src: "https://i.ytimg.com/an_webp/8Qww31Iybvc/mqdefault_6s.webp?du=3000&sqp=CJ2F0J0G&rs=AOn4CLDzw8h_IZqMaKYfBsiNrayKxRg1wg",
    title: "천원vs만원vs십만원!! 홍대에서 사먹기!! 홍대놀려면 얼마 필요할까?!",
    channelTitle: "파뿌리",
    channelImg:
      "https://yt3.googleusercontent.com/ytc/AMLnZu_UlBPap4gBbyJ15ksezMro6I3lkDrkDtcfIZiAfQ=s176-c-k-c0x00ffffff-no-rj-mo",
    watched: "15만회",
    publishedAt: "3시간전",
  },
];
