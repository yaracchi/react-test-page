//our surver we add express ,cors,axiosapp
const express = require('express');
const cors = require('cors');
const axios = require('axios');
//make our express app
//execute express
const app = express();
//use cors for our react client
app.use(cors());
// terminal:creat react client use npx create-react-app nameapp
// terminal:creat http client axios inside react app use npm i axios ,helps wth http request
//add in package.js of react app: proxy to help request by qxios
app.get('/api',(req,res) => { 
    const user= req.query.user || "yaracchi";
    axios.get(`https://api.github.com/users/${user}`).then(response => {
        res.json( { user : response.data});
    });
});
//in order to make our page a single page app means when a user visits our page ,index.html gonna show up
if(process.env.NODE_ENV == "production"){
    app.use(epress.static(`client/build`));
    //when app built this foler build has all
    //so we want wherevr user when on app,we give index.html
    app.get(`*`,(req,res) => {
res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    });
}
//creat and listen to the port
const PORT = process.env.PORT || 4000; //fist dinamicly by heroku
//includ an optional log in our callback fct

app.listen(PORT,() => { console.log(`listening on PORT ${PORT}`);
});

