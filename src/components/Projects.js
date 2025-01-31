import React from "react";

// 导入项目图片
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

const Projects = () => {
  // 定义项目数据
  const projects = [
    {
      title: "AI-Powered Safety Alerts",
      description:
        "An AI-driven system that provides real-time safety alerts to prevent accidents in hazardous work environments.",
      image: project1, // 使用导入的图片
    },
    {
      title: "Smart Workforce Scheduling",
      description:
        "A platform that optimizes workforce schedules to reduce fatigue and improve productivity.",
      image: project2,
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboards that provide insights into workforce performance and fatigue trends.",
      image: project3,
    },
  ];

  return (
    <div
      id="projects" // 添加 id 以便滚动跳转
      style={{ padding: "50px 20px", backgroundColor: "#f9f9f9", textAlign: "center" }}
    >
      <h2 style={{ fontSize: "36px", color: "#333", marginBottom: "30px" }}>Our Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "24px", color: "#333", marginBottom: "10px" }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "16px", color: "#555" }}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
