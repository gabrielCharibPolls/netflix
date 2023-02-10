import React, { useState } from "react";
import "./css/HomePage.css"; 
import "./components/Film";
import Film from "./components/Film";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  const films = [
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      image: "https://m.media-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_.jpg"
    },
    {
      title: "The Good, the Bad and the Ugly",
      description: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      image: "https://m.media-amazon.com/images/M/MV5BOTQ"
    }];
  
  return (
    <div className="HomePage">
      <header className="header">
        <h1 className="logo">Netflix</h1>
        <nav>
          <button
            className="header-menu-toggle"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? "Close" : "Menu"}
          </button>
          <ul className={`header-menu ${showMenu ? "show" : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#" onClick={() => setShowMovies(!showMovies)}>
                Movies
              </a>
              {showMovies && (
                <ul className="movies-list">
                  {films.map((film, index) => (
                    <li key={index}>{film.title} ({film.year})</li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="#">Recently Added</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h2 className="main-title">Watch Anywhere</h2>
        <p className="main-text">
          Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
        </p>
        <button className="main-cta">Join Free for 30 Days</button>
        {films.map((film, index) => (
                    <><li key={index}>{film.title} ({film.year})</li><Film /></>
                  ))}
        <Film />
        <Film />
      </main>
    </div>
  );
}

export default App;
