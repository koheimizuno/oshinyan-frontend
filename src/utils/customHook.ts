import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export const usePageViews = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};
