

const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema(
    {
        user_id:String,
        room_chat_id:String,
        content:String,
        images:Array,
        deleted:{
            type:Boolean,
            default:false
        },
        deleteAt:Date

    },{
        timestamps: true
    }
)
const Account = mongoose.model('chatbox', accountSchema, 'chatbox'); 

module.exports = Account;

