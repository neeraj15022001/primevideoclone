import React, {useEffect, useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./css/MovieCard.css";

function MovieCard({uri, title}) {
   const [movieData, setMovieData] = useState([])
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows :true,
        pauseOnFocus : true,
        autoplay: true
      };
      useEffect(() => {
        fetch(uri)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results)
            setMovieData(data.results)
        })
      }, [])
    return (
        <div className="moviecard">
            <h2>{title}</h2>
            <Slider {...settings}>
                {movieData.map((movie) => (
                    <div className="moviecard__sliderImageDivision">
                        <img src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`} alt={`${movie.title}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default MovieCard



