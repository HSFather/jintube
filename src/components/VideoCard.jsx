import React from "react";
import { Link } from "react-router-dom";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { formatAgo } from "../util/date";

register("ko", koLocale);

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
