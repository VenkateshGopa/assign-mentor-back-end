const express =  require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const route = require('./routes/routes');
const mongo = require('./db/mongodb');
dotenv.config();
const port = process.env.PORT || 3001;

( async() =>{
    try{
        // db connection
        await mongo.connect();

        //middleware
        app.use(express.json());
        app.use(cors());

        //route 
        app.use(route);

        app.listen(port, () =>{
            console.log("your server up and running on " + port);
        })
    }
    catch(error){
        console.log("failed to start app")
    }
})();
