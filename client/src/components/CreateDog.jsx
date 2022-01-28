import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postBreed, getTemperaments } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import '../styles/CreateDog.css'

function validate(input) {
  let error = {};
  if (!input.name.trim()) {
    error.name = "Please enter a name for your dog";
  } else if (!input.height) {
    error.height = "Please enter a  height for your dog";
  } else if (!input.weight) {
    error.weight = "Please enter a  weight for your dog";
  } else if (!input.life_span) {
    error.life_span = "Please enter a  life span for your dog";
  }

  return error;
}

export default function CreateDog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const temperaments = useSelector((state) => state.temperaments);
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    created: true,
    temperament: [],
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
 

  function handleSelect(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }
  function handleDelete(t) {
    setInput({
      ...input,
      temperament: input.temperament.filter((el) => el !== t),
    });
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("You need to fill everything form to create a breed");
    } else {
      dispatch(postBreed(input));
      alert("Raza creada!");
      setInput({
        name: "",
        weight: { metirc: "" },
        height: { metric: "" },
        created: true,
        life_span: "",
        dogs: [],
      });
      history.push("/home");
    }
  }
  return (
    <div className="br">
      <div className="raza">
      <h1 style={{margin: 0}}>Creá tu Raza!</h1>
      <Link style={{width: 500, height: 60}} to="/home">
        <button className="boton_X">❌</button>
      </Link>
      </div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label className="label">Nombre:</label>
        <div>
          <div className="fondo_blanco">
            <input
              className="input_fondoBlanco"
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
              required="true"
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div></div>
          <label className="label">Altura:</label>
          <div className="fondo_blanco">
            <input
              className="input_fondoBlanco"
              type="number"
              value={input.height}
              name="height"
              onChange={(e) => handleChange(e)}
              required="true"
            />
             {errors.height && <p> {errors.height}</p>}
          </div>
        </div>
        <div>
          <label className="label">Peso:</label>
          <div className="fondo_blanco">
            <input
              className="input_fondoBlanco"
              type="number"
              value={input.weight}
              name="weight"
              onChange={(e) => handleChange(e)}
              required="true"
            />
            {errors.weight && <p>{errors.weight}</p>}
          </div>
        </div>
        <div>
          <label className="label">Años de vida:</label>
          <div className="fondo_blanco">
            <input
              className="input_fondoBlanco"
              type="text"
              value={input.life_span}
              name="life_span"
              onChange={(e) => handleChange(e)}
              required="true"
            />
             {errors.life_span && <p>{errors.life_span}</p>}
          </div>
        </div>
        <div>
          <select className="botones" onChange={(e) => handleSelect(e)}>
            {temperaments.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
          <ul>
            {input?.temperament.map((el, i) => (
              <div key={i}>
                <li>{el}</li>
                <button className="button-delete" onClick={() => handleDelete(el)}>X</button>
              </div>
            ))}
          </ul>
        </div>
        <button
          className="crear"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Crear Raza
        </button>
      </form>
    </div>
  );
}


