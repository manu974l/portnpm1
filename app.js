
import express from 'express'
import pkg from 'hbs'
import { fileURLToPath } from "url";
import { dirname } from "path"; 
import path from "path";

//set var to get path directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publishDirectoryPath = path.join(__dirname, "/public");
const viewsPath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "templates/partials");


const app = express()

//import bootstrap 
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))); 
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))); 
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist")));

//redefinition du repertoire des vues 
app.set("views", viewsPath);  
//definition du repertoire des partials https://handlebarsjs.com/guide/partials.html#basic-partials 
pkg.registerPartials(partialsPath);   
//on indique le repertoire public pour les fichiers statiques 
app.use(express.static(publishDirectoryPath));

app.set ('view engine','hbs')


app.get('/', function (req, res) {
  res.render('index')
})




console.log ('server demarrer localhost:3000')
app.listen(3000)