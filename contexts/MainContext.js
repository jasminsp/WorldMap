import React, { useState } from "react";
import PropTypes from "prop-types";

const MainContext = React.createContext({});

const MainProvider = ({ children }) => {
  const [formToggle, setFormToggle] = useState(true);
  const [update, setUpdate] = useState(0);
  const [media, setMedia] = useState([]);

  return (
    <MainContext.Provider
      value={{
        formToggle,
        setFormToggle,
        update,
        setUpdate,
        media,
        setMedia,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node,
};

export { MainContext, MainProvider };