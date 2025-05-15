import React from "react";

import { useRef } from "react";
import { Carousel } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ZingChart from "./zingchart";
import MusicCategoriesSlider from "./Radiolibrary";
import HeaderHome from "./../HEAD/Header";
import ListenNear from "./ListenNear";
import Suggestions from "./Suggestions";
const Discover: React.FC = () => {
  const carouselRef = useRef<Carousel | null>(null);

  const music = [
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/5/6/a/d56a00088aa6274600d00f66f9240496.jpg",
      title: "Không lời",
      author: "Thiều Bảo Trâm",
      rank: "#1",
      date: "08.05.2025",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/f/a/2/3fa2e4ac4049f11b1b352aa82484a9a6.jpg",
      title: "10 Mất 1 Còn Không",
      author: "Lê Gia Bảo, BMZ",
      rank: "#2",
      date: "09.05.2025",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/3/4/1/7341e4e77e353f6968573efee1541c76.jpg",
      title: "01 Ngoại Lệ",
      author: "Jack - J97",
      rank: "#3",
      date: "05.05.2025",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/5/0/1/050158601068bfb3b08fd8da7276a32d.jpg",
      title: "Đừng Buồn Phiền Nữa",
      author: "Tùng Dương, Nguyễn Thương",
      rank: "#4",
      date: "07.05.2025",
    },
  ];
  return (
    <div className="min-h-screen bg-[#170f23] text-white font-sans">
      {/* Nghe gần đây section */}
      <div>
        <HeaderHome />
      </div>
      <div>
        <Carousel autoplay>
          <div>
            <img
              src={
                "https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/495267503_1379282120056325_1528799397929201282_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeE7xqCi2FJ9jyjMH_WlCQ1vCDS91isqhBoINL3WKyqEGqsL0cGtA3eLzCwi0soxtnoSPet2LY8BJM44ncYjoRyc&_nc_ohc=Ze_3DO6q97UQ7kNvwGwO6l8&_nc_oc=AdkbkcAiGrTydJSPuyDIKPE4d3zHzEshhVUDTPhczLegbWCKID9vuJ87rq_oXHuwDRs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&oh=03_Q7cD2QH4Hg0cUqfe_8nB5uHhTK90TuaCCGgLlstdB_RtHnT2Kg&oe=684AF8C6"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://scontent.fdad3-5.fna.fbcdn.net/v/t1.15752-9/495267245_1313729869732749_8431848503502898391_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHPwRZpF6Uo-UlAOB4olqVNDw0RNHYLjnAPDRE0dguOcFXIAhAmj8lXJgA9V9edUW-_uY-L9xQ__DuyNEwVgyZQ&_nc_ohc=0Z9brF_vhqYQ7kNvwHHlUaO&_nc_oc=AdmKrGhc7oldMis0iBZPP_N5oZIJDCka4E0nHDVuy4466Lt-FtBFk8EGUYAm1IYXFc0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&oh=03_Q7cD2QG4RxQsoxhAoIe0x26aXxOm4DTtj7HJ6L2BwfPiPeaLFw&oe=684AEB46"
              }
            />
          </div>
        </Carousel>
      </div>
      <div>
        <ListenNear />
      </div>
      {/* Gợi ý cho bạn section */}
      <div>
        <Suggestions />
      </div>
      <div className="mt-9 relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-white text-[1.5rem]">BXH Nhạc Mới</h2>
          <p className="flex items-center gap-x-4 text-white font-bold opacity-75">
            <span className="">TẤT CẢ</span>
            <IoIosArrowForward />
          </p>
        </div>
        <Carousel
          slidesToShow={3}
          slidesToScroll={1}
          autoplay
          dots={false}
          ref={carouselRef}
          className=""
        >
          {music.map((item, index) => (
            <div className="px-2" key={index}>
              <div className="flex gap-x-4 p-4 rounded-md bg-[#2f2739] text-white h-[10rem] w-[25rem]">
                <img
                  src={item.image}
                  className="w-[8rem] rounded-md hover:scale-105 duration-700"
                />
                <div className="flex flex-col w-full h-full">
                  <span className="font-bold">{item.title}</span>
                  <span className="font-medium opacity-65">{item.author}</span>
                  <div className="flex items-center justify-between mt-[1.5rem]">
                    <span className="text-[3rem] text-white">{item.rank}</span>
                    <span className="font-medium opacity-65">{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div
          className="rounded-full h-[30px] w-[30px] bg-white text-black flex items-center justify-center cursor-pointer absolute top-[7.5rem] left-[-1rem]"
          onClick={() => carouselRef.current?.prev()}
        >
          <MdKeyboardArrowLeft />
        </div>

        {/* Nút di chuyển phải */}
        <div
          className="rounded-full h-[30px] w-[30px] bg-white text-black flex items-center justify-center cursor-pointer absolute top-[7.5rem] right-[-1rem]"
          onClick={() => carouselRef.current?.next()}
        >
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div>
        <ZingChart />
      </div>
      <div>
        <MusicCategoriesSlider />
      </div>
    </div>
  );
};

export default Discover;
