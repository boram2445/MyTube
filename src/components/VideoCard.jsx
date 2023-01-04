import React, { useEffect, useState } from "react";

export default function VideoCard({ video, id }) {
  const { thumbnails, title, channelTitle, channelId, publishedAt } = video;
  const [channelImg, setChannelImg] = useState("");

  useEffect(() => {
    //이걸 여기에서 호출해도 되는 걸까?
    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
    // )
    //   .then((res) => res.json())
    //   .then((data) =>
    //     setChannelImg(data.items[0].snippet.thumbnails.default.url)
    //   );
  });

  return (
    <article className="m-auto max-w-xs">
      <img className="rounded-2xl" src={thumbnails.medium.url} alt="" />
      <div className="flex  mt-2.5">
        <img className="rounded-full w-9 h-9 mr-3" src={channelImg} alt="" />
        <div className="font-light text-xs ">
          <strong className="font-semibold text-sm text-ellipsis">
            {title}
          </strong>
          <p className="text-grey mt-2">{channelTitle}</p>
          <p className="text-grey">
            <span>조회수 9.9천회</span>
            <span className="font-medium"> &#183; </span>
            <span> {publishedAt}시간</span>
          </p>
        </div>
      </div>
    </article>
  );
}
