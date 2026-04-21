import GameCard from "../Components/GameCard";
import gamesData from "../Data/games.json";

export default function Games() {
  const allGames = [
    ...gamesData.newNotableGames,
    ...gamesData.bestSellingGames,
    ...gamesData.puzzleGames,
    ...gamesData.buildYourOwnWorld,
    ...gamesData.topPaidGames,
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Games</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px",
        }}
    >
        {allGames.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
}
