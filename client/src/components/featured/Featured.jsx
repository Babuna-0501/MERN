import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import { Link } from "react-router-dom";

export default function Featured({ type, setGenre }) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/`, {
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  console.log(movie);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Special"}</span>
          {/* <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select> */}
        </div>
      )}
      <img src={movie.img} alt="" />
      <div className="info">
        <img src={movie.imgTitle} alt="" />
        <span className="desc">{movie.desc}</span>
        <div className="buttons">
        <Link to={{ pathname: "/watch", movie: movie }}>
          <button className="play" onClick={(e) => setMovie(e.target.value)}>
            <PlayArrow />
            <span>Play</span>
          </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}