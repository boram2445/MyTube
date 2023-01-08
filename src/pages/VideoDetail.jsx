import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { FiThumbsUp, FiThumbsDown, FiMoreHorizontal } from "react-icons/fi";
import { BiShare } from "react-icons/bi";
import Description from "../components/Description";
import RelatedVideos from "../components/RelatedVideos";
import ChannelImg from "../components/ChannelImg";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { videoId } = useParams();

  const { title, description, channelId, channelTitle } = video;

  return (
    <section className="flex m-auto mt-6 pl-5 pr-5 justify-center max-w-5xl gap-4">
      <article>
        <iframe
          id="player"
          title={title}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}`}
        ></iframe>
        <div className="mt-3 max-w-2xl pl-1 pr-1 flex flex-col gap-2">
          <strong className="text-xl font-semibold">{title}</strong>
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className="flex gap-2">
                <ChannelImg channelId={channelId} />
                <div className="flex flex-col">
                  <p className="font-medium">{channelTitle}</p>
                  <small className="font-xs text-grey">구독자 312만명</small>
                </div>
                <button className="mt-1 mb-1 p-1.5 pl-4 pr-4 flex items-center  text-black text-sm gap-2 bg-white rounded-full hover:bg-grey hover:brightness-125">
                  구독
                </button>
              </div>
            </div>
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
      </article>
      <RelatedVideos videoId={videoId} />
    </section>
  );
}
