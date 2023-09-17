import React, { useState, useEffect } from "react";
import Logo from "../assets/tv.png";
import HomeIcon from "../assets/Home.png";
import MovieIcon from "../assets/Movie Projector.png";
import TvIcon from "../assets/TV Show.png";
import CalenderIcon from "../assets/Calendar.png";
import LogoutIcon from "../assets/Logout.png";
import loadingImg from "../assets/loading.gif";
import errorpage from "../assets/404.png"
import { Link, useParams } from "react-router-dom";
import PlayBtn from "../assets/Play.png";
import CustomFetch from "../CustomFetch";

const MovieDetails = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}`
  const {data,loading,error}= CustomFetch(url)
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(()=>{
    if (!loading){
      setMovieDetails(data)
    }
  },[data,loading])

  const img_300 = "https://image.tmdb.org/t/p/w500";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  if (error) {
    return (
      <div className="m-auto text-center flex items-center h-screen">
        <img src={errorpage} alt="loading" className="m-auto" />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="m-auto text-center flex items-center h-screen">
        <img src={loadingImg} alt="loading" className="m-auto" />
      </div>
    );
  }

  return (
    (!loading && movieDetails &&
    <div className="font-poppins lg:flex">
      <div className="flex flex-wrap text-center lg:flex-1 lg:w-[20%] lg:max-w-[20%] lg:h-screen lg:flex-col lg:rounded-r-3xl lg:border-r-2 justify-around gap-3 items-center lg:items-start px-2 pt-3 lg:px-0 lg:p-0 border-b-2 lg:border-b-0 rounded-b-3xl">
        <Link to="/">
          <div className="flex items-center gap-4 text-[#333333] font-sans text-lg lg:ml-5 font-[700]">
            <img src={Logo} alt="Play button" />
            <p>MovieBox</p>
          </div>
        </Link>
        <div className="flex flex-wrap text-center lg:w-full lg:items-start lg:flex-col">
          <Link to="/" className="lg:w-full">
            <button className="flex lg:w-full lg:items-center gap-3 px-7 lg:px-10 py-6 lg:py-7 lg:focus:border-r-2 lg:focus:border-b-0 focus:bg-[#f7e7eb] focus:border-b-2 focus:border-[#be123c]">
              <img src={HomeIcon} alt="home icon" />
              <span className="hidden lg:block text-sm">Home</span>
            </button>
          </Link>
          <button className="flex lg:w-full lg:items-center gap-3 px-7 lg:px-10 py-6 lg:py-7 lg:focus:border-r-2 lg:focus:border-b-0 focus:bg-[#f7e7eb] focus:border-b-2 focus:border-[#be123c]">
            <img src={MovieIcon} alt="movie icon" />
            <span className="hidden lg:block text-sm">Movies</span>
          </button>
          <button className="flex lg:w-full lg:items-center gap-3 px-7 lg:px-10 py-6 lg:py-7 lg:focus:border-r-2 lg:focus:border-b-0 focus:bg-[#f7e7eb] focus:border-b-2 focus:border-[#be123c]">
            <img src={TvIcon} alt="tv icon" />
            <span className="hidden lg:block text-sm">TvSeries</span>
          </button>
          <button className="flex lg:w-full lg:items-center gap-3 px-7 lg:px-10 py-6 lg:py-7 lg:focus:border-r-2 lg:focus:border-b-0 focus:bg-[#f7e7eb] focus:border-b-2 focus:border-[#be123c]">
            <img src={CalenderIcon} alt="calender icon" />
            <span className="hidden lg:block text-sm">Upcoming</span>
          </button>
        </div>
        <div className="hidden lg:block p-5 text-start bg-[#f7e7eb] border border-[#be123c] rounded-3xl mx-5">
          <p className="text-[15px] py-3">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[12px] pb-3">50k people are playing now</p>
          <button className="text-[#be123c] w-full border border-red-400 text-[12px] rounded-full px-2 py-2 text-center cursor-pointer flex justify-center">
            Start playing
          </button>
        </div>
        <p className="lg:flex lg:items-center gap-3 lg:ml-5 hidden">
          <img src={LogoutIcon} alt="logout icon" />
          <span className="hidden lg:block">Log out</span>
        </p>
      </div>
      <div className="p-5 lg:p-10 lg:w-[100%] lg:max-w-[100%] lg:flex-1">
        <div
          className="bg-cover bg-center rounded-3xl w-[100%] h-[500px] m-auto"
          style={{
            backgroundImage: `url(${
              movieDetails.backdrop_path
                ? `${img_300}/${movieDetails.backdrop_path}`
                : unavailable
            })`,
          }}
        >
          <div className="h-full flex justify-center items-center flex-col">
            <img
              src={PlayBtn}
              alt="play button"
              className="p-5 rounded-full bg-[#ffffff82]"
            />
            <p className="text-gray-300">Watch Trailer</p>
          </div>
        </div>

        <div>
          <div className="flex gap-6 items-center py-5 flex-wrap">
            <h1 data-testid="movie-title">{movieDetails.title}</h1>
            <p data-testid="movie-release-date">{movieDetails.release_date}</p>
            <p>
              <span data-testid="movie-runtime">{movieDetails.runtime}</span>m
            </p>
            <p className="flex space-x-2">
              {movieDetails.genres && movieDetails.genres.map((genre,index) => (
                <span
                  key={index}
                  className="border border-red-200 text-red-700 md:font-semibold px-3 md:px-4 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          </div>
          <div className="block md:flex gap-5">
            <p
              data-testid="movie-overview"
              className="tracking-wider text-gray-500 font-[400] text-justify md:w-2/3"
            >
              {movieDetails.overview}
            </p>
            <div className="w-[100%] md:w-1/3">
              <p className="bg-[#BE123C] text-white text-center rounded-lg p-2 w-full mb-3">
                See Showtimes
              </p>
              <p className="border border-[#BE123C] bg-[#f7e7eb] text-black text-center w-full rounded-lg p-2">
                More watch options
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default MovieDetails;
