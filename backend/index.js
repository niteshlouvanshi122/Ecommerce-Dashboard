const express = require("express");
const cors = require("cors");

const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm"

require("./db/config");
const User = require("./db/Users");
const Product = require("./db/Product")
const app = express();


app.use(express.json());
app.use(cors());



app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  Jwt.sign({result},jwtKey,(err,token) => {
    if(err){
      res.send({result: "Somthing went wrong please try again letar"});
    }
    res.send({result, auth:token});
  })
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token) => {
        if(err){
          res.send({result: "Somthing went wrong please try again letar"});
        }
        res.send({user, auth:token});
      })
      
    } else {
      res.send({result: "No user found"});
    }
  }else {
    res.send({result: "Please fill require fild"});
  }
});

app.post("/add-product", verifyToken, async (req, res) => {
  let product = new Product(req.body)
  let result = await product.save();
  res.send(result)
})

app.get("/products", async (req, res) => {
  let products = await Product.find()

  if(products.length > 0){
    res.send(products)
  }else{
    res.send({result:"No Products fund"})
  }
})

app.delete("/product/:id", verifyToken , async (req, res) => {
  let result = await Product.deleteOne({_id:req.params.id})
  res.send(result)
})

app.get("/product/:id", verifyToken , async(req, res) => {
  let result = await Product.findOne({_id:req.params.id});

  if(result){
    res.send(result)
  }
  else{
    res.send({result:"No Record Foun"})
  }

})

app.put("/product/:id", verifyToken , async (req, resp) => {
  let result = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
  )
  resp.send(result)
});

app.put("/product/:id", verifyToken , async (req, resp) => {
  let result = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
  )
  resp.send(result)
});

app.get("/search/:key",verifyToken,  async (req, res) => {
  let result = await Product.find({
    "$or": [
      {
          name: { $regex: req.params.key }  
      },
      {
          company: { $regex: req.params.key }
      },
      {
          category: { $regex: req.params.key }
      }
    ]
  });
  res.send(result)
})

function verifyToken (req, res, next){
  let token = req.headers['authorization'];
  if(token){
    token = token.split(" ")[1];
    Jwt.verify(token, jwtKey,(err,valid) => {
      if(err){
        res.status(401).send({result:"please provide valid token"})
      }else{
        next()
      }
    })
  }else{
    res.status(403).send({result:"please add token with heders"})
  }
}

app.listen(5000, () => {
  console.log("Server is connected");
});
