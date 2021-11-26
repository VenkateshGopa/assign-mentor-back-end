const joi = require('joi');

const mentor = joi.object({
    name: joi.string().required().min(6),
    email: joi.string().required(),
})

const student = joi.object({
    name: joi.string().required().min(6),
    email: joi.string().required(),
    mentorid:joi.string()
})

const assignmentor = joi.object({
    mentorid:joi.string().required(),
    students: joi.array()
})

const changementor = joi.object({
    studentid : joi.string().required(),
    mentorid: joi.string().required()
})

const mentes = joi.object({
    mentorid:joi.string().required()
});

module.exports= {
    mentor,
    student,
    assignmentor,
    changementor,
    mentes
}