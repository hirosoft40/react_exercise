import axios from "axios";

const KEY = "AIzaSyCxf5pTbUUd7ih5jKGa0p_LCwDBcF7Wqzo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
