import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../hooks/useCities";
import { useEffect } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";

function MapUpdater({ lat, lng, shouldZoomIn }) {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      const zoomLevel = shouldZoomIn ? 13 : map.getZoom();
      map.setView([parseFloat(lat), parseFloat(lng)], zoomLevel);
    }
  }, [lat, lng, shouldZoomIn, map]);

  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });

  return null;
}

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();

  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
    error,
  } = useGeolocation();
  const { lat: latFromParams, lng: lngFromParams } = useUrlPosition();
  const defaultPosition = [31.514528, 34.450405];

  const shouldZoomIn =
    !!geoLocationPosition && !latFromParams && !lngFromParams;

  const mapCenter =
    latFromParams && lngFromParams
      ? [parseFloat(latFromParams), parseFloat(lngFromParams)]
      : geoLocationPosition
      ? [geoLocationPosition.lat, geoLocationPosition.lng]
      : defaultPosition;

  return (
    <div className={styles.mapContainer}>
      {(!geoLocationPosition || isLoadingPosition) && (
        <Button
          type="position"
          onClick={getPosition}
          disabled={isLoadingPosition}
        >
          {isLoadingPosition ? "Locating..." : "Use my location"}
        </Button>
      )}

      {error && (
        <p className={styles.error}>
          <strong>Error:</strong> {error}
        </p>
      )}

      <MapContainer
        className={styles.map}
        center={mapCenter}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <MapUpdater
          lat={latFromParams || geoLocationPosition?.lat}
          lng={lngFromParams || geoLocationPosition?.lng}
          shouldZoomIn={shouldZoomIn}
        />

        {cities.map((city) => {
          const { id, position, cityName, emoji } = city;
          return (
            <Marker
              key={id}
              position={[position.lat, position.lng]}
              eventHandlers={{
                click: () => {
                  navigate(
                    `cities/${id}?lat=${position.lat}&lng=${position.lng}`
                  );
                },
              }}
            >
              <Popup>
                {cityName} {emoji}
              </Popup>
            </Marker>
          );
        })}
        <DetectClick />
      </MapContainer>
    </div>
  );
}

export default Map;
