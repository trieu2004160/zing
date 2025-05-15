import React from "react";
interface MusicCategory {
  id: number;
  name: string;
  listeners: string;
  isLive: boolean;
  imageUrl: string;
  borderColor: string;
  backgroundColor: string; // ✅ Thêm thuộc tính này
  textColor?: string;
}

const musicCategories: MusicCategory[] = [
  {
    id: 1,
    name: "V-POP",
    listeners: "1K đang nghe",
    isLive: true,
    imageUrl:
      "data:image/jpeg;base64,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",
    borderColor: "#ff7a8e",
    backgroundColor: "#ffebee",
    textColor: "#ff7a8e",
  },

  {
    id: 5,
    name: "K-POP",
    listeners: "38 đang nghe",
    isLive: true,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRey0B8gH-IU7x5pRLNZ_KpWrXWVeqpI34Z0w&s",
    borderColor: "#75baff",
    backgroundColor: "#e0f2ff",
    textColor: "#3291db",
  },
  {
    id: 6,
    name: "Acoustic",
    listeners: "97 đang nghe",
    isLive: true,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxerwjeJ4DeTqjFE9HU0qEg3HxplOfihzA7Q&s",
    borderColor: "#ffa04d",
    backgroundColor: "#fff0e0",
    textColor: "#d4824d",
  },
];
// Thành phần MusicCategoriesSlider
const RadioContent: React.FC = () => {
  return (
    <div className=" text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Thể Loại</h2>
        <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar">
          {musicCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center shrink-0"
            >
              {/* Vòng tròn chứa ảnh */}
              <div className="relative mb-3">
                <div
                  className="w-36 h-36 rounded-full overflow-hidden relative"
                  style={{
                    backgroundColor: category.backgroundColor, // ✅ Đã sửa
                    border: `4px solid ${category.borderColor}`, // ✅ Đã sửa
                  }}
                >
                  {/* Ảnh bên trong vòng tròn */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Badge LIVE */}
                  {category.isLive && (
                    <div className="absolute bottom-2 left-0 right-0 mx-auto w-min px-3 py-0.5 bg-red-600 text-white text-xs font-bold rounded">
                      LIVE
                    </div>
                  )}
                </div>
              </div>

              {/* Tên và số lượng người nghe */}
              <h3 className="text-lg font-bold text-center">{category.name}</h3>
              <p className="text-sm text-gray-400">{category.listeners}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RadioContent;
