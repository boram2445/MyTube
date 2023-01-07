import React from "react";
import { useNavigate } from "react-router-dom";
import decodeUnescape from "../utils/decodeUnescape";
import getElapsedTime from "../utils/getElapsedTime";
import ChannelImg from "./ChannelImg";

export default function VideoCard({ video, id, search, watch }) {
  const {
    thumbnails,
    title,
    channelTitle,
    channelId,
    publishedAt,
    description,
  } = video;

  const navigate = useNavigate();

  //home과 search에서 video 카드를 사용하는데, 형태가 너무 달라서 css 처리가 힘들어서 나누어 주었다.
  //근데 별로 효율적이지 않아보이는데 이렇게 해도 괜찮은걸까?
  let content;
  if (!search && !watch) {
    content = (
      <>
        <img className="rounded-2xl" src={thumbnails.medium.url} alt="" />
        <div className="flex mt-2.5">
          <ChannelImg channelId={channelId} />
          <div className="ml-2 font-light text-xs ">
            <strong className="line-clamp-2 font-semibold text-sm">
              {title}
            </strong>
            <p className="text-grey mt-2">{channelTitle}</p>
            <p className="text-grey">
              <span>조회수 9.9천회</span>
              <span className="font-medium"> &#183; </span>
              <span> {getElapsedTime(publishedAt)}</span>
            </p>
          </div>
        </div>
      </>
    );
  } else if (search) {
    content = (
      <>
        <img className="rounded-2xl" src={thumbnails.medium.url} alt="" />
        <div className="mt-2.5">
          <div className="font-light text-xs text-grey">
            <strong className="line-clamp-2 text-lg font-normal text-white">
              {decodeUnescape(title)}
            </strong>
            <p>
              <span>조회수 9.9천회</span>
              <span className="font-medium"> &#183; </span>
              <span> {getElapsedTime(publishedAt)}</span>
            </p>
            <div className="mt-4 mb-4 flex">
              <p className="mt-2">{channelTitle}</p>
            </div>
            <p className="line-clamp-2">{description}</p>
          </div>
        </div>
      </>
    );
  } else if (watch) {
    content = (
      <div className="flex items-center gap-2 h-24 overflow-hidden">
        <img
          className="rounded-lg w-40 h-full"
          src={thumbnails.medium.url}
          alt=""
        />
        <div className="mt-2.5">
          <div className="font-light text-xs text-grey">
            <strong className="line-clamp-2 text-sm font-normal text-white ">
              {title}
            </strong>
            <p className="mt-2">{channelTitle}</p>
            <p>
              <span>조회수 9.9천회</span>
              <span className="font-medium"> &#183; </span>
              <span>{getElapsedTime(publishedAt)}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <li
      className={`cursor-pointer ${
        search ? "flex items-start gap-4" : "max-w-xs"
      } ${watch && "flex gap-2"}`}
      onClick={() => navigate(`/videos/watch/${id}`, { state: { video } })}
    >
      {content}
    </li>
  );
}
