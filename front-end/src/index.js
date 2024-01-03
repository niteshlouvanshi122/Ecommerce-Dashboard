import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();








// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





// const express = require("express");
// // require("./config");
// // const product = require("./products");

// const app = express();

// app.get("/", (req, res) => {
//     res.send("routs is done")
// })

// // app.use(express.json());

// // app.post("/create", async (req, res) => {
// //   try {
// //     const addingdata = new product(req.body);
// //     const result = await addingdata.save();
// //     res.send(result);
// //   } catch (error) {
// //     console.log(error)
// //   }
// // });

// // app.get("/products", async(req, res) =>{
// //     try {
// //         const gettingData = await product.find()
// //         res.send(gettingData);

// //     } catch (error) {
// //         console.log(error)
// //     }
// // })

// // app.delete("/delete/:_id", async(req, res) => {
// //     try {
// //         const data = await product.deleteOne(req.params)
// //         res.send(data)
// //     } catch (error) {
// //         console.log(error)
// //     }
// // })


// // app.put("/put/:_id", async(req, res) => {
// //     try {
// //         const data = await product.updateOne(
// //             req.params,
// //             {
// //                 $set:req.body
// //             })
// //         res.send(data)
// //     } catch (error) {
// //         console.log(error)
// //     }
// // })


// // app.get("/search/:key", async(req, res) => {
// //     try {
// //         const data = await product.find(
// //             {
// //                 "$or":[
// //                     {"name":{$regex:req.params.key}},
// //                     {"brand":{$regex:req.params.key}},
// //                     {"caregory":{$regex:req.params.key}}
// //                 ]
// //             }
// //            )
// //         res.send(data)
// //     } catch (error) {
// //         console.log(error)
// //     }
// // })

// app.listen(5000, () => {
//   console.log("Server is conected");
// });
