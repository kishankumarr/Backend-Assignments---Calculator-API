const express = require('express')
const index = express()
const bodyParser = require("body-parser");
const port = 3000
index.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
index.use(express.json());


index.use(bodyParser.urlencoded({ extended: false }))

index.use(bodyParser.json())

index.post("/add", (req,res) => {
    console.log(req.body);
    let data = req.body
    let status = undefined
    let result = undefined
    if(data.num1 && data.num2){
      status = "success"
      result = Number(data.num1) + Number(data.num2)
    }else {
      status = "failure"
    }
    let response = {
      status: status,
      message: "the sum of given two numbers",
      sum: result
    }
    res.send(response)
  })
  
  index.post("/divide", (req, res) => {
    let data = req.body
    let status = undefined
    let result = undefined
    if(data.num1 && data.num2){
      status = "success"
      result = Number(data.num1) / Number(data.num2)
      if(data.num2 == 0){
        status = "error"
        message="Cannot divide by zero"
      }}else if(data<-1000000) {
         message="Underflow"
      }else if(data>1000000) {
        message="Overflow"
     }
      let response ={
        status: status,
        message: "The division of given two numbers",
        sum:result
      }
      res.send(response)
  })
  
  index.post("/sub", (req,res) => {
    console.log(req.body);
    let data = req.body
    let status = undefined
    let result = undefined
    if(data.num1 && data.num2){
      status = "success"
      result = Number(data.num1) - Number(data.num2)
    }else {
      status = "failure"
    }
    let response = {
      status: status,
      message: "the difference of given two numbers",
      sum: result
    }
    res.send(response)
  })
  index.post("/mul", (req,res) => {
    console.log(req.body);
    let data = req.body
    let status = undefined
    let result = undefined
    if(data.num1 && data.num2){
      status = "success"
      result = Number(data.num1) * Number(data.num2)
    }else {
      status = "failure"
    }
    let response = {
      status: status,
      message: "the product of given two numbers",
      sum: result
    }
    res.send(response)
  })

index.listen(port, () => console.log(`App listening on port ${port}!`))
  
module.exports = index;