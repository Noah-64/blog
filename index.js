import bodyParser from "body-parser";
import express from "express";
const port=3000;
const app=express();
let storedData = null;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    if (storedData) {
        res.render("index.ejs", { storedData: storedData });
    } else {
        res.render("index.ejs");
    }
});


app.get("/books",(req,res)=>{
    res.render("books.ejs");
})

app.get("/fortune",(req,res)=>{
    res.render("fortune.ejs");
})

app.get("/food",(req,res)=>{
    res.render("food.ejs");
})

app.get("/quotes",(req,res)=>{
    res.render("quote.ejs");
})
app.get("/anime",(req,res)=>{
    res.render("anime.ejs");
})
app.get("/movies",(req,res)=>{
    res.render("movies.ejs");
})
app.get("/create",(req,res)=>{
    res.render("create.ejs");
})

app.post('/submit', (req, res) => {
      storedData = {
        name: req.body["name"],
        info1: req.body["info1"],
        info2: req.body["info2"],
        info3: req.body["info3"],
        category: req.body["category"],
        ovr: req.body["description"]
    };
    res.render("index.ejs", { storedData: storedData });
});


app.delete("/delete",(req,res)=>{

    storedData = null;
    res.sendStatus(200);
});


app.listen(port,(req,res)=>{
    console.log(`Listening in port ${port}`);
})
