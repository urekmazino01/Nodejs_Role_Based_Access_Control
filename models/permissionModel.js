const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    permission:[
        {
            permission_name:String,
            permission_value:[Number]

        }
    ]



})

module.exports = mongoose.model('Permission',permissionSchema);

// user_id:ObjectId('sassa'),
// permission:[
//     {
//         permission_name:'user',
//         permission_value:[0,1,2,3] // 0 -> create, 1 -> read, 2-> edit, 3-> delete
//     },
//     {
//         permission_name:'post',
//         permission_value:[0,1,2] // 0-> create, 1-> read, 2-> edit
//     },
//     {
//         permission_name:'category',
//         permission_value:[0,2] // 0->create, 1-> edit
//     },

// ]