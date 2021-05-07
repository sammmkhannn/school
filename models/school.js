const mongoose = require('mongoose');


//creating the school schema

const  schoolSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    institutionType:{
        type:String,
        require:true
    },
    location:{
        city:{
            type:String,
            require:true
        },
        coordinates:{
            type:Object,
            require:true
        }
    },
        totalStudents:{
            type:Number,
            require:true
        },
        numberOfBoys:{
            type:Number,
            require:true
        },
        numberOfGirls:{
            type:Number,
            require:true
        }
});
module.exports = mongoose.model('school',schoolSchema);


