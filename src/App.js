import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { darkTheme, lightTheme } from "./util/theme";

const queryClient = new QueryClient();
const GlobalStyle = createGlobalStyle`
  ${reset}  
  body {        
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
  }  
`;

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        {/* 네트워크 통신은 일어나지 않는 SearchHeader */}
        <SearchHeader isdarkmode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <YoutubeApiProvider>
          {/* outlet 어디서든 useQuery 사용가능*/}
          <QueryClientProvider client={queryClient}>
            {/* index.js 의 children에 접근 */}
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
      </ThemeProvider>
    </>
  );
}
