const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/TuDaV_Items');
        console.log('connect')
    }
    catch (error){
       
    }
}
module.exports = {connect}