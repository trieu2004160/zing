import React from "react";
import sug1 from "../../img/dis2.jpg";
import sug2 from "../../img/dis3.jpg";
import sug3 from "../../img/dis4.jpg";
import sug4 from "../../img/dis5.jpg";
import sug5 from "../../img/dis6.jpg";
import sug6 from "../../img/dis7.jpg";
import sug7 from "../../img/dis8.jpg";
import sug8 from "../../img/dis9.jpg";
import sug9 from "../../img/dis10.jpg";
import sug10 from "../../img/dis1.png";
import sug11 from "../../img/dis11.png";
import sug12 from "../../img/dis12.png";
import sug13 from "../../img/dis13.png";
import sug14 from "../../img/dis14.png";
import sug15 from "../../img/dis15.png";
import sug16 from "../../img/dis16.png";
import sug17 from "../../img/dis17.png";
import top1 from "../../img/top1.png";
import top2 from "../../img/top2.png";
import top3 from "../../img/top3.png";
import top4 from "../../img/top4.png";
import top5 from "../../img/top5.png";
import { useRef } from "react";
import { SlArrowRight } from "react-icons/sl";
import { Carousel } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ZingChart from "./zingchart";
const Discover: React.FC = () => {
  const carouselRef = useRef<any>(null);

  const suggestItems = [
    {
      title: "Nhớ Mãi Chuyến Đi Này",
      imageUrl: sug1,
      artist: "Forest Studio, Bùi Công Nam, Wren Evans",
    },
    {
      title: "Không Cần Phải Nói Nhiều",
      imageUrl: sug2,
      artist: "tlinh, Hoàng Tôn",
    },
    {
      title: "Chân Tình",
      imageUrl: sug3,
      artist: "Quang Trung, tlinh, DTAP",
    },
    {
      title: "Có Chàng Trai Viết Lên Cây",
      imageUrl: sug4,
      artist: "Phan Mạnh Quỳnh",
    },
    { title: "MANIAC", imageUrl: sug5, artist: "VIVIZ" },
    {
      title: "Ý Trời",
      imageUrl: sug6,
      artist: "Đông Nhi, tlinh",
    },
    {
      title: "XOAY HỀ KHÁC LA",
      imageUrl: sug7,
      artist: "Trúc Nhân, OSAD, Linh Cáo, Bùi Công Nam",
    },
    {
      title: "Mặc Sự Đời! (feat. Tlinh)",
      imageUrl: sug8,
      artist: "Rap Việt, tlinh",
      premium: true,
    },
    {
      title: "Xui Hay Vui",
      imageUrl: sug9,
      artist: "tlinh, MONO, Onionn",
    },
  ];

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
      <div className="px-8 pt-6 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Nghe Gần Đây</h2>
          <div className="flex items-center gap-1 text-gray-400">
            <span>TẤT CẢ</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        <div className="flex gap-6 mb-8 overflow-x-auto pb-2">
          <div className="flex flex-col w-36 min-w-36">
            <div className="w-36 h-36 mb-2">
              <img
                src={sug10}
                alt="Dance"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-sm font-medium">Dance</span>
          </div>

          <div className="flex flex-col w-36 min-w-36">
            <div className="w-36 h-36 mb-2">
              <img
                src={sug12}
                alt="Flow Này"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-sm font-medium">Flow Này Mượt Phết</span>
          </div>

          <div className="flex flex-col w-36 min-w-36">
            <div className="w-36 h-36 mb-2">
              <img
                src={sug11}
                alt="zingchart"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-sm font-medium">#zingchart</span>
          </div>
        </div>
      </div>
      {/* Gợi ý cho bạn section */}
      <div className="px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Gợi Ý Cho Bạn</h2>
          <button className="px-4 py-1 bg-purple-600 rounded-full text-sm font-medium flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12L3 12M12 3l9 9-9 9" />
            </svg>
            LÀM MỚI
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {suggestItems.map((item, index) => (
            <div key={index} className="flex items-center p-2 rounded-lg">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-14 h-14 object-cover rounded mr-3"
              />
              <div className="flex-1">
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-xs text-gray-400 mt-1">{item.artist}</p>
              </div>
              {item.premium && (
                <div className="ml-auto bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-md font-medium ">
                  PREMIUM
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-6 text-white rounded-lg"></div>
        <div>
          <div style={{ color: "white", padding: "20px" }}>
            <div style={{ margin: "20px 0" }}>
              <div style={{ display: "flex", gap: "20px" }}>
                {/* Bài hát thứ nhất */}
                <div>
                  <img
                    src={sug13}
                    alt="4U - On Repeat"
                    title="Những bài hát hay của Tlinh - Zing MP3"
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <p
                    style={{ margin: "5px 0" }}
                    title="Những bài hát hay của Tlinh"
                  >
                    Những bài hát hay của Tlinh
                  </p>
                  <p style={{ fontSize: "15px", color: "#888" }}>Zing MP3</p>
                </div>

                {/* Bài hát thứ hai */}
                <div>
                  <img
                    src={sug14}
                    alt="Cái Đẹp (Single)"
                    title="Cái Đẹp (Single) - tlinh, Pháo, Pháp Kiều"
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <p
                    style={{ margin: "5px 0" }}
                    title="Cái Đẹp (Single) - tlinh, Pháo, Pháp Kiều"
                  >
                    Cái Đẹp (Single)
                  </p>
                  <p style={{ fontSize: "15px", color: "#888" }}>
                    tlinh, Pháo, Pháp Kiều
                  </p>
                </div>
                <div>
                  <img
                    src={sug15}
                    alt="4U - On Repeat"
                    title=" Hương Mùa Hè"
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <p style={{ margin: "5px 0" }} title=" Hương Mùa Hè">
                    Hương Mùa Hè
                  </p>
                  <p style={{ fontSize: "15px", color: "#888" }}>
                    SUNI, Hoàng Dũng, GREY D ...
                  </p>
                </div>
                <div>
                  <img
                    src={sug16}
                    alt="4U - On Repeat"
                    title="ái"
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <p style={{ margin: "5px 0" }} title="ái">
                    ái
                  </p>
                  <p style={{ fontSize: "15px", color: "#888" }}>tlinh</p>
                </div>
                <div>
                  <img
                    src={sug17}
                    alt="4U - On Repeat"
                    title="shhhhhhh .. (Single)"
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <p style={{ margin: "5px 0" }} title="shhhhhhh .. (Single)">
                    shhhhhhh .. (Single)
                  </p>
                  <p style={{ fontSize: "15px", color: "#888" }}>
                    {" "}
                    WEAN, tlinh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-2xl">Top100</div>
          <div className="flex items-center gap-2 text-right">
            <div className="text-xl">Tất Cả</div>
            <SlArrowRight />
          </div>
        </div>
        <div style={{ color: "white", padding: "20px" }}>
          <div style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              {/* Hình 1 */}
              <div>
                <img
                  src={top1}
                  alt="4U - On Repeat"
                  title="Những bài hát hay của Tlinh - Zing MP3"
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <p
                  style={{ margin: "5px 0" }}
                  title="Những bài hát hay của Tlinh"
                >
                  Những bài hát hay của Tlinh
                </p>
                <p style={{ fontSize: "15px", color: "#888" }}>Zing MP3</p>
              </div>

              {/* Hình 2 */}
              <div>
                <img
                  src={top2}
                  alt="Cái Đẹp (Single)"
                  title="Cái Đẹp (Single) - tlinh, Pháo, Pháp Kiều"
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <p
                  style={{ margin: "5px 0" }}
                  title="Cái Đẹp (Single) - tlinh, Pháo, Pháp Kiều"
                >
                  Cái Đẹp (Single)
                </p>
                <p style={{ fontSize: "15px", color: "#888" }}>
                  tlinh, Pháo, Pháp Kiều
                </p>
              </div>

              {/* Hình 3 */}
              <div>
                <img
                  src={top3}
                  alt="Hương Mùa Hè"
                  title="Hương Mùa Hè"
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ margin: "5px 0" }} title="Hương Mùa Hè">
                  Hương Mùa Hè
                </p>
                <p style={{ fontSize: "15px", color: "#888" }}>
                  SUNI, Hoàng Dũng, GREY D ...
                </p>
              </div>

              {/* Hình 4 */}
              <div>
                <img
                  src={top4}
                  alt="ái"
                  title="ái"
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ margin: "5px 0" }} title="ái">
                  ái
                </p>
                <p style={{ fontSize: "15px", color: "#888" }}>tlinh</p>
              </div>

              {/* Hình 5 */}
              <div>
                <img
                  src={top5}
                  alt="shhhhhhh .. (Single)"
                  title="shhhhhhh .. (Single)"
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
                <p style={{ margin: "5px 0" }} title="shhhhhhh .. (Single)">
                  shhhhhhh .. (Single)
                </p>
                <p style={{ fontSize: "15px", color: "#888" }}>WEAN, tlinh</p>
              </div>
            </div>
          </div>
        </div>
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
        <div className="rounded-full h-[30px] w-[30px] bg-white text-black flex items-center justify-center cursor-pointer absolute top-[7.5rem] left-[-1rem]">
          <MdKeyboardArrowLeft />
        </div>
        <div className="rounded-full h-[30px] w-[30px] bg-white text-black flex items-center justify-center absolute top-[7.5rem] right-[-1rem]">
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div>
        <ZingChart />
      </div>
    </div>
  );
};

export default Discover;
