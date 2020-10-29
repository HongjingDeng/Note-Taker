var router = require("express").Router();
var notes = require("../db/notes.js");

router.get("/api/notes", function(req, res){
  notes.getNotes().then(notes => res.json(notes)).catch(err => res.status(500).json(err));
})

router.post("/api/notes", function(req, res){
  notes.addNotes(req.body).then(notes => res.json(notes)).catch(err => res.status(500).json(err));
})

router.delete("/api/notes/:id", function(req, res){
  notes.deleteNote(req.params.id).then(() => res.json({ok: true})).catch(err => res.status(500).json(err));
})

module.exports = router; 