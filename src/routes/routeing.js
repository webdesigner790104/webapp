const express = require('express');
const routes = express.Router();

routes.post('/login',(request,response) =>{
    console.log(request.body);
    email:request.body.email,
         pass;request.body.pass
     
     login.save()
     .then(data =>{
         console.log("login success ");
         response.json(data)
     })
     .catch(error => {
         console.log("login error");
        response.json(error)
    })
 })
 





module.exports = routes
