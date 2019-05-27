  
const   express = require('express'),
        bodyParser = require('body-parser'),
        request = require('request'),
        nodemailer = require('nodemailer'),
        app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
});

app.listen(process.env.PORT || 4000, ()=> {
    console.log("Esta vivo")
}); 