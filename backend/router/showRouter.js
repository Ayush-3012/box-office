import express from "express";
import { Show } from "../model/showModel.js";

const showRouter = express.Router();

// ROUTE FOR GETTING ALL BOOKS
showRouter.get("/", async (req, res) => {
  Show.find()
    .then(
      (show) => console.log(show)
      //   res.status(200).json({
      //     data: show,
      //   })
    )
    .catch((err) => res.status(400).json("Error" + err));
});

// ROUTE TO ADD BOOK TO FAVORITE
showRouter.post("/", (req, res) => {
  Show.findOne({ id: req.body.id }).then((found) => {
    // if (!found) {
    //   const newBook = {
    //     id: req.body.id,
    //     volumeInfo: req.body.book,
    //   };
    //   Book.create(newBook)
    //     .then(() => {
    //       res.status(201).json({message: "Book Added Successfully"});
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //       res.status(500).send({ message: error.message });
    //     });
    // } else {
    //   Book.deleteOne({ id: req.body.id })
    //     .then(() =>
    //       res.status(200).json({ message: "Book Removed Successfully" })
    //     )
    //     .catch(() => res.status(400).json({ message: "Book Not Found" }));
    // }
  });
});

export default showRouter;
