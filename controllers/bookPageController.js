
import { Book } from "../models/bookModel.js";

const index = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.render("insert", { books });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).send("Book not found");
    }

    res.render("edit", { book });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).send("Book not found");
    }

    await book.update({
      BookTitle: req.body.BookTitle,
      Author: req.body.Author,
      Genre: req.body.Genre,
      Quantity: Number(req.body.Quantity)
    });

    res.redirect("/library");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const remove = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).send("Book not found");
    }

    await book.destroy();
    res.redirect("/library");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { index, getBook, update, remove };
