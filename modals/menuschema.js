import mongoose  from "mongoose";
const menuschema=mongoose.Schema({
    //
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,

    },
    taste:{
        type:String,
        enum:["Spicy","Sweet"],

    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[],
    },
    num_sales:{
        type:Number,
        default:0,
    }
})
const MenuSchemaModal=mongoose.model("menuItem",menuschema)
export default MenuSchemaModal;