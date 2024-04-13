const express = require("express");
const rootRouter = require("./routes/index");
const app = express();

app.use("/api/v1", rootRouter);

app.get("/", (req, res)=>{
    res.json({
        message: "Hello from sports api",
    })
});
app.listen(3000);