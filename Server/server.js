const app = require("./app")
const dotenv = require("dotenv");
const ConnectDatabase = require("./config/database")
// for config env variable
dotenv.config({path:"Server/config/config.env"});
ConnectDatabase()

app.listen(process.env.PORT,()=>{
 console.log(`server is working on ${process.env.PORT}`)
});