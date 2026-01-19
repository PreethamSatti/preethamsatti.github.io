
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4 only once
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
        if (!window.gaInitialized) {
            ReactGA.initialize(measurementId);
            window.gaInitialized = true;
        }
    } else {
        console.warn("VITE_GA_MEASUREMENT_ID is missing in environment variables.");
    }
  }, []);

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
        // Send pageview with a custom path
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  return null;
};

// Add typescript declaration for window
declare global {
    interface Window {
        gaInitialized?: boolean;
    }
}

export default GoogleAnalytics;
