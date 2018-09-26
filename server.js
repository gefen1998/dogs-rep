const express = require('express');
const app = express();

const myDogsData = [
    {name: "Rexy", age: 2.5, image:"https://barkpost.com/wp-content/uploads/2015/02/featmeme.jpg"},
    {name: "Doggo", age: 120, image:"http://p0.qhimg.com/t013c9730f83055bf51.jpg"},
    {name: "Sebastian", age: 40, image:"https://c1.staticflickr.com/8/7022/6540669737_7527a5de13_b.jpg"},
    {name: "Bob", age: 1, image:"http://p0.qhimg.com/t017818a2c1afd084b5.jpg"}
];

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/dogs', (req, res) => {
    res.send(myDogsData); 
});

app.listen(1998);
