const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));

app.get('/', (request, response) => {
    response.send("Hello Express");
});
app.get('/cats', (request, response) => {
    response.render('cats');
})
app.get('/whiskers', (request, response) => {
    let details = {
        name: "Whiskers", 
        pic: "img/image.jpg",
        age: 7, 
        sleeping_spots: "under the bed"
        
    };
    response.render('details', { cat: details });
})
app.get('/race', (request, response) => {
    let details = {
        name: "Race", 
        pic: "img/image2.jpg",
        age: 2, 
        sleeping_spots: "on top of the bed"
        
    };
    response.render('details', { cat: details });
})
app.get('/petey', (request, response) => {
    let details = {
        name: "Petey", 
        pic: "img/image3.jpg",
        age: 1, 
        sleeping_spots: "next to the window"
        
    };
    response.render('details', { cat: details });
})
app.get('/daisy', (request, response) => {
    let details = {
        name: "Daisy", 
        pic: "img/image4.jpg",
        age: 3, 
        sleeping_spots: "near you"
        
    };
    response.render('details', { cat: details });
})

app.listen(8000, () => console.log("listening on port 8000"));