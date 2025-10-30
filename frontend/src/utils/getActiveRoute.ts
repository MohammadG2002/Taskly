// utility to get the active route for highlighting in sidebar

import { useLocation } from "react-router-dom";

const getActiveRoute = () => {
  const location = useLocation();
  const activePath = location.pathname;

  const isActive = (path: string) => {
    return activePath === path;
  };

  return { activePath, isActive };
};

export default getActiveRoute;
