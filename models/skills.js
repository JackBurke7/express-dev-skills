const skills = [
    { id: 1, name: 'JavaScript', level: 'Intermediate', description: 'A versatile programming language.' },
    { id: 2, name: 'HTML', level: 'Beginner', description: 'Hypertext Markup Language for web pages.' },
  ];
  
  module.exports = {
    getAllSkills: () => skills,
    getSkillById: (id) => skills.find(skill => skill.id === id),
  };
  