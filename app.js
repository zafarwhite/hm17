// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var courses = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'node.js'
    },
    {
        id: 3,
        name: 'angular'
    }
]

app.get('/', function(req, res) {
    res.send('Hello World');
});

//get all courses
app.get('/api/courses', function (req, res) {
    res.send(courses);
});

// Get one course
app.get('/api/courses/:id', function (req, res) {
    var course = courses.find(function (course) {
        return course.id === parseInt(req.params.id);
    });
    res.send(course);
});

app.post('/api/courses', function (req, res) {
    console.log(req.body);
    var course = {
        id: Date.now(),
        name: req.body.name
    };
    courses.push(course);

    res.send(courses);
});

app.put('/api/courses/:id', function(req, res) {
    var course = courses.find(function (course) {
        return course.id === parseInt(req.params.id)
    });
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', function(req, res) {
    course = courses.filter(function (course) {
        return course.id !== parseInt(req.params.id);
    });
    res.sendStatus(200);
});


app.listen(3000, function () {
    console.log('Example app listining on port 3000!');
});
