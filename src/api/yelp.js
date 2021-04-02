import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer p5xSU8mndGquO5VuXLSsgosbDIrwmh_DK21IdEqLM772odMrlTW4L-ivzoHHzbr8uuGUuWdACc7QASMgPmuNPc9hpHLsH5bZqxgzppBWC1z0qocelntU4jxEUeNaYHYx",
  },
});
