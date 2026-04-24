import "./Hero.css";

export default function Hero(prop) {
  return (
    <div className="container">

      <div className="hero">
        <img src={prop.link1} alt="hero" />

        <div className="overlay">
          <h1>{prop.text1}</h1>
          <p>Save up to 40%</p>
          <button>Show All</button>
        </div>

        <button className="arrow left">◀</button>
        <button className="arrow right">▶</button>
      </div>

      <div className="right">


        <div className="card large">
          <img src={prop.link2} alt="" />
          <div className="card-overlay">
            <h2>Image Lab in ChatOn</h2>
            <button>Get</button>
          </div>
        </div>

  
        <div className="bottom">
          <div className="card small">
            <img src={prop.link3} alt="" />
            <div className="card-overlay">
              <p>New P&ID System Symbols</p>
            </div>
          </div>

          <div className="card small">
            <img src={prop.link4} alt="" />
            <div className="card-overlay">
              <p>Easy Invoice Generator</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}