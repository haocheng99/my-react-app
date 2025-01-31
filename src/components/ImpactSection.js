import React from "react";
import backgroundImage from "../assets/images/road_background.jpg"; // 替换为实际图片路径

const ImpactSection = () => {
  return (
    <div>
      {/* 上方文字块 */}
      <div
        style={{
          padding: "50px 20px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "18px", color: "#333", fontWeight: "bold", marginBottom: "10px" }}>
          In our always-on society —
        </p>
        <h2 style={{ fontSize: "32px", color: "#1a1a1a", fontWeight: "bold", lineHeight: "1.5" }}>
          Workplace impairments, such as fatigue, are highly prevalent but often inadequately addressed, causing
          tremendous loss of life and economic harm …
        </h2>
      </div>

      {/* 下方背景图片和文字 */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "1.5", maxWidth: "800px", margin: "0 auto" }}>
          Every year, more than $140 Billion of economic value is lost due to workforce fatigue alone globally
        </h2>
      </div>
    </div>
  );
};

export default ImpactSection;
