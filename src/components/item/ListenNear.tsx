import React from "react";
import sug10 from "../../img/dis1.png";
import sug11 from "../../img/dis11.png";
import sug12 from "../../img/dis12.png";
export default function ListenNear() {
  return (
    <div>
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
    </div>
  );
}
