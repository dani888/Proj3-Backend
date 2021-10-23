const express = require("express")
const cardRouter = express.Router()
const cards = require('../models/userCards');

// INDEX ROUTE
cardRouter.get('/', (req, res) => {
    cards.find({}, (err, card) => {
        res.json(card)
    });
});
cardRouter.post('/', async (req, res) => {
    try {
        await cards.create(req.body);
        res.json({success: true});
    } catch(error){
        console.log(error);
        res.status(400).json({success: false})
    }
})

cardRouter.get('/seed', async (req, res) => {
    try {
        await cards.deleteMany({});
        const cardsz = await cards.create([
            {userName: 'Daniel', nickName: 'Dan', employed: "Yes", companyName: "Dreamingcode Inc", jobTitle: "Web Developer", hobbies: "Running"},
            {userName: 'Joey', nickName: 'Joe', employed: "Yes", companyName: "Baking Inc", jobTitle: "Software Engineer", hobbies: "Video Games"},
            {userName: 'Joey2', nickName: 'Joe2', employed: "Yes", companyName: "Baking Inc", jobTitle: "Front-end Developer", hobbies: "traveling"}
        ]);
        res.json(cardsz);
    } catch (error) {
        console.log(error);
        res.json({error: 'something went wrong'});
    }
});

module.exports = cardRouter