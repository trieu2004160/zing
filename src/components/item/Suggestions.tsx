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
import { SlArrowRight } from "react-icons/sl";

export default function Suggestions() {
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
  return (
    <div>
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
    </div>
  );
}
