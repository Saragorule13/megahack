import React, { useEffect } from "react";

const MarketMap = ({ markets }) => {
  useEffect(() => {
    const initMap = () => {
      // Initialize the map with a higher zoom level when markets are present
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center:
          markets.length > 0
            ? {
                lat: parseFloat(markets[0].lat[0]),
                lng: parseFloat(markets[0].lng[0]),
              }
            : { lat: 20.5937, lng: 78.9629 }, // Fallback to center of India
        zoom: markets.length > 0 ? 14 : 5, // Zoom in to 14 when markets are present (city-level detail)
      });

      // Get user's location (optional)
      let userLocation = null;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            console.log("User Location:", userLocation);

            // Place a marker for the user's location
            new window.google.maps.Marker({
              position: userLocation,
              map: map,
              title: "Your Location",
              icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            });

            // Add a blue radius around the user
            new window.google.maps.Circle({
              strokeColor: "#0000FF",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#0000FF",
              fillOpacity: 0.35,
              map,
              center: userLocation,
              radius: 5000, // 5 km radius
            });
          },
          (error) => {
            console.warn("Geolocation failed:", error);
          }
        );
      }

      // Add markers and 5km radius circles for markets
      const markers = [];
      markets.forEach((market) => {
        const lat = parseFloat(market.lat[0]);
        const lng = parseFloat(market.lng[0]);
        if (!lat || !lng) return;

        // Create a marker for the market
        const marker = new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: market.Market,
        });

        // Add a 5km radius circle around the market
        new window.google.maps.Circle({
          strokeColor: "#FF0000", // Red outline for market circles
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.2, // Lighter fill for visibility
          map,
          center: { lat, lng },
          radius: 1000, // 1 km radius
        });

        markers.push(marker);

        // Prepare commodity list for info window
        const commodityList = market.commodities
          .map(
            (c, idx) => `${c}: ₹${market.prices[idx].toLocaleString("en-IN")}`
          )
          .join("<br>");
        const infoContent = `
          <h3>${market.Market}</h3>
          <p><strong>Commodities:</strong><br>${commodityList}</p>
          <p><strong>Location:</strong> ${lat}, ${lng}</p>
        `;

        const infoWindow = new window.google.maps.InfoWindow({
          content: infoContent,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });

      // Add marker clustering (optional)
      if (window.MarkerClusterer) {
        new window.MarkerClusterer({ markers, map });
      }
    };

    // Load Google Maps script if not already loaded
    if (!window.google) {
      const googleMapsScript = document.createElement("script");
      googleMapsScript.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyD7T9fLjR5IcfvOjMsE4kogAPOJW2tBjSE&callback=initMap";
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      window.initMap = initMap;
      document.head.appendChild(googleMapsScript);

      // Load MarkerClusterer script
      const markerClustererScript = document.createElement("script");
      markerClustererScript.src =
        "https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js";
      markerClustererScript.async = true;
      markerClustererScript.defer = true;
      document.head.appendChild(markerClustererScript);
    } else if (window.google.maps) {
      initMap(); // If Google Maps is already loaded, initialize immediately
    }
  }, [markets]); // Re-run effect when markets change

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
};

export default MarketMap;