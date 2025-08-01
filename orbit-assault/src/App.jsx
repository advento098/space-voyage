import { useEffect, useRef } from "react";
import "./App.css";
import vidBg from "./assets/space-background.mp4";

function App() {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={vidBg} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <nav>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>

      <div>
        <section>
          <h1 className="poppins-regular">
            SPACE <br />
            <span className="poppins-bold">VOYAGE</span>
          </h1>
          <p>Dare to test your limits in surviving the dark empty space?</p>
        </section>
        <section>
          <button className="neon-button poppins-regular">Download now!</button>
        </section>
      </div>
    </div>
  );
}

export default App;
