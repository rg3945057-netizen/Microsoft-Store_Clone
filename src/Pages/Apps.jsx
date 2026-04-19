import data from "../Data/app.json";
import AppCard from "../Components/AppCard";

export default function Apps() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Apps</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {data.apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}
