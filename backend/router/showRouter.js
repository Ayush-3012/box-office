import express from "express";
import { Show } from "../model/showModel.js";

const showRouter = express.Router();

// ROUTE FOR GETTING ALL BOOKS
showRouter.get("/", async (req, res) => {
  Show.find()
    .then((shows) => res.send(shows))
    .catch((err) => res.status(400).json("Error" + err));
});

// ROUTE TO ADD BOOK TO FAVORITE
showRouter.post("/liked/shows", (req, res) => {
  Show.findOne({ id: req.body.id }).then((found) => {
    if (!found) {
      const newShow = {
        id: req.body.id,
        show: req.body.show,
      };
      Show.create(newShow)
        .then(() => {
          res.status(201).json({ message: "Show Added Successfully" });
        })
        .catch((error) => {
          console.log(error.message);
          res.status(500).send({ message: error.message });
        });
    } else {
      Show.deleteOne({ id: req.body.id })
        .then(() =>
          res.status(200).json({ message: "Show Removed Successfully" })
        )
        .catch(() => res.status(400).json({ message: "Show Not Found" }));
    }
  });
});

export default showRouter;
