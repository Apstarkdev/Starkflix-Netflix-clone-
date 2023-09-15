'use client';
import React, { useEffect } from "react";
import axios from "axios";

const Apicall = (props) => {
  const API_URL = "https://api.themoviedb.org/3/";

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${API_URL}discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
        },
      });
      console.log("data", response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <div></div>;
};

export default Apicall;
