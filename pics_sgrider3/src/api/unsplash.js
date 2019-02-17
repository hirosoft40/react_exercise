import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e575cad38faa0ce3272c13ba6345bb36bf582498e6d6ad674b7f6ba26d21de66"
  }
});
