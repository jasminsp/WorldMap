import { baseUrl } from "../utils/url";

// Server communication
const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      console.log("Success");
      return json;
    } else {
      const message = json.error
        ? `${json.message}: ${json.error}`
        : json.message;
      throw new Error(message || response.statusText);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const getDataByUrl = async (url) => {
  return await fetchData(`${baseUrl}${url}`);
};

export { fetchData, getDataByUrl };
