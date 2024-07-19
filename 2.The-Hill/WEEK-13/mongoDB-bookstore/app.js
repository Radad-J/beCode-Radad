const express = require("express");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");
//init app & middleware
const app = express();
app.use(express.json());

let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("app listening on post 3000");
    });
  }
  db = getDb();
});

//get books
app.get("/books", (req, res) => {
    let page = req.query.page || 0;
    let booksPerPage = 3;
  let books = [];

  db.collection("books")
    .find()
    .sort({ author: 1 }) //returns a cursor thats why we use foreach
    .skip(page  * booksPerPage)
    .limit(booksPerPage)
    .forEach((book) => {
      books.push(book);
    })
    .then(() => {
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" });
    });
});

// GET SINGLE BY ID
app.get("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        res.status(500).json({ error: "error" });
      });
  } else {
    res.status(500).json({ error: "Not a valid book id" });
  }
});

// POST book
app.post("/books", (req, res) => {
  const newBook = req.body;
  db.collection("books")
    .insertOne(newBook)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => res.status(500).json({ msg: "Could not post book" }));
});

//delete book by id
// DELETE USER

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;

  if (ObjectId.isValid(id)) {
    db.collection("books")
      .deleteOne({ _id: new ObjectId(id) })
      .then(() => {
        res.json({ msg: "Books deleted" });
      })
      .catch((err) => res.json({ msg: "Could not delete the user" }));
  } else {
    res.json({ msg: "Not a valid ID" });
  }
});

//update book
// UPDATE USER

app.patch("/books/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (ObjectId.isValid(id)) {
    db.collection("books")
      .updateOne({ _id: new ObjectId(id) }, { $set: updates })
      .then((result) => res.status(200).json({ msg: "Book updated", result }))
      .catch((err) => res.status(500).json({ msg: "Could not update book" }));
  } else {
    res.status(500).json({ msg: "Not a valid ID" });
  }
});
