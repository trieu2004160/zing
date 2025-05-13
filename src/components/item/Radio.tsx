import React from "react";
import vp1 from "../../img/vp1.jpg";
import vp3 from "../../img/vp3.jpg";
import blr from "../../img/bolero.jpg";
import us from "../../img/us.jpg";
import kpop from "../../img/kpop.jpg";
import acc from "../../img/acc.jpg";

interface Station {
  id: number;
  name: string;
  topLabel?: string;

  listeners: number;
  mainImage: string;
  avatarImage: string;
  mainColor: string;
  isLive: boolean;
}

const RadioStationCard: React.FC<{ station: Station }> = ({ station }) => {
  return (
    <div className="flex flex-col items-center" style={{ width: "150px" }}>
      <div className="relative mb-4">
        {/* Main circular image with colored border */}
        {/* Main circular image with colored border */}
        <div
          className="rounded-full relative border-4 border-red-500"
          style={{
            width: "150px",
            height: "150px",
            padding: "3px",
            background: `${station.mainColor}`,
          }}
        >
          {/* Inner content with main image */}
          <div className="rounded-full overflow-hidden w-full h-full">
            <img
              src={station.mainImage}
              alt={station.name}
              className="w-full h-full object-cover"
            />

            {/* Label overlay on the image */}
            {station.topLabel && (
              <div className="absolute top-6 w-full text-center">
                <span className="bg-black bg-opacity-40 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {station.topLabel}
                </span>
              </div>
            )}

            {/* Song name overlay on the image */}
          </div>
        </div>
        {/* LIVE tag */}
        {station.isLive && (
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2">
            <div className="bg-red-600 text-white text-xs font-bold px-3 py-0.5 rounded-lg">
              LIVE
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <h3 className="text-white font-bold text-lg">{station.name}</h3>
        <p className="text-gray-400 text-sm">{station.listeners} đang nghe</p>
      </div>
    </div>
  );
};

const RadioContent: React.FC = () => {
  const stations: Station[] = [
    {
      id: 1,
      name: "V-POP",

      listeners: 659,
      mainImage: vp3,
      avatarImage: "/api/placeholder/40/40",
      mainColor: "#ff7882",
      isLive: true,
    },
    {
      id: 2,
      name: "Chạm",

      listeners: 194,
      mainImage: vp1,
      avatarImage: "/api/placeholder/40/40",
      mainColor: "#afafaf",
      isLive: true,
    },
    {
      id: 3,
      name: "Bolero",

      listeners: 296,
      mainImage: blr,
      avatarImage: "/api/placeholder/40/40",
      mainColor: "#ffd8a9",
      isLive: true,
    },
    {
      id: 4,
      name: "US-UK",

      listeners: 59,
      mainImage: us,
      avatarImage: "/api/placeholder/40/40",
      mainColor: "#ff7a83",
      isLive: true,
    },
    {
      id: 5,
      name: "K-POP",
      listeners: 41,
      mainImage: kpop,
      avatarImage: "/api/placeholder/40/40",
      mainColor: "#a3dbff",
      isLive: true,
    },
    {
      id: 6,
      name: "Acoustic",

      listeners: 71,
      mainImage: acc,
      avatarImage: "/api/placeholder/40/40",
      mainColor: "#ffae68",
      isLive: true,
    },
  ];

  return (
    <div className=" min-h-screen p-8">
      <h1 className="text-white text-5xl font-bold mb-10">Radio</h1>
      <div className="flex flex-wrap gap-8">
        {stations.map((station) => (
          <RadioStationCard key={station.id} station={station} />
        ))}
      </div>
    </div>
  );
};

export default RadioContent;
