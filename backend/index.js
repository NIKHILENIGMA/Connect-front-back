import express from "express";
const app = express();


app.get('/api/v1/products', (req,res) => {
    const products = [
        {
            id: 1,
            name: 'table wood',
            price: 200,
        },
        {
            id: 2,
            name: 'nokia',
            price: 500,
        },
        {
            id: 3,
            name: 'iphone',
            price: 500,
        },
        {
            id: 4,
            name: 'one Plus',
            price: 450,
        },
        {
            id: 5,
            name: 'Vivo',
            price: 230,
        },

    ]
    // http://localhost:3000/api/v1/products?search=iphone

    if(req.query.search){
        const filterProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search))
        res.send(filterProducts)
        return;
    }
    setTimeout(() => {
        res.send(products)
    }, 3000)
})





let port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Server runnning on port${port}`)
})