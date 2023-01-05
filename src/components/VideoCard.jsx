import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import decodeUnescape from "../utils/decodeUnescape";
import getElapsedTime from "../utils/getElapsedTime";

export default function VideoCard({ video, id, videoType, search, watch }) {
  const {
    thumbnails,
    title,
    channelTitle,
    channelId,
    publishedAt,
    description,
  } = video;
  const [channelImg, setChannelImg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    //이걸 여기에서 호출해도 되는 걸까?
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
    )
      .then((res) => res.json())
      .then((data) =>
        setChannelImg(data.items[0].snippet.thumbnails.default.url)
      );
  });

  //home과 search에서 video 카드를 사용하는데, 형태가 너무 달라서 css 처리가 힘들어서 나누어 주었다.
  //근데 별로 효율적이지 않아보이는데 이렇게 해도 괜찮은걸까?
  let content;
  if (!search && !watch) {
    content = (
      <>
        <img className="rounded-2xl" src={thumbnails.medium.url} alt="" />
        <div className="flex mt-2.5">
          <img className="rounded-full w-9 h-9 mr-3" src={channelImg} alt="" />
          <div className="font-light text-xs ">
            <strong className="font-semibold text-sm text-ellipsis">
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
  } else if (search && videoType === "video") {
    content = (
      <>
        <img className="rounded-2xl" src={thumbnails.medium.url} alt="" />
        <div className="mt-2.5">
          <div className="font-light text-xs text-grey">
            <strong className="text-lg font-normal text-ellipsis text-white">
              {decodeUnescape(title)}
            </strong>
            <p>
              <span>조회수 9.9천회</span>
              <span className="font-medium"> &#183; </span>
              <span> {getElapsedTime(publishedAt)}</span>
            </p>
            <div className="mt-4 mb-4 flex">
              <img
                className="rounded-full w-6 h-6 mr-3"
                src={channelImg}
                alt=""
              />
              <p className="mt-2">{channelTitle}</p>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </>
    );
  } else if (search && videoType === "channel") {
    content = (
      <>
        <img
          className="rounded-full w-24 h-24"
          src={thumbnails.medium.url}
          alt=""
        />
        <div className="mt-2.5">
          <div className="font-light text-xs">
            <strong className="text-lg font-normal text-ellipsis">
              {channelTitle}
            </strong>
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
            <strong className="text-sm font-normal text-ellipsis text-white ">
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
    <article
      className={`${search ? "flex items-start gap-4" : "max-w-xs m-auto"} ${
        watch && "flex gap-2"
      }`}
      onClick={() => navigate(`/watch/${id}`)}
    >
      {content}
    </article>
  );
}
