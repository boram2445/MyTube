export default function getElapsedTime(videoTime) {
  const publishedTime = new Date(videoTime);
  const now = new Date();
  const elapsedTime = now.getTime() - publishedTime.getTime();

  let time = Math.floor(elapsedTime / 1000); //초단위로 변환

  if (time / 60 < 1) return "조금 전"; //1분 전
  else if (time / (60 * 60) < 1) return `${Math.floor(time / 60)}분전`;
  else if (time / (60 * 60 * 24) < 1)
    return `${Math.floor(time / (60 * 60))}시간 전`;
  else if (time / (60 * 60 * 24 * 7) < 1)
    return `${Math.floor(time / (60 * 60 * 24))}일 전`;
  else if (time / (60 * 60 * 24 * 7 * 30) < 1)
    return `${Math.floor(time / (60 * 60 * 24 * 7))}주 전`;
  else if (time / (60 * 60 * 24 * 356) < 1)
    return `${Math.floor(time / (60 * 60 * 24 * 7 * 30))}달 전`;
  else return `${Math.floor(time / (60 * 60 * 24 * 356))}년 전`;
}
