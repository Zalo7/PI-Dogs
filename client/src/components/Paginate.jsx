import React from "react";
import '../styles/Paginate.css';


export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
if(allDogs < 9) {
  pageNumbers = false;
}
console.log(pageNumbers)
  return (
    <nav className="paginate">
      <ul>
        {pageNumbers &&
          pageNumbers.map((number, i) => (
            <li key={i} className="paginate">
              <button className="button-paginate" onClick={() => paginado(number)}>{number} </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}