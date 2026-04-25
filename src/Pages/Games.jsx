import GameCard from "../Components/GameCard";
import gamesData from "../Data/games.json";
import Hero from "../Components/Hero.jsx";
import "./Games.css";


export default function Games() {
  const allGames = [

    ...gamesData.bestSellingGames,
    ...gamesData.bestOfGamePass,
    ...gamesData.puzzleGames,
    ...gamesData.buildYourOwnWorld,
    ...gamesData.topPaidGames,
  ];

  return (
    <div>
      <div>
        <Hero
          link1="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqI5bW1cm5srFg_yy6or7aqdxObpE6SL1gCrFYrHh7srZvzgqIOdvPU_UgXuRinHA1HvL0xEDmf1LN0zlFj3_D6t28cZtlB1L6gMN7JYCJSBHzVGaky7SRRuISiX_taGYi&h=576"
          link2="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpqPkHVQYdY3_GOD9HWXXAWAw.1necBrCXu_vBw7hb0TaFFYWlVIvDZoFAcbtO_A2RbomE28wfPLXBjoMcbRje_w.fxK8r3s8Wfds3XtbMHBodVu_GU2ZhInq2ix_rcApx.55UjxoO4Vh2KgtNarag5dCzglkcvPjd4.gM92aCdvBk-&h=2160"
          link3="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpq07Ih7oFbRKKOE.ITZGY6MjrMZtkfQqj.G90ewFki0ahYrate0_Sj0pwphAUYj7ldwIbuT8zzpKvFmNElZJbbLc2sRf07d8_ObTbV_kb_BmDUI2HxQPdOBljWZ2PQujy6dgPTAIi7mwv9UekZOE2aLA--&h=2160"
          link4="https://images-eds-ssl.xboxlive.com/image?url=7flt5HU26ZSS3Tgted_TMty0wzqMQYpm03yD7eAPRtQBYO5dMlD18uZxNDuKXvpq4RPNo2z7AxoQ1Q0RyUETfh6niBQiu.h1IlTH2cMOArPpiwAef3cMW3.q0hsw45_2IdLkK3XmDuo8_dSfA2x7mUZB3bCl7OSd8lnFgMwNRDvh6BYfHeeeMNNkC.9Tyax7vyjs4.ZfI9XqhVDsdYFXRANSDWGMu1fTpwQ9Ry78SGU-&h=2160"
          text1="Hades II'"
          text2="ID@Xbox UnHallween Sale"
          text3="Conquer The World"
          text4="Something Survived in '85"
        />
      </div>

      <Gamesbar heading="New & Notable PC Games " type="newNotableGames" />
      <Gamesbar heading="Best selling games " type="bestSellingGames" />
      <Gamesbar heading="Best of Game Pass" type="bestOfGamePass" />
      <Gamesbar heading="Puzzle games " type="puzzleGames" />
      <Gamesbar heading="Top paid games" type="topPaidGames" />
    </div>
  );
}



function Gamesbar({heading,type}){
    return (
      <div className="games-section">
        <div className="section-header">
          <h2>{heading} ›</h2>
        </div>
        <div className="games-scroll">
          {gamesData[type].map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    );

}