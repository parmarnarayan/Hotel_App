
import mongoose from "mongoose";

   const connectDB =async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}`)
       console.log(`MongoDB connected!! DB Host:${mongoose.connection.host}`);

    }
    catch(error){
        console.log(`MONGODB CONCTION failed ?? ${error}`);
        process.exit(1);
    }
}
export default connectDB
