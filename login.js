const express = require('express'); // Include ExpressJS
const router  = express.Router();
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware
const userData = require('./userdata').userData;
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


router.post('/login', (req, res) => {
    console.log(req.body);
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
 // res.send(`Username: ${username} Password: ${password}`);
//console.log(userData);


   let found = false;
   let userObj = {};
    
//    console.log(userData)
   for(let uObj of userData){
    //console.log(uObj)
    if(username === uObj.userName && password === uObj.password){
        found= true;
        userObj = uObj;
        break;
    }
   }

   if(found === true){
    res.send(userObj).status(200);
   }else{
    res.sendStatus(401).end();
}
});

app.use(router);



// app.post('/login1', (req, res) => {
//     // Insert Login Code Here
//     let username = req.body.username;
//     let password = req.body.password;

//     userData.forEach((user)=>{
//         if(user.userName === username && user.password === password){
//             res.send(user).status(200);
//             return;
//         }
//     })
  
    
//      if(found === true){
      
//      }else{
//       res.sendStatus(401).end();
//   }
//   });
  
  
  const port = 8080
  app.listen(port, () => console.log(`This app is listening on port ${port}`));