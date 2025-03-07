import React, { useEffect } from "react";

const MarketMap = () => {
  useEffect(() => {
    const initMap = () => {
      // Initialize the map
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 }, // Center of India
        zoom: 5,
      });

      // Get user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLocation = {
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

          // Fetch market data and add markers
          fetch("frontend/src/components/map/cleaned_market_data.json")
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              const markers = [];
              const radius = 50; // Set radius in kilometers

              data.forEach((market) => {
                if (!market.lat || !market.lng) return;

                // Calculate distance using the Haversine formula
                const distance = calculateDistance(
                  userLocation.lat,
                  userLocation.lng,
                  market.lat,
                  market.lng
                );

                if (distance <= radius) {
                  console.log(
                    `Market: ${market.market}, Distance: ${distance.toFixed(
                      2
                    )} km`
                  );

                  // Create a marker for the market
                  const marker = new window.google.maps.Marker({
                    position: { lat: market.lat, lng: market.lng },
                    map: map,
                    title: market.market,
                  });

                  markers.push(marker);

                  const commodityList = market.commodities
                    .map(
                      (c) =>
                        `${c.Commodity} (${c.Variety}): ₹${
                          c.Modal_x0020_Price
                        }<br> Distance: ${distance.toFixed(2)} km`
                    )
                    .join("<br>");
                  const infoContent = `
                    <h3>${market.market}, ${market.district}, ${market.state}</h3>
                    <p><strong>Commodities:</strong><br>${commodityList}</p>
                  `;

                  const infoWindow = new window.google.maps.InfoWindow({
                    content: infoContent,
                  });

                  marker.addListener("click", () => {
                    infoWindow.open(map, marker);
                  });
                }
              });

              // Add marker clustering
              new window.MarkerClusterer({ markers, map });
            })
            .catch((error) => {
              console.error("Error fetching market data:", error);
            });
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    const calculateDistance = (lat1, lng1, lat2, lng2) => {
      const R = 6371; // Radius of the Earth in kilometers
      const dLat = ((lat2 - lat1) * Math.PI) / 180;
      const dLng = ((lng2 - lng1) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    // Dynamically load the Google Maps script
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD7T9fLjR5IcfvOjMsE4kogAPOJW2tBjSE&callback=initMap";
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    window.initMap = initMap; // Assign the initMap function globally
    document.head.appendChild(googleMapsScript);

    // Load MarkerClusterer script
    const markerClustererScript = document.createElement("script");
    markerClustererScript.src =
      "https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js";
    markerClustererScript.async = true;
    markerClustererScript.defer = true;
    document.head.appendChild(markerClustererScript);
  }, []);

  return <div id="map" style={{ height: "600px", width: "100%" }}></div>;
};

export default MarketMap;
