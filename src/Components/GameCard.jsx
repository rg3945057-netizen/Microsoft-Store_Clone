import "./GameCard.css";

export default function GameCard({ game }) {
  return (
    <div className="game-card">
      {game.badge && <div className="game-badge">{game.badge}</div>}
      <div className="game-image-container">
        <img src={game.image} alt={game.name} className="game-image" />
      </div>
      <div className="game-info">
        <h3 className="game-name">{game.name}</h3>
        <div className="game-meta">
          <span className="game-rating">⭐ {game.rating}</span>
          <span className={`game-price ${game.price === "Free" ? "free" : ""}`}>
            {game.price}
          </span>
        </div>
      </div>
    </div>
  );
}
