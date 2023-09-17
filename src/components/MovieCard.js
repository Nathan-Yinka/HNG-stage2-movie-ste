import FilmLogo from '../assets/IMOb.png'
import Fruit from '../assets/fruit.png'
import { useContext } from 'react'
import { dataContextCreated } from './contextData/DataContext'
import Loader from './Loader'
import { Link } from 'react-router-dom'

const MovieCard = () => {
    const {movies,loading,error,search} = useContext(dataContextCreated)
    const languageToCountry = {
        en : 'USA',
        ja : "JAPAN",
        es: "SPAIN",
        ko : "KOREA",
        hi : "HIDIN"
      };
    const getYear =(date) =>{
        let year = date?.split('-')[0];
        if (year === new Date().getFullYear()){
            return `${year} current`
        }
        return year
    }
    const img_300 = 'https://image.tmdb.org/t/p/w500';
    const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';

  return (
    <div className="text-black w-[90%] m-auto my-10 font-sans">
      <h1 className="text-[36px] font-[700] movie--head">Featured Movie</h1>
      <h1 className="text-[36px] font-[700] movie--head">
        {search && movies && <>Search result for the movie {search} ....</>}
      </h1>

      {loading && <Loader />}
      {error ??
        (movies.length === 0 && (
          <div>
            <section style={{ textAlign: "center" }} className="section">
              <h1>No movies matched your search term. Please try again.</h1>
            </section>
          </div>
        ))}
      {!error && !loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {!loading &&
            movies.map((movie, index) => {
              const {
                id,
                title,
                poster_path,
                release_date,
                vote_average,
                popularity,
                original_language,
              } = movie;
              const rating = Math.round(vote_average * 10);
              const firstTwoPopularity =
                popularity > 100 ? 99.9 : Math.round(popularity * 10) / 10;
              return (
                <div
                  data-testid="movie-card"
                  key={index}
                  className="w-fit  m-auto card--con"
                >
                  <Link to={`/movies/${id}`}>
                    <img
                      data-testid="movie-poster"
                      src={
                        poster_path ? `${img_300}/${poster_path}` : unavailable
                      }
                      className=" image--card"
                      alt=""
                    />
                    <div className="pt-3">
                      <p
                        data-testid="movie-release-date"
                        className="text-2xl text-gray-400 text-[12px] font-[700]"
                      >
                        {languageToCountry[original_language]}{" "}
                        {getYear(release_date)}
                      </p>
                      <h3
                        data-testid="movie-title"
                        className="text-2xl mb-2 text-gray-900 text-[18px] font-[700] truncate max-w-[250px]"
                      >
                        {title}
                      </h3>
                      <div className="flex justify-between">
                        <span className="flex items-center gap-2">
                          <img src={FilmLogo} alt="" />{" "}
                          <p className="text-gray-600">
                            {firstTwoPopularity} / 100
                          </p>
                        </span>
                        <span className="flex items-center gap-2">
                          <img src={Fruit} alt="" />{" "}
                          <p className="text-gray-600">{rating}%</p>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default MovieCard