import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      {/* 네트워크 통신은 일어나지 않는 SearchHeader */}
      <SearchHeader />
      <YoutubeApiProvider>
        {/* outlet 어디서든 useQuery 사용가능*/}
        <QueryClientProvider client={queryClient}>
          {/* index.js 의 children에 접근 */}
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}
