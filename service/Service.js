const mongo = require("../db/mongodb");
const schema = require("../schema/schema");
const ObjectId = require("mongodb").ObjectId;

const addMentor = async (req, res) => {
  try {
    const { error, value } = schema.mentor.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    const mentor = await mongo.db.collection("mentor").findOne({ email: value.email });
    if (mentor) return res.status(400).send({ error: "mentor already exists" });
    const checkstudent = await mongo.db.collection("student").findOne({ email: value.email });
    if (checkstudent) return res.status(400).send({ error: "already added as student" });

    await mongo.db.collection("mentor").insertOne(value);
    res.send(value);
  } catch (error) {
    res.status(400).send(error);
  }
};

const addStudent = async (req, res) => {
  try {
    const { error, value } = schema.student.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    const student = await mongo.db.collection("student").findOne({ email: value.email });
    if (student) return res.status(400).send({ error: "student already exists" });
    const checkmentor = await mongo.db.collection("mentor").findOne({ email: value.email });
    if (checkmentor) return res.status(400).send({ error: "already added as mentor" });
    
    await mongo.db.collection("student").insertOne(value);
    res.send(value);
  } catch (error) {
    res.status(400).send(error);
  }
};

const mentors = async (req, res) => {
  try {
    const mentors = await mongo.db.collection("mentor").find().toArray();
    res.send(mentors);
  } catch (error) {
    res.status(500).send(error);
  }
};

const students = async (req, res) => {
  try {
    const students = await mongo.db.collection("student").find().toArray();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

const unassignedstudents = async (req, res) => {
  try {
    const students = await mongo.db.collection("student").find({ mentorid: { $exists: false } }).toArray();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

const assignmentor = async (req, res) => {
  try {
    const { error, value } = schema.assignmentor.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    value.students.forEach(async (id) =>await mongo.db.collection("student").updateOne({ _id: ObjectId(id) },{ $set: { mentorid: value.mentorid } }));
    res.send({ message: "assigned" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const changementor = async (req, res) => {
  try {
    const { error, value } = schema.changementor.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    await mongo.db.collection("student").updateOne({ _id: ObjectId(value.studentid) },{ $set: { mentorid: value.mentorid } });
    res.send({ message: "changed mentor" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const mentes = async(req, res) =>{
    try {
        const { error, value } = schema.mentes.validate(req.body);
        if (error) return res.status(400).send({ error: error.details[0].message });
        const mentes = await mongo.db.collection("student").find({ mentorid:value.mentorid }).toArray();
        res.send(mentes);
      } catch (error) {
        res.status(400).send(error);
      }
}

module.exports = {
  addMentor,
  addStudent,
  mentors,
  students,
  unassignedstudents,
  assignmentor,
  changementor,
  mentes
};
