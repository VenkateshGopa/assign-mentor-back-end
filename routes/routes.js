const express = require('express');
const service = require('../service/Service');

const route = express.Router();

route.get('/mentors', service.mentors);
route.get('/students', service.students);
route.post('/addmentor', service.addMentor);
route.post('/addstudent', service.addStudent);
route.get('/unassignedstudents', service.unassignedstudents);
route.post('/assignmentor', service.assignmentor);
route.post('/changementor', service.changementor);
route.post('/mentes', service.mentes);  

module.exports = route;