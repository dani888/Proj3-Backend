const express = require("express")
const cardRouter = express.Router()
const cards = require('../models/userCards');

// INDEX ROUTE
cardRouter.get('/', (req, res) => {
    cards.find({}, (err, card) => {
        res.json(card)
    });
});
cardRouter.get('/seed', async (req, res) => {
    try {
        await cards.deleteMany({});
        const cardsz = await cards.create([
            {nickName: 'Daniel', nickName: 'Dan', employed: true, companyName: "Dreamingcode Inc", jobTitle: "Web Developer", hobbies: "Running"},
            {nickName: 'Joey', nickName: 'Joe', employed: true, companyName: "Baking Inc", jobTitle: "Software Engineer", hobbies: "Video Games"},
            {nickName: 'Joey2', nickName: 'Joe2', employed: true, companyName: "Baking Inc", jobTitle: "Front-end Developer", hobbies: "traveling"}
        ]);
        res.json(cardsz);
    } catch (error) {
        console.log(error);
        res.json({error: 'something went wrong'});
    }
});

module.exports = cardRouter