const { stringify } = require('jade/lib/utils');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Model({
    name: String,
    completed: Boolean,
    


})