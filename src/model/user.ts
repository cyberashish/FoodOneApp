import mongoose from "mongoose";

const {Schema}  = mongoose;

const bookedTable = new mongoose.Schema({
    firstname: {type:String},
    email: {type:String},
    date: {type:Date},
    totalperson:{type:Number},
    request:{type:String}
  });

const userschema = new Schema({
    name:{type:String,required: true},
    email:{type:String,required: true,unique:true},
    googleId: { type: String },
    password:{type:String,default: ''},
    bookinginfo:{type:bookedTable}
})

const usermodel = mongoose.models.customer || mongoose.model('customer',userschema);

export default usermodel;