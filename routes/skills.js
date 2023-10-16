const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

router.get('/', skillsController.index);
router.get('/:id', skillsController.show);
router.get('/new', (req, res) => {
    res.render('skills/new');
});

router.post('/', (req, res) => {
    const { name, level, description } = req.body;
    res.redirect('/skills');
});

router.delete('/:id', (req, res) => {
    const skillId = parseInt(req.params.id);
    res.redirect('/skills');
});

router.get('/:id/edit', (req, res) => {
    const skillId = parseInt(req.params.id);
    res.render('skills/edit', { skill });
});

router.put('/:id', (req, res) => {
    const skillId = parseInt(req.params.id);
});    

module.exports = router;