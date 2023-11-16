import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import "./schedule.css";

function Schedule() {
  const filterList = [
    {
      _id: 1,
      name: "All",
      active: true,
    },
    {
      _id: 2,
      name: "Romance",
      active: false,
    },
    {
      _id: 3,
      name: "Action",
      active: false,
    },
    {
      _id: 4,
      name: "Thriller",
      active: false,
    },
    {
      _id: 5,
      name: "Horror",
      active: false,
    },
    {
      _id: 6,
      name: "Adventure",
      active: false,
    },
  ];

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFilterMovies = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );
    if (category === "All") {
      setMovies(data);
      return;
    }
    setMovies(data.filter((movie) => movie.category === category));
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title"> Opening this week </h4>
          {/* <p>Filters</p> */}
        </div>
        <div className="row">
          <ul className="filters">
            {filters.map((filter) => (
              <li
                key={filter._id}
                className={`${filter.active ? "active" : undefined}`}
                onClick={() => {
                  handleFilterMovies(filter.name);
                }}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="row nt-5">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => (
              // <h1 key={movie.id}>{movie.title}</h1>
              <Card key={movie._id} movie={movie} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
