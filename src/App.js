import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero"; // 导入 Hero
import ImpactSection from "./components/ImpactSection";

function App() {
  return (
    <div>
      <Navbar />
      {/* 使用 Hero 组件 */}
      <Hero />
      <ImpactSection /> {/* 添加新的内容块 */}
      <Projects /> {/* 替换为 Projects */}
      <Contact /> {/* 添加 Contact 模块 */}
    </div>
  );
}

export default App;
