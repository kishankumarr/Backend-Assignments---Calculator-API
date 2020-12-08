const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/",(req,res)=>{
     res.status(200).send("Hello World!");
});
 const output={
   status:"",
   message:"",
 };

app.post("/add", (req,res) => {
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);

  if(isNaN(num1)||isNaN(num2)){
     output.status="error";
     output.message="Invalid data types";
  }else{
    const number1=Number(num1);
    const number2=Number(num2);
    const result=number1+number2;
     if(num<-1000000||num2<-1000000||result<-1000000){
       output.status="error";
       output.message="Underflow";
     }else if(num>1000000||num2>1000000||result>1000000){
      output.status="error";
      output.message="Overflow";
  }else{
    output.status="success";
      output.message="the sum of given two numbers";
      output.sum=result;
  }
}
res.send(output);
})

app.post("/sub", (req,res) => {
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);

  if(isNaN(num1)||isNaN(num2)){
     output.status="error";
     output.message="Invalid data types";
  }else{
    const result=num1-num2;
     if(num<-1000000||num2<-1000000||result<-1000000){
       output.status="error";
       output.message="Underflow";
     }else if(num>1000000||num2>1000000||result>1000000){
      output.status="error";
      output.message="Overflow";
  }else{
      output.status="success";
      output.message="the difference of given two numbers";
      output.difference=result;
  }
}
res.send(output);
});

app.post("/multiply", (req,res) => {
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);

  if(isNaN(num1)||isNaN(num2)){
     output.status="error";
     output.message="Invalid data types";
  }else{
    const result=num1*num2;
     if(num<-1000000||num2<-1000000||result<-1000000){
       output.status="error";
       output.message="Underflow";
     }else if(num>1000000||num2>1000000||result>1000000){
      output.status="error";
      output.message="Overflow";
  }else{
      output.status="success";
      output.message="The product of given numbers";
      output.result=result;
  }
}
res.send(output);
});
app.post("/divide", (req,res) => {
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);

  if(isNaN(num1)||isNaN(num2)){
     output.status="error";
     output.message="Invalid data types";
  }else{ 
       if(num2===0){
      output.status="error";
      output.status="Cannot divide by zero";
  }else{
    const result=num1/num2;
     if(num<-1000000||num2<-1000000||result<-1000000){
       output.status="error";
       output.message="Underflow";
     }else if(num>1000000||num2>1000000||result>1000000){
      output.status="error";
      output.message="Overflow";
  }else{
      output.status="success";
      output.message="The division of given numbers";
      output.result=result;
  }
}
}
res.send(output);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
  
module.exports = app;