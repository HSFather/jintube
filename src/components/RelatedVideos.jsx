import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Oval } from "react-loader-spinner";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id));
  return (
    <>
      {isLoading && (
        <Oval
          ariaLabel="loading-indicator"
          height={30}
          width={30}
          strokeWidth={5}
          strokeWidthSecondary={1}
          color="red"
          secondaryColor="white"
        />
      )}
      {error && <p>문제</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
