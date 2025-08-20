const express= require ("express");

const router=express.Router();
const { getAllNotes, createNote, updateNote, deleteNote, getSingleNote } = require("../controllers/notesController.js");

router.get("/", getAllNotes);
router.get("/:id", getSingleNote);

router.post("/",createNote);

router.put("/:id",updateNote);

router.delete("/:id",deleteNote);
module.exports = router;