import React from "react";
import { FaPlay, FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Song {
  id: number;
  rank: number;
  change: number;
  title: string;
  artist: string;
  duration: string;
  image: string;
}

const songs: Song[] = [
  {
    id: 1,
    rank: 1,
    change: 1,
    title: "10 Mắt 1 Còn Không",
    artist: "Lê Gia Bảo, BMZ",
    duration: "04:50",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    rank: 2,
    change: 1,
    title: "01 Ngoại Lệ",
    artist: "Jack - J97",
    duration: "03:04",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    rank: 3,
    change: -2,
    title: "Không Lời",
    artist: "Thiều Bảo Trâm",
    duration: "03:43",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    rank: 4,
    change: 6,
    title: "Nép Nhà",
    artist: "Hòa Minzy, Obito, Hứa Kim Tuyền",
    duration: "04:28",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    rank: 5,
    change: 8,
    title: "Ngã Về Không",
    artist: "Đặng Thiên Chí",
    duration: "04:27",
    image: "https://via.placeholder.com/50",
  },
];

const NewmsContent: React.FC = () => {
  return (
    <div className="bg-[#1E1E2C] p-8 text-white min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-4xl font-bold">BXH Nhạc Mới</h1>
        <FaPlay className="text-xl" />
      </div>
      <div className="space-y-3">
        {songs.map((song) => (
          <div
            key={song.id}
            className="flex items-center justify-between py-2 px-4 rounded-lg bg-[#2A2A3D]"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">{song.rank}</span>
              {song.change > 0 ? (
                <FaArrowUp className="text-green-400" />
              ) : (
                <FaArrowDown className="text-red-400" />
              )}
              <img
                src={song.image}
                alt={song.title}
                className="w-10 h-10 rounded-md"
              />
              <div>
                <p className="font-semibold">{song.title}</p>
                <p className="text-gray-400 text-sm">{song.artist}</p>
              </div>
            </div>
            <span className="text-gray-400">{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewmsContent;
