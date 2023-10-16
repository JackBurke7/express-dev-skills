const skillModel = require('../models/skills');

module.exports = {
  index: (req, res) => {
    const skills = skillModel.getAllSkills();
    res.render('skills/index', { skills });
  },

  show: (req, res) => {
    const skillId = parseInt(req.params.id);
    const skill = skillModel.getSkillById(skillId);
    res.render('skills/show', { skill });
  },
};