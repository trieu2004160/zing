import React from "react";
import l1 from "../../img/l1.png";
import l2 from "../../img/l2.png";
const LibraryContent: React.FC = () => {
  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
        Thư viện <span style={{ fontSize: "24px" }}>▶</span>
      </h1>

      <div style={{ margin: "20px 0" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
          PLAYLIST <span style={{ fontSize: "24px" }}>+</span>
        </h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={l1}
              alt="4U - On Repeat"
              style={{ width: "150px", borderRadius: "8px" }}
            />
            <p style={{ margin: "5px 0" }}>4U - On Repeat</p>
            <p style={{ fontSize: "12px", color: "#888" }}>Zing MP3</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src={l2}
              alt="hhhh"
              style={{ width: "150px", borderRadius: "8px" }}
            />
            <p style={{ margin: "5px 0" }}>hhhh</p>
            <p style={{ fontSize: "12px", color: "#888" }}>Chí Triều</p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <button
          style={{
            background: "#9b4de0",
            color: "white",
            padding: "8px 16px",
            borderRadius: "20px",
          }}
        >
          YÊU THÍCH
        </button>
        <button
          style={{
            background: "#3a3a3a",
            color: "white",
            padding: "8px 16px",
            borderRadius: "20px",
          }}
        >
          ĐÃ TẢI LÊN
        </button>
      </div>
    </div>
  );
};

export default LibraryContent;
