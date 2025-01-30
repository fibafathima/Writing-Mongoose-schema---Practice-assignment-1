const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
  firstname:{
    type:String,
    required:true

  }
  ,lastname:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    min:1
  }
  
})

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    default: ['user']
  },
  profile: profileSchema,
  lastLogin: {
    type: Date
  }

})
;

module.exports = mongoose.model('User', userSchema);
