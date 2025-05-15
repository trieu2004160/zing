import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const musicCategories = [
  {
    id: 1,
    name: "V-POP",
    listeners: "443 đang nghe",
    imageUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/e/7/b/8e7bb320ed231cdaed8ec57b9239d08a.jpg",
    borderColor: "#ff7a8e",
  },

  {
    id: 2,
    name: "Chạm",
    listeners: "281 đang nghe",
    isLive: true,

    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDB9MpzIg8uHdCwIrp2LLVozTReyfxQ6irw&s",
    borderColor: "#d3d3d3",
    backgroundColor: "#f0f0f0",
    textColor: "#afafaf",
  },
  {
    id: 3,
    name: "Bolero",
    listeners: "419 đang nghe",
    isLive: true,
    imageUrl:
      "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/5/e/8/8/5e88487f72699b4f183dccdcc2ae8069.jpg",
    borderColor: "#ffce91",
    backgroundColor: "#fff4e0",
    textColor: "#d4835c",
  },
  {
    id: 4,
    name: "US-UK",
    listeners: "68 đang nghe",
    isLive: true,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5Qq9Ul37ChHqa_VD_We3MduMBPavnwZagA&s",
    borderColor: "#ff6b9c",
    backgroundColor: "#ffe6ef",
    textColor: "#ff6b9c",
  },
  {
    id: 5,
    name: "Rap Việt",
    listeners: "47 đang nghe",
    imageUrl:
      "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/b/6/4/3/b6436c2bc97b5635c34eb6592d8856bb.jpg",
    borderColor: "#8a2be2",
  },
];

const MusicCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % musicCategories.length;
      if (newIndex === 0) {
        scrollToItem(musicCategories.length);
        setTimeout(() => scrollToItem(0), 0);
      } else {
        scrollToItem(newIndex);
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + musicCategories.length) % musicCategories.length;
      scrollToItem(newIndex);
      return newIndex;
    });
  };

  const scrollToItem = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.children[0].offsetWidth;
      container.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" p-8 text-white min-h-screen">
      <div className="relative flex items-center">
        <button
          onClick={prevSlide}
          className="text-white p-2 absolute left-0 z-10 bg-black/30 rounded-full"
        >
          <FaChevronLeft size={24} />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar mx-12 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {musicCategories.concat(musicCategories).map((category, index) => (
            <div key={index} className="flex-shrink-0 px-4">
              <div
                className="relative w-40 h-40 rounded-full overflow-hidden"
                style={{ border: `4px solid ${category.borderColor}` }}
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-0 right-0 mx-auto w-min px-3 py-0.5 bg-red-600 text-white text-xs font-bold rounded">
                  LIVE
                </div>
              </div>
              <p className="text-lg font-bold mt-2 text-center">
                {category.name}
              </p>
              <p className="text-sm text-gray-400 text-center">
                {category.listeners}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-white p-2 absolute right-0 z-10 bg-black/30 rounded-full"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MusicCarousel;
