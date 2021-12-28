import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  orderByAsc,
  orderByTemperament,
  orderByWeight,
  getTemperaments,
  filterCreated,
} from "../actions/index";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Paginado from "./Paginate";
import SearchBar from "./SearchBar";
import AboutMe from "./AboutMe";
import "../styles/Home.css";
import NoResults from "./NoResults";

export default function Home() {
  const dispatch = useDispatch();
  const [, setOrderHealth] = useState("");
  const temperaments = useSelector((state) => state.temperaments);
  const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const [, setOrden] = useState("");


  console.log(currentDogs)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  function handleOrderWeight(e) {
    dispatch(orderByWeight(e.target.value));
    setOrderHealth(`Ordenado ${e.target.value}`);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByAsc(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleFilterTemperaments(e) {
    dispatch(orderByTemperament(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  return (
    <div className="fondo">
      <h1 className="title">Planeta Canino</h1>
      <button
        className="reload"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload
      </button>
      <select
        className="botones"
        onChange={(e) => {
          handleOrderWeight(e);
        }}
      >
        <option disabled>Weight</option>
        <option value="max">Max Weight</option>
        <option value="min">Min Weight</option>
      </select>
      <select className="botones" onChange={(e) => handleSort(e)}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <select
        className="temperamento"
        onChange={(e) => handleFilterTemperaments(e)}
      >
        <option value="All">Temperaments</option>
        {temperaments &&
          temperaments.map((e, i) => {
            return <option key={i} value={e.name}>{e.name}</option>;
          })}
      </select>{" "}
      <select
      className="botones"
        onChange={(e) => {
          handleFilterCreated(e);
        }}
      >
        <option disabled>--Filter dogs--</option>
        <option value="Api Dogs">Api Dogs</option>
        <option value="Created">Created Dogs</option>
      </select>
      <Link className="crea" to="/breed">
        Crear raza
      </Link>
      <Link className="me" to="/aboutme">
        About me
      </Link>
      <SearchBar />
      <div className="doggys">
        { (currentDogs.length === 0 && currentDogs) ? <NoResults/> : currentDogs?.map((c, i) => {
          return (
            <div key={i}>
              <Link to={"/detail/" + c.id}>
                <Card
                  key={c.id}
                  name={c.name}
                  image={c.image ? c.image : "https://media.rawg.io/media/games/a8b/a8bf6f31bfbdaf7d4b86c1953c62cee0.jpg"}
                  temperament={c.temperament ? c.temperament : "No temperament"}
                  weight={c.weight ? c.weight : "No weight"}
                />
              </Link>
            </div>
          );
        })}
        <div>
          <Paginado
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
          />
        </div>
      </div>
    </div>
  );
}