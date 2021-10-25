const express = require("express")
const displayRouter = express.Router()
const cards = require('../models/userCards');

// INDEX ROUTE
displayRouter.get('/', (req, res) => {
    cards.find({}, (err, card) => {
        res.json(card)
    });
});
displayRouter.get("/:id", (req, res) => {
    cards.findById(req.params.id, (err, card) => {
        console.log(card)
        res.json(card)
    })
  })

 // PEOPLE DELETE ROUTE
 displayRouter.delete("/:id", async (req, res) => {
    try {
      // send all people
      res.json(await cards.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE UPDATE ROUTE
  displayRouter.put("/table/:id/edit", async (req, res) => {
    try {
      // send all people
      res.json(
        await cards.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

module.exports = displayRouter