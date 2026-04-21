export default function GameCard({ game }) {
  return (
    <div>
      <img src={game.image} alt={game.name} width="100%" />
      <h3>{game.name}</h3>
      <p>{game.category}</p>
      <p>{game.price}</p>
      <p>⭐ {game.rating}</p>
    </div>
  );
}
