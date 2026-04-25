import Hero from "../Components/Hero";
import ScrollSection from "../Components/ScrollSection";
import gamesData from "../Data/games.json";
import appData from "../Data/app.json";
import GameCard from "../Components/GameCard";
import AppCard from "../Components/AppCard";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <Hero
        link1="https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
        link2="https://images.unsplash.com/photo-1542751371-adc38448a05e"
        link3="https://images.unsplash.com/photo-1511512578047-dfb367046420"
        link4="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8"
        text1="Beyond April Sale"
      />

      {/* TRENDING SECTION */}
      <div className="home-row">

        {/* TRENDING GAMES */}
        <div className="home-box">
          <h3>Trending games ›</h3>

          {gamesData.bestSellingGames.slice(0, 6).map((game) => (
            <div className="home-item" key={game.id}>
              <img src={game.image} alt="" />
              <div>
                <p>{game.name}</p>
                <span>{game.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* TRENDING APPS */}
        <div className="home-box">
          <h3>Trending apps ›</h3>

          {appData.apps.slice(0, 6).map((app) => (
            <div className="home-item" key={app.id}>
              <img src={app.image} alt="" />
              <div>
                <p>{app.name}</p>
                <span>{app.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* SCROLL SECTION */}
      <ScrollSection
        title="Best selling games"
        data={gamesData.bestSellingGames}
      />

    </div>
  );
}