const express = require("express")
const cardRouter = express.Router()
const cards = require('../models/userCards');

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
            {userName: 'Daniel', nickName: 'Dan', linkedIn: "https://www.linkedin.com/in/daniel-werminghausen32112333/", portfolio:"http://danielwerminghausen.com/", employed: true, companyName: "Dreamingcode Inc", jobTitle: "Web Developer", hobbies: "Running"},
            {userName: 'Joey', nickName: 'Joe', linkedIn: "https://www.linkedin.com/in/daniel-werminghausen32112333/", portfolio:"http://danielwerminghausen.com/", employed: true, companyName: "Baking Inc", jobTitle: "Software Engineer", hobbies: "Video Games"},
            {userName: 'Joey2', nickName: 'Joe2', linkedIn: "https://www.linkedin.com/in/daniel-werminghausen32112333/", portfolio:"http://danielwerminghausen.com/", employed: true, companyName: "Baking Inc", jobTitle: "Front-end Developer", hobbies: "traveling"}
        ]);
        res.json(cardsz);
    } catch (error) {
        console.log(error);
        res.json({error: 'something went wrong'});
    }
});

module.exports = cardRouter