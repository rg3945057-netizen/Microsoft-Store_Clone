import { useRef } from "react";
import AppCard from "./AppCard";
import "./ScrollSection.css";

export default function ScrollSection({ title, data }) {
  const scrollRef = useRef();

  const scroll = (dir) => {
    if (dir === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-section">
      
      {/* HEADER */}
      <div className="scroll-header">
        <h2>{title} ›</h2>

        <div className="scroll-buttons">
          <button className="scroll-btn" onClick={() => scroll("left")}>
            ◀
          </button>
          <button className="scroll-btn" onClick={() => scroll("right")}>
            ▶
          </button>
        </div>
      </div>

      {/* SCROLL AREA */}
      <div className="scroll-container" ref={scrollRef}>
        {data.map((app) => (
          <div key={app.id} style={{ minWidth: "180px" }}>
            <AppCard app={app} />
          </div>
        ))}
      </div>
    </div>
  );
}