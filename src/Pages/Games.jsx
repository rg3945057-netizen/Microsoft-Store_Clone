import { useEffect, useState } from "react";
import GameCard from "../Components/GameCard";

const API_KEY = "YOUR_API_KEY";

export default function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setGames(data.results));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Games</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
