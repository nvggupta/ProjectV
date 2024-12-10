import { createContext, useState } from "react";

export const RestaurantContext = createContext(null);

export const RestaurantProvider = (props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState();
  return (
    <RestaurantContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {props.children}
    </RestaurantContext.Provider>
  );
};