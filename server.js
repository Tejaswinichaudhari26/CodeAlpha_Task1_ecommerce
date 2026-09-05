const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Dummy Data
const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 15000 },
    { id: 3, name: 'Headphones', price: 2000 }
];

let cart = [];

// Home Page - Products Listing
app.get('/', (req, res) => {
    res.render('index', { products, cart });
});

// Add to Cart
app.post('/add-to-cart', (req, res) => {
    const productId = parseInt(req.body.id);
    const item = products.find(p => p.id === productId);
    if(item) cart.push(item);
    res.redirect('/');
});

app.listen(3000, () => console.log('E-commerce app running on http://localhost:3000'));