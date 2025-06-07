import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation.");
      return;
    }

    setIsLoading(true);
    setError(null); // clear previous error

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
        setError(null);
      },
      (error) => {
        let message = "Failed to get your location.";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message =
              "Location access was denied. Please allow location access in your browser settings.";
            break;
          case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            message = "The request to get your location timed out.";
            break;
          default:
            message = "An unknown error occurred.";
        }
        console.error("Geolocation error:", error); // for debugging
        setError(message);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
