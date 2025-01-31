import React from "react";
import background from "../assets/images/background.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Predictive Voice AI Empowering Frontline Safety and Health
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          With an Initial focus on fatigue risk management
        </p>
      </div>

      {/* 嵌入视频 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tn0XpTAD_8Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "10px" }}
        ></iframe>
      </div>

      {/* 底部图片 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <img src={img1} alt="MIT 100K" style={{ height: "50px", objectFit: "contain" }} />
        <img src={img2} alt="President's Innovation Challenge" style={{ height: "50px", objectFit: "contain" }} />
        <img src={img3} alt="Harvard HealthLab Accelerators" style={{ height: "50px", objectFit: "contain" }} />
        <img src={img4} alt="Tech Startup Competition" style={{ height: "50px", objectFit: "contain" }} />
        <img src={img5} alt="Martin Trust Center" style={{ height: "50px", objectFit: "contain" }} />
      </div>
    </div>
  );
};

export default Hero;
