var express = require('express');
const Tasks = require('./models/tasks');
const path = require("path");
var app = express();

const db = require('./config/mongoose');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// use res.render to load up an ejs view file
app.post('/add-tasks/', function(req, res){
  Tasks.create({
      task: req.body.task,
      category: req.body.category,
      date: req.body.date
  }, function(err, newTask){
      if(err){
          console.log('Error in creating a Task!')
          return;
      }
    //   console.log('******', newTask);
      return res.redirect('back');
  })
})

app.get('/delete-task', function(req, res){
    // get the id from query
    var id = req.query;

    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
        Tasks.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting task');
            }
        })
    }
    return res.redirect('back'); 
});

const tasks = [];
// index page
app.get('/', function(req, res) {
  Tasks.find({},function(err,tasks){
    if(err){
        console.log("Error while fetching data from db");
        return;
    }
    res.render('home',{
        tasks_list : tasks
    });
})
});



app.listen(8080);
console.log('Server is listening on port 8080');