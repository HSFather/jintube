import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    // # 프라이빗 함수는 클래스 외부에서는 호출 불가능
    return axios.get(
      `/videos/${params.relatedToVideoId ? "related" : "search"}.json`
    );
  }
  async videos() {
    // # 프라이빗 함수는 클래스 외부에서는 호출 불가능
    return axios.get("/videos/popular.json");
  }
  async channels() {
    // # 프라이빗 함수는 클래스 외부에서는 호출 불가능
    return axios.get("/videos/channel.json");
  }
}
