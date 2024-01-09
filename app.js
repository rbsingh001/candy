const bodyParser = require('body-parser');
const express = require('express');

const sequelize = require('./utils/database');
const Candy = require('./model/candy');

var cors = require('cors');


const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/candy/:id', async (req, res) => {
    const id = req.params.id;
    const candy = await Candy.findByPk(id)
    res.send(candy);
})

app.get('/candies', async(req, res) => {
    const candies = await Candy.findAll();
    res.send(candies);

});

app.post('/candy', async (req, res) => {

    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;

    // console.log(name, description, price, quantity)

    const candy = await Candy.create({
        name: name,
        description: description,
        price: price,
        quantity: quantity
    })
    res.send(candy);
});

app.put('/candy/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const candy = await Candy.findByPk(id);

        if (!candy) {
            return res.status(404).json({ error: 'Candy not found' });
        }

        candy.quantity = req.body.quantity;
        await candy.save();
        res.send(candy);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

})

sequelize
    // .sync({force: true})
    .sync()

    .then((result) => {

        console.log("app started")
        app.listen(3000);
    })
    .catch(err => console.log(err));
