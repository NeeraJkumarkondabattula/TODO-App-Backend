const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    task :{
        type :String,
        required :true
    },
    category:{
        type : String,
        required :true
    },
    date :{
        type :String,
        required :true
    }
})

const Tasks = mongoose.model('Tasks',tasksSchema);

module.exports = Tasks;