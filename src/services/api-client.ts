import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2d7e41ecbafd4e599c1810107b449553",
  },
});
