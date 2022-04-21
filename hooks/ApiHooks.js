import { useContext, useEffect, useState } from "react";
import { MainContext } from "../contexts/MainContext";
import { getDataByUrl } from "./CommonFunctions";

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const { update, setUpdate } = useContext(MainContext);

  // Fetching all countries with unicode flag
  const fetchCountries = async () => {
    try {
     // const countryData = await getDataByUrl("flag/unicode");
      const locations = await getDataByUrl("positions");
      setMediaArray(locations);
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

export { useMedia };
