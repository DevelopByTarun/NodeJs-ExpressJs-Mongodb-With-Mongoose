const express = require("express");
const app = express();

// 1st way to create webservice in form of json
// app.get("/search/cars/:carname", (requset, response) => {
//     var carName = requset.param.carname;
//     var obj = {

//         name: "santro",
//         price: 525223,
//         avg: 21
//     }
//     response.send(obj);
// });

// 2nd way to create webservice in form of json
// app.get("/show/cars", (requset, response) => {
//     var car = [
//         { name: "santro", price: 692249, avg: 30 },
//         { name: "zen", price: 692249, avg: 30 },
//         { name: "hondacity", price: 1050345, avg: 16 },
//         { name: "fortuner", price: 2545102, avg: 23 },
//         { name: "scorpio", price: 872358, avg: 27 },
//         { name: "santro", price: 692249, avg: 30 },
//         { name: "zen", price: 692249, avg: 30 },
//         { name: "hondacity", price: 1050345, avg: 16 },
//         { name: "fortuner", price: 2545102, avg: 23 },
//         { name: "santro", price: 692249, avg: 30 },
//         { name: "zen", price: 692249, avg: 30 },
//         { name: "hondacity", price: 1050345, avg: 16 },
//         { name: "fortuner", price: 2545102, avg: 23 },
//         { name: "santro", price: 692249, avg: 30 },
//         { name: "zen", price: 692249, avg: 30 },
//         { name: "hondacity", price: 1050345, avg: 16 },
//         { name: "fortuner", price: 2545102, avg: 23 }
//     ];
//     response.send(car);
// });

// 3 rd way to create webservice in form of json with extrnal router through rsponse.json
const routes = require("./moviesRoute");
app.use("/movieslist", routes);


app.listen(1234, () => {
    console.log("Node Server Start");
});