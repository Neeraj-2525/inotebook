const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchUser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/auth/getuser". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const { tag } = req.query; // Extract tag query parameter
        let notes;
        
        if (tag) {
            notes = await Note.find({ user: req.user.id, tag }); // Filter by tag
        } else {
            notes = await Note.find({ user: req.user.id });
        }

        // const notes = await Note.find({ user: req.user.id });


        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 2: Add a new Note using: POST "/api/auth/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 2 }),
    body('description', 'Description must be atleast 3 characters').isLength({ min: 3 }),], async (req, res) => {
        try {

            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {

        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


})

// ROUTE 4: Delete an existing Note using: PUT "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;


    try {
        // Find the note to be deleted and delete it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns the Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note.deletedAt = new Date();
        await note.save();
        res.json({ "Success": "Note has been marked for deletion", note: note });

        // note = await Note.findByIdAndDelete(req.params.id)
        // res.json({ "Success": "Note has been deleted", note: note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});

// 5. Restore a deleted note  : login required
router.put('/restore/:id', fetchuser, async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }

        //allow only if user owns the note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        if (note.deletedAt === null) {
            return res.status(400).send("Note is not deleted");
        }

        note.deletedAt = null;
        await note.save();

        res.json({ message: "Note restored successfully", note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


// 6. Permanently Delete a Note  : login required
router.delete('/permanentlydelete/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be deleted and delete it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns the Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted permanantly!"});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// 7. Fetching the deleted notes: login required
router.get('/fetchdeletednotes', fetchuser, async (req, res) => {
    try {
        const deletedNotes = await Note.find({
            user: req.user.id,
            deletedAt: { $ne: null },
        });
        res.json(deletedNotes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 8: To get all the tags
router.get('/gettags', fetchuser, async (req, res) => {
    try {
        const tags = await Note.distinct('tag', { user: req.user.id });
        res.json(tags);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



module.exports = router