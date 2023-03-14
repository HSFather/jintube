import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { Oval } from "react-loader-spinner";
import { search } from "../api/youtube";
import FakeYoutube from "../api/fakeYoutebe";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });
  return (
    <>
      <div>Videos {keyword ? `${keyword}` : ""}</div>
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
