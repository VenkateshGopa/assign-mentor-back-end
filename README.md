# assign-mentor

Postman documentation Url

https://documenter.getpostman.com/view/16251431/UVJckc6Z


## Endpoints

POST /addmentor

POST /addstudent

GET /students

GET /mentors

GET /unassignedstudents

POST /assignmentor

POST /changementor

POST /mentes

### POST Add Mentor
https://assignmentor1.herokuapp.com/addmentor

End point to add a mentor

Bodyraw (json)
json
{
  "name": "arun",
  "email": "arun@gmail.com"
}

### POST Add student
https://assignmentor1.herokuapp.com/addstudent

End point to add a student

Bodyraw (json)
json
{
  "name": "nila",
  "email": "nila@gmail.com"
}

### GET mentors
https://assignmentor1.herokuapp.com/mentors

Get all mentors data.

### GET students
https://assignmentor1.herokuapp.com/students

Get all students data.

### GET unassignedstudents
https://assignmentor1.herokuapp.com/unassignedstudents

gets all un-assigned students data.

### POST assignmentor
https://assignmentor1.herokuapp.com/assignmentor

Endpoint to assign mentees(singe or multiple) to mentor

Bodyraw (json)
json
{
  "mentorid": "61974c4b23e5d49f591a7a27",
  "students": [
    "61976c813b9754db82613258"
  ]
}

### POST change mentor for perticular student
https://assignmentor1.herokuapp.com/changementor

End point to change mentor for particular student.

Bodyraw (json)
json
{
  "studentid": "61974c5f23e5d49f591a7a28",
  "mentorid": "61974c4b23e5d49f591a7a27"
}

### POST mentees to particular mentor
https://assignmentor1.herokuapp.com/mentes

To get all the mentees list of particular mentor

Bodyraw (json)
json
{
  "mentorid": "61974c4b23e5d49f591a7a27"
}
