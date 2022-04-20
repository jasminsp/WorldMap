import { useContext, useEffect, useState } from "react";
import { MainContext } from "../contexts/MainContext";
import { baseUrl } from "../utils/url";
import { fetchData } from "./CommonFunctions";

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const { update, setUpdate } = useContext(MainContext);

  // Fetching all countries with unicode flag
  const fetchCountries = async () => {
    try {
      const countryData = await getDataByUrl("flag/unicode");
      setMediaArray(countryData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchCountries();
    // return () => {};
  }, [update, setUpdate]);

  return {
    mediaArray,
  };
};

const getDataByUrl = async (url) => {
  return await fetchData(`${baseUrl}${url}`);
};

export { useMedia, getDataByUrl };
