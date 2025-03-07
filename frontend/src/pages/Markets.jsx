// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export default function Markets() {
//   const [searchParams] = useSearchParams();
//   const state = searchParams.get("state");
//   const district = searchParams.get("district");
//   const [marketData, setMarketData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showMap, setShowMap] = useState(false);

//   useEffect(() => {
//     if (state && district) {
//       setLoading(true);
//       fetch(`http://34.121.0.250:8000/${state}/${district}`)
//         .then((response) => {
//           if (!response.ok) throw new Error("Failed to fetch market data");
//           return response.json();
//         })
//         .then((data) => {
//           console.log(data);
//           setMarketData(data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           setError(err);
//           setLoading(false);
//         });
//     }
//   }, [state, district]);

//   if (loading) {
//     return <div className="text-center py-12">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-center py-12 text-red-600">
//         Error: {error.message}
//       </div>
//     );
//   }

//   if (!state || !district || !marketData) {
//     return (
//       <div className="text-center py-12">Please search for a location.</div>
//     );
//   }

//   return (
//     <div>
//       <section
//         id="featured-markets"
//         className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
//       >
//         <div className="container mx-auto px-4" id="el-kuxqhnv8">
//           <div className="text-center mb-12" id="el-d68odkv5">
//             <h2
//               className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-3"
//               id="el-v5fd8jtp"
//             >
//               Markets in {district}, {state}
//             </h2>
//           </div>

//           <div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//             id="el-upisxseh"
//           >
//             {marketData.map((market, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
//               >
//                 <div className="p-6 flex-grow">
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                     {market.Market}
//                   </h3>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
//                     Location: {market.lat[0]}, {market.lng[0]}
//                   </p>
//                   <div>
//                     <h4 className="text-lg font-semibold mb-2">Commodities</h4>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-64 overflow-y-auto">
//                       {market.commodities.map((commodity, idx) => (
//                         <div
//                           key={idx}
//                           className="bg-green-50 dark:bg-green-900 p-3 rounded-md"
//                         >
//                           <p className="text-sm font-medium text-gray-900 dark:text-white">
//                             {commodity}
//                           </p>
//                           <p className="text-sm text-gray-600 dark:text-gray-300">
//                             ₹{market.prices[idx].toLocaleString("en-IN")}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div
//             className="mt-16 relative rounded-xl overflow-hidden shadow-lg"
//             id="el-52gtqant"
//           >
//             <h3 className="text-xl font-bold text-center mb-6" id="el-ljohxtjs">
//               Markets Near You
//             </h3>
//             {!showMap ? (
//               <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
//                 <div className="text-center p-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-4"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <rect
//                       x="3"
//                       y="3"
//                       width="18"
//                       height="18"
//                       rx="2"
//                       ry="2"
//                     ></rect>
//                     <circle cx="8.5" cy="8.5" r="1.5"></circle>
//                     <polyline points="21 15 16 10 5 21"></polyline>
//                   </svg>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Interactive map showing markets near your location
//                   </p>
//                   <button
//                     onClick={() => setShowMap(true)}
//                     className="mt-4 inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800 transition-colors duration-300"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 mr-2"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <circle cx="12" cy="12" r="10"></circle>
//                       <polygon points="10 8 16 12 10 16 10 8"></polygon>
//                     </svg>
//                     View Interactive Map
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <MarketsMap markets={marketData} />
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function MarketsMap({ markets }) {
//   if (!markets || markets.length === 0) return null;

//   const positions = markets.map((market) => [
//     parseFloat(market.lat[0]),
//     parseFloat(market.lng[0]),
//   ]);
//   const centerLat =
//     positions.reduce((sum, pos) => sum + pos[0], 0) / positions.length;
//   const centerLng =
//     positions.reduce((sum, pos) => sum + pos[1], 0) / positions.length;

//   return (
//     <MapContainer
//       center={[centerLat, centerLng]}
//       zoom={10}
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {positions.map((position, index) => (
//         <Marker key={index} position={position} />
//       ))}
//     </MapContainer>
//   );
// }

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MarketMap from "../components/MarketMap/MarketMap"; // Adjust the import path as needed

export default function Markets() {
  const [searchParams] = useSearchParams();
  const state = searchParams.get("state");
  const district = searchParams.get("district");
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (state && district) {
      setLoading(true);
      fetch(`http://34.121.0.250:8000/${state}/${district}`, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          console.log("Response:", response);
          if (!response.ok) {
            throw new Error(
              `Failed to fetch market data: ${response.status} ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data:", data);
          setMarketData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch Error:", err);
          setError(err);
          setLoading(false);
        });
    }
  }, [state, district]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        Error: {error.message}
      </div>
    );
  }

  if (!state || !district || !marketData) {
    return (
      <div className="text-center py-12">Please search for a location.</div>
    );
  }

  return (
    <div>
      <section
        id="featured-markets"
        className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4" id="el-kuxqhnv8">
          <div className="text-center mb-12" id="el-d68odkv5">
            <h2
              className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-300 mb-3"
              id="el-v5fd8jtp"
            >
              Markets in {district}, {state}
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            id="el-upisxseh"
          >
            {marketData.map((market, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {market.Market}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    Location: {market.lat[0]}, {market.lng[0]}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Commodities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                      {market.commodities.map((commodity, idx) => (
                        <div
                          key={idx}
                          className="bg-green-50 dark:bg-green-900 p-3 rounded-md"
                        >
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {commodity}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            ₹{market.prices[idx].toLocaleString("en-IN")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-16 relative rounded-xl overflow-hidden shadow-lg"
            id="el-52gtqant"
          >
            <h3 className="text-xl font-bold text-center mb-6" id="el-ljohxtjs">
              Markets Near You
            </h3>
            {!showMap ? (
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <div className="text-center p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <p className="text-gray-600 dark:text-gray-300">
                    Interactive map showing markets near your location
                  </p>
                  <button
                    onClick={() => setShowMap(true)}
                    className="mt-4 inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                    View Interactive Map
                  </button>
                </div>
              </div>
            ) : (
              <MarketMap markets={marketData} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
