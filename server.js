const express = require('express');
// API
// ---- routes ---- endpoints

const app = express();
//home route
//endpoint
app.get('/', (req, res)=>{
    res.send("Hello, welcome home!");
})

app.get('/check-status', (req, res)=>{
    res.send("Server is up and running")
})
const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021 },
    { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018 },
    { id: 5, make: 'Tesla', model: 'Model S', year: 2022 },
    { id: 6, make: 'Nissan', model: 'Altima', year: 2020 },
    { id: 7, make: 'BMW', model: '3 Series', year: 2021 },
    { id: 8, make: 'Audi', model: 'A4', year: 2020 },
    { id: 9, make: 'Mercedes-Benz', model: 'C-Class', year: 2019 },
    { id: 10, make: 'Lexus', model: 'RX', year: 2021 }
];

app.get('/cars', (req, res)=>{
    res.json(cars)
})


app.get('/cars/:carId', (req, res)=>{
    let requestedId = req.params.carId;
    let requestedCar = cars.find(car=>car.id === parseInt(requestedId));
    if(requestedCar){
        res.json(requestedCar);
        return
    }
    res.status(404).send("car not found")
})




app.listen(3000, ()=>{console.log("Server started on port: 3000")})
