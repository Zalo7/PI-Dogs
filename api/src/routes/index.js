const { Router } = require('express');
const axios = require("axios")
const router = Router();
const { Dog, Temperament } = require("../db")
const { API_KEY } = process.env;

//GET DOGS

const infoApi = async () => {
    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    return data.map((el) => {
      return{
      id: el.id,
      image: el.image,
      temperament: el.temperament,
      name: el.name,
      weight:  el.weight.metric.includes('NaN')? { metric:'No data'} : el.weight,
      height: el.height,
      life_span: el.life_span,
       }
     });
    }


router.get("/dogs", async(req, res) => {
    const {name} = req.query
    try {
        const totalDogs = await infoApi()
        const dogXdb = await Dog.findAll();

if(name) {
    const nameDog = await totalDogs.filter((el) =>
          el.name.toLowerCase().includes(name.toLowerCase())
          );
          const nameDB = dogXdb.filter((el) =>
            el.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
            );
            if (nameDB.length || nameDog.length ) {
                res.send(nameDB.concat(nameDog))
            } else {
                res.send([])
            }
}else{ 
    dogXdb.length ? res.send(dogXdb.concat(totalDogs)) : res.send(totalDogs);
 }
}catch(error) {
    console.log(error)
}
})

router.post("/breed", async (req, res) => {
    const dog = req.body;
    console.log(dog)
    if (dog.name === "") return res.status(505).send("Debe tener un nombre");
    await Dog.create({
        name: dog.name,
          height: {metric: dog.height},
          weight: {metric: dog.weight},
          life_span: dog.life_span,
          temperament: dog.temperament.join(", "),
          image: dog.image,
          created:  dog.created
    }).catch((error) => {
        return res.status(500).send(error);
    });
    res.send(dog)
})


router.get("/temperaments", async (req, res) => {
    const val = await Temperament.findAll();
    if (val.length === 0) {
        const tempAPI = await axios.get("https://api.thedogapi.com/v1/breeds")
        .catch((error) => {
            return res.status(500).send(error);
        });
        var tempList = await tempAPI.data
        .map((e) => e.temperament)
        .join()
        .split(", ")
        .join()
        .split(",");
        const list = new Set(tempList);
        for (let item of list) {
            await Temperament.create({ name: item});
        }
    }
    var temp = await Temperament.findAll();
    res.json(temp)  
})

router.get("/dogs/:id", async (req, res) => {
    const id = req.params.id;
    const DBdogs = await Dog.findAll();
    const search = await axios.get("https://api.thedogapi.com/v1/breeds")
    .catch((error) => {
        return res.status(500).send(error);
    })
    if (id.includes('db')) {
        let ID = id.split("db");
        return res.send(DBdogs.find(e => e.id === Number(ID[0])).dataValues);
    } else {const dog = await search.data.find((dog) => dog.id == id);
    if (dog == null || dog == undefined) {
        return res.send(404);
    }
     if (dog.weight.metric.includes("NaN")) {
    dog.weight.metric = "No data"
    }
    return res.send(dog)
    }
})
module.exports = router;

