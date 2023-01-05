import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiThumbsUp, FiThumbsDown, FiMoreHorizontal } from "react-icons/fi";
import { BiShare } from "react-icons/bi";
import Description from "../components/Description";
import VideoCard from "../components/VideoCard";

export default function DetailPage() {
  const [videoInfo, setVideoInfo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { videoId } = useParams();

  useEffect(() => {
    // //비디오 상세 내용 가져오기
    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
    // )
    fetch("http://localhost:3000/data/info.json")
      .then((res) => res.json())
      .then((data) => setVideoInfo(data.items[0].snippet));

    //관련 비디오 가져오기
    //fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}`)
    fetch("http://localhost:3000/data/related.json")
      .then((res) => res.json())
      .then((data) => setRelatedVideos(data.items));
  }, []);

  const { title, description, channelId, channelTitle } = videoInfo;

  return (
    <div className="flex m-auto mt-6 pl-5 pr-5 justify-center max-w-5xl gap-4">
      <div>
        {/* 비디오 재생 */}
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
        ></iframe>

        <div className="mt-3 max-w-2xl pl-1 pr-1 flex flex-col gap-2">
          <strong className="text-xl font-semibold">{title}</strong>
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className="flex flex-col">
                <p className="font-medium">{channelTitle}</p>
                <small className="font-xs text-grey">구독자 312만명</small>
              </div>
              <button className="mt-1 mb-1 p-1.5 pl-4 pr-4 flex items-center  text-black text-sm gap-2 bg-white rounded-full hover:bg-grey hover:brightness-125">
                구독
              </button>
            </div>
            {/* 우측 버튼 */}
            <div className="flex gap-2 mt-1 mb-1 ">
              <div className="flex">
                <button className="p-1.5 pl-4 pr-4 flex items-center gap-2 bg-middle-grey rounded-l-full hover:brightness-125">
                  <FiThumbsUp className="text-lg" />
                  <span> 1.3천</span>
                </button>
                <button className="p-1.5 pl-4 pr-4 bg-middle-grey rounded-r-full hover:brightness-125">
                  <FiThumbsDown className="text-lg" />
                </button>
              </div>
              <button className="flex items-center gap-2 p-1.5 pl-4 pr-4 bg-middle-grey rounded-full hover:brightness-125">
                <BiShare className="text-lg" /> <span>공유</span>
              </button>
              <button className="p-1.5 pl-2 pr-2 bg-middle-grey rounded-full hover:brightness-125">
                <FiMoreHorizontal className="text-lg" />
              </button>
            </div>
          </div>
          <Description content={description} />
        </div>
      </div>
      <ul className="m-auto flex flex-col gap-4">
        {relatedVideos.map((video) => (
          <li key={video.id} className="cursor-pointer">
            <VideoCard video={video.snippet} id={video.id} watch />
          </li>
        ))}
      </ul>
      {/* <RelatedList /> */}
    </div>
  );
}
