import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        try {
        const json = await axios.get("/dogs") 
        console.log(json)
        return dispatch({ type: "GET_DOGS", payload: json.data })
    }catch (error) {
        console.log(error)
     }
    };
}

export function getTemperaments(payload) {
  return async function (dispatch) {
    try {
        let temperaments = await axios.get(`/temperaments`)
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: temperaments.data
        })
    }
    catch (err) {
        console.log(err);
    }
}
}

export function orderByAsc(payload) {
    return {
      type: 'ORDER_BY_ASC',
      payload
    }
  }

  
export function orderByTemperament(payload) {
  return {
    type: 'ORDER_BY_TEMPERAMENT',
    payload
}
}
export function filterCreated(payload) {
  return {
      type: "FILTER_CREATED",
      payload
  }
}


export function orderByWeight(payload) {
  return {
    type: 'ORDER_BY_WEIGHT',
    payload
  }
}


export function postBreed(payload) {
  return async function (dispatch) {
    const response = await axios.post('/breed', payload)
    console.log(response)
    return response;
  }
}

  export function getNameDogs(name) {
    return async function (dispatch) {
      try{
        var json = await axios.get("/dogs?name=" + name);
        return dispatch ({
          type: 'GET_NAME_DOGS',
          payload: json.data
        }) 
      } catch(error) {
        console.log(error)
      }
    }
  }
  
  export function getDetail(id) {
    return async function(dispatch){
      try {
        const json = await axios.get(`/dogs/${id}`);
        return dispatch ({
          type: "GET_DETAIL",
          payload: json.data
        })
      }  catch(error) {
        console.log(error)
    }
    }
  }