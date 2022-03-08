require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors("*"));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.json({mensaje:'Hola desde NodeJS'});
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});