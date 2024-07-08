import express from "express";
const router = express.Router();
import persanSchemaModal from "../modals/persanschema.js";


router.post("/", async (req, res) => {
  try {
    const persandetails = req.body //aswing data
    const newpersan = new persanSchemaModal(persandetails);
    const response = await newpersan.save();
    console.log("succfully data saved in the database...");
    res.status(200).json(response)
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" })
  }
})
router.get("/", async (req, res) => {

  try {
    const persandetails = await persanSchemaModal.find();
    console.log("Data fetched sucessfully....");
    res.status(200).json(persandetails);

  }
  catch (err) {
    console.log(err);
    res.status(500).json({ err: "internal server error" })
  }
})

router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;//Extract the work type from the url parameter
    if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {
      const response = await persanSchemaModal.find({ work: worktype });
      console.log('response fetched');
      res.status(200).json(response);
    }
    else
      res.status(404).json({ error: "Invalid work type" });

  }
  catch (err) {
    console.log(err)
    res.status(500).json({ error: "Internal server error" })

  }
})

// Update person data..
router.put("/:id", async (req, res) => {
  try {
    const persanId = req.params.id;//Extract the id from url parameter 
    const UpdatePersanData = req.body;// update data for the persan

    const response = await persanSchemaModal.findByIdAndUpdate(persanId, UpdatePersanData, {
      new: true,// Return the update document
      runvalidation: true,// run mongoose validation
    })
    if (!response) {
      return res.status(404).json({ error: 'person not found ' });
    }
    console.log('data updated Sucessfully...');
    res.status(200).json(response);
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ error: "Person Not Found" })

  }
})
// data delete 
router.delete("/:id", async (req, res) => {
  try {
    const persanId = req.params.id;

    //Assuming you have a persan modal
    const response = await persanSchemaModal.findByIdAndDelete(persanId);
    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log('data delet sucessfully...');
    res.status(200).json({ message: "person deteted successfully" });
  }
  catch (err) {

    console.log(err)
    res.status(500).json({ error: "internal server error" });
// commitett

  }
})


export default router;
