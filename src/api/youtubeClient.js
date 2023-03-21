import axios from "axios";

export default class YoutubeClient {
  constructor() {
    // 엑시오스 통신을 할때 필요한 기본 셋팅을 아래에 설정해줌. 그걸 httpClient에 할당함.
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params) {
    // # 프라이빗 함수는 클래스 외부에서는 호출 불가능
    return this.httpClient.get("search", params);
  }
  async videos(params) {
    // # 프라이빗 함수는 클래스 외부에서는 호출 불가능
    return this.httpClient.get("videos", params);
  }
  async channels(params) {
    // # 프라이빗 함수는 클래스 외부에서는 호출 불가능
    return this.httpClient.get("channels", params);
  }
}
