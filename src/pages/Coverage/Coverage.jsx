import React, { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router-dom";
const Coverage = () => {
  const serviceCenters = useLoaderData();
  // console.log(serviceCenters);
  const mapRef = useRef(null);
  const position = [23.685, 90.3563];

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coordnate = [district.latitude, district.longitude];
      mapRef.current.flyTo(coordnate, 16);
      // flyTo
    }
    // console.log(district, "paisi");
  };

  return (
    <div className="border bg-white rounded-2xl">
      <div>
        <h1 className="text-4xl font-bold text-secondary">
          We are Availablle in 64 District
        </h1>
        <div>
          {/* search */}
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="search"
              name="location"
              className="border-secondary w-3/8 my-5 py-2 px-5 rounded-full ml-2  bg-primary/20 "
              placeholder="🔎 Search district"
            />
          </form>
        </div>

        {/* map */}
        <div>
          <h1 className="text-2xl font-bold text-secondary">
            We deliver almosst all over Bangladesh
          </h1>
          <div className="h-[800px] border-2 border-green-400">
            <MapContainer
              className="h-full"
              center={position}
              zoom={8}
              scrollWheelZoom={false}
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {serviceCenters.map((center, index) => (
                <Marker
                  key={index}
                  position={[center.latitude, center.longitude]}
                >
                  <Popup>
                    <strong>{center.district} </strong>. <br /> Service Aria:{" "}
                    {center.covered_area.join(", ")}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
