const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));

app.get('/cars', (req, res) => {
    let cars_arr = []
    res.render('cars', {cars: cars_arr}); 
});
app.get('/cats', (req, res) => {
    let cats_arr = []
    res.render('cats', {cats: cats_arr}); 
});
app.get('/cars/new', (req, res) => {
    let newCarsArr = []
    res.render('new_car', {newCarsArr: newCarsArr}); 
});

app.get('/', (request, response) => {
    response.send("Hello Express");
});
app.listen(8000, () => console.log("listening on port 8000"));