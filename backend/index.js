const express = require("express");
const app = express();
const port = 9001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req,res) => {
    let {user, password} = req.query;
    res.send(`Standard get response ${user} and ${password}`);
})

app.post("/register", (req,res) => {
    let {user, password} = req.body;
    res.send(`Standard post response ${user} and ${password}`);
})


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})