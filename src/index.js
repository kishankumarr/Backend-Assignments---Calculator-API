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
 const out={
   status:"",
   message:"",
 };

app.post("/add", (req,res) => {
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);

  if(isNaN(num1)||isNaN(num2)){
     out.status="error";
     out.message="Invalid data types";
  }else{
    const number1=Number(num1);
    const number2=Number(num2);
    const result=number1+number2;
     if(num<-1000000||num2<-1000000||result<-1000000){
       out.status="error";
       out.message="Underflow";
     }else if(num>1000000||num2>1000000||result>1000000){
      out.status="error";
      out.message="Overflow";
  }else{
    out.status="success";
      out.message="the sum of given two numbers";
      out.sum=result;
  }
}
res.send(out);
})

app.post("/sub", (req,res) => {
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);

  if(isNaN(num1)||isNaN(num2)){
     out.status="error";
     out.message="Invalid data types";
  }else{
    const result=num1-num2;
     if(num<-1000000||num2<-1000000||result<-1000000){
       out.status="error";
       out.message="Underflow";
     }else if(num>1000000||num2>1000000||result>1000000){
      out.status="error";
      out.message="Overflow";
  }else{
      out.status="success";
      out.message="the difference of given two numbers";
      out.difference=result;
  }
}
res.send(out);
});

app.post("/multiply", (req,res) => {
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);

  if(isNaN(num1)||isNaN(num2)){
     out.status="error";
     out.message="Invalid data types";
  }else{
    const result=num1*num2;
     if(num<-1000000||num2<-1000000||result<-1000000){
       out.status="error";
       out.message="Underflow";
     }else if(num>1000000||num2>1000000||result>1000000){
      out.status="error";
      out.message="Overflow";
  }else{
      out.status="success";
      out.message="The product of given numbers";
      out.result=result;
  }
}
res.send(out);
});
app.post("/divide", (req,res) => {
  const num1=Number(req.body.num1);
  const num2=Number(req.body.num2);

  if(isNaN(num1)||isNaN(num2)){
     out.status="error";
     out.message="Invalid data types";
  }else{ 
       if(num2===0){
      out.status="error";
      out.status="Cannot divide by zero";
  }else{
    const result=num1/num2;
     if(num<-1000000||num2<-1000000||result<-1000000){
       out.status="error";
       out.message="Underflow";
     }else if(num>1000000||num2>1000000||result>1000000){
      out.status="error";
      out.message="Overflow";
  }else{
      out.status="success";
      out.message="The division of given numbers";
      out.result=result;
  }
}
}
res.send(out);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
  
module.exports = app;