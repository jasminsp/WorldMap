// Contributor: Jasmin Partanen
// Fetching all countries from the API

// Imports
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../contexts/MainContext";
import { getDataByUrl } from "./CommonFunctions";

const useData = () => {
  const [countryArray, setCountryArray] = useState([]);
  const { update, setUpdate } = useContext(MainContext);

  // Fetch all countries by their position
  const fetchCountries = async () => {
    try {
      const locations = await getDataByUrl("positions");
      setCountryArray(locations);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [update, setUpdate]);

  return {
    countryArray,
  };
};

export { useData };
