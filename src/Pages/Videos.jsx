import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { Oval } from "react-loader-spinner";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import SideBar from "../components/SideBar";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });
  return (
    <>
      <section className="flex flex-col">
        <SideBar />
      </section>
      <section>
        <div> {keyword ? `${keyword}` : ""}</div>
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-4">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
