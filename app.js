const express = require("express");
require("../src/db/conn");
const MenRanking = require("../src/models/mens");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", async (req, res) => {
  res.send("Hello from the thapa");
});

// we will handle post req
app.post("/mens",async(req,res)=>{
    try{

    }catch(e){
        
    }
})
app.listen(port, () => {
  console.log(`connection is live at port no.${port}`);
});
