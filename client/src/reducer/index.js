const initialState = {
  dogs: [],
  allDogs: [],
  filtrados: [],
  temperaments: [],
  filtrados2: [],
  detail: [],
  filtrados3: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      function dbid(dog) {
        if (dog.created === true) {
          dog.id = dog.id + "db";
        }
        return dog;
      }
      return {
        ...state,
        dogs: action.payload
          .filter((d) => d.temperament !== undefined)
          .map(dbid),
        filtrados2: action.payload
          .filter((d) => d.temperament !== undefined)
          .map(dbid),
        filtrados3: action.payload
        .filter((d) => d.temperament !== undefined)
          .map(dbid),
      };
    case "ORDER_BY_ASC":
      let sortedArr =
        action.payload === "asc"
          ? state.dogs.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              } else {
                return 0;
              }
            })
          : state.dogs.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        filtrados2: sortedArr,
      };
    case "GET_TEMPERAMENTS":
      const temps = action.payload.filter((d) => d.name !== "");
      return {
        ...state,
        temperaments: temps,
      };
    case "POST_BREED":
      return {
        ...state,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "ORDER_BY_TEMPERAMENT":
      const todos = state.filtrados3;
      const filteredDogs =
        action.payload === "All"
          ? todos
          : todos.filter((d) => {
              return d?.temperament.includes(action.payload)})

      return {
        ...state,
        dogs: filteredDogs,
      };
    case "GET_NAME_DOGS":
      return {
        ...state,
        dogs: action.payload,
      };
    case "ORDER_BY_WEIGHT":
      const filterWeight =
        action.payload === "max"
          ? state.filtrados2.sort((a, b) => {
              if (a.weight.metric < b.weight.metric) {
                return 1;
              }
              if (b.weight.metric < a.weight.metric) {
                return -1;
              } else {
                return 0;
              }
            })
          : state.filtrados2.sort((a, b) => {
              if (a.weight.metric < b.weight.metric) {
                return -1;
              }
              if (b.weight.metric < a.weight.metric) {
                return 1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        dogs: filterWeight,
      };
    case "FILTER_CREATED":
      const createdFiltered =
        action.payload === "Created"
          ? state.filtrados2.filter((el) => el.created === true)
          : state.filtrados2.filter((el) => !el.created);
      return {
        ...state,
        dogs: createdFiltered,
      };
    default:
      return state;
  }
}

export default rootReducer;