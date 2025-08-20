const Note = require("../models/Note.js");

const getAllNotes = async (req, res) => {

    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    }
    catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: `internal server error in getting notes. ${error}` });
    }

}
const getSingleNote = async (req, res) => {
    try {
        const id = req.params.id;
        const note = await Note.findById(id);
        if (!note) return res.status(404).json({ message: "note not Found" })
        res.status(200).json(note);
    }
    catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: `internal server error in getting notes. ${error}` });
    }

}
const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const isEmpty = !title || !content;
        if (isEmpty) {
            return res.status(400).json({ message: "Title and content are required" });
        }
        const isAlredyExis = await Note.findOne({ title });

        if (isAlredyExis) {
            return res.status(400).json({ message: "Note with this title is already exists" });
        }

        const newNote = new Note({ title, content });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote)

    }
    catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ message: `internal server error in creating note. ${error}` });
    }
}


const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const id = req.params.id;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedNote) return res.status(404).json({ message: "Note not found" });

        res.status(200).json(updatedNote)
    }
    catch (error) {

        console.error("Error creating note:", error);
        res.status(500).json({ message: `internal server error in creating note. ${error}` });
    }
}

const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        const deltedNote = await Note.findByIdAndDelete(id);
        if (!deltedNote) return res.status(404).json({ message: "Note not found" });
        res.status(200).json({ message: "Note Deleted Successfully" });
    }
    catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ message: `internal server error in creating note. ${error}` });
    }

}
module.exports = { getAllNotes, createNote, deleteNote, updateNote, getSingleNote }