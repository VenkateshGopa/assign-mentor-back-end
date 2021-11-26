const mongodb = require('mongodb');

const mongo = {
    db: null,

    async connect (){
    try{
        const client = new mongodb.MongoClient(process.env.url);
        await client.connect();
        console.log("Mongo db Connected Successfully !");
        this.db = await client.db(process.env.dbname)
        console.log("Selected Database - " +process.env.dbname);
    }
    catch{
        console.log("failed to connect mongo db")
    } 
 }
}

module.exports= mongo;