const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/fruitDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .once('open', () => console.log('connected'))
  .on('error', error => {
    console.log('error');
  });

  const fruitSchema = new mongoose.Schema({
    name:  {
      type: String,
      required: [true, "Error: no name specified" ]
  },
     rating: {
         type: Number, 
         min: 1, 
         max: 10 
     }, 
     review: String 
  });
  
  const Fruit = mongoose.model("Fruit", fruitSchema);
  
  const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Sweet and crunchy"
  });
  
  
  
  
  
  
  
  const peopleSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: [true, 'Error: noame specified']
    },
    lastname: String,
    age: {
      type: Number,
      min: 5,
      max: 60
    }
    
  });
  
  const People = mongoose.model("People", peopleSchema);
  
  const person3 = new People({
    firstname: "John", 
    lastname: "Doe", 
    age: 29
    });
  
  
  //const banana = new Fruit({
   // name: "Banana",
   // rating: 5,
   // review: "Soft texture"
  //});
  
  //const lemon = new Fruit({
  //  name: "Lemon",
   // rating: 5,
   // review: "Sour as hell"
  //});
  
  //Fruit.insertMany([banana, lemon], (error)=> {
    //if(error){
    //    console.log(err);
    //} else {
    //    console.log("Fruit successfully added to the fruitDB");
   // }
  //});
  
  const orange = new Fruit({
    name: "orange",
    rating: 8
  });

  
  
  
  
  
  
  
  Fruit.find(function(error, fruits) {
    if(error){
        console.log(error);
    } else {
        
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
  
    }
  });
  Fruit.update({_id: "5e9452af0728c80fdce3356c"}, {review: "Juicy fruit"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Record successfully updated.");
    }
  });
  
  Fruit.deleteMany({name: "orange"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Item successfully deleted.");
    }
  });
  
  
  
  
  const person1 = new People({
    firstname: "Jekaterina", 
    lastname: "Korikova", 
   Age: 20
  });
  
  const person2 = new People({
    firstname: "Ivan", 
     lastname: "Johansson", 
     Age: 45
    });
  
  
  //People.insertMany([person1,person2,person3], (error)=> {
    //if(error){
      //  console.log(err);
    //} else {
     //   console.log("People successfully added to the fruitDB");
    //}
  //});
  
  //People.find(function (error, people) {
    //if (error) {
     // console.log(error);
    //} else {
    //  people.forEach(people => {
     //   console.log(people);
     // });
   // }
  //});
  
  //People.update({_id: "5e940f1014742f19983edab9"}, {age: 30}, function(error){
   // if(error){
     //   console.log(error);
    //} else {
    //    console.log("Record successfully updated.");
    //}
  //});
  
  app.listen(3000, () => {
    console.log('Server is Running on Port 3000');
  });




