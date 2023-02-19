var express = require("express");
var app = express();
var port = 3000;
const cohere = require('cohere-ai');
cohere.init('h7JSQUtT7IFzLNDPRqTpxTbjvupYA3e7sbRYCrLe');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.engine('ejs', require('ejs').__express)
app.use(express.static(__dirname + '/views'))

//receive request from the client side
app.post('/post',(req,res) => {
    res.header("Access-Control-Allow-Origin","*");
    console.log("New express client");
    console.log("Received: ");
    //console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);
    if (z['action']=='locInfo') {
        var loc = "Three native plants in " + z['location'] + 'just names';
         // This is your trial API key
        (async () => {
            const response = await cohere.generate({
            model: 'command-xlarge-nightly',
            prompt: loc,
            max_tokens: 300,
            temperature: 0.9,
            k: 0,
            p: 0.75,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop_sequences: [],
            return_likelihoods: 'NONE'
            });
        var plantList = `${response.body.generations[0].text}`;
        console.log(plantList);                                                  
        var jsontext = JSON.stringify({
            'result':plantList,
            'action':'locInfoLoaded'
            });
            console.log(jsontext);
            res.send(jsontext);
        })();
    //check if the request action is evaluatePassword
    }
    else if (z['action']=='plantInfo') {
        var plantName = z['plant'];
        (async () => {
            const response = await cohere.generate({
            model: 'command-xlarge-nightly',
            prompt: plantName,
            max_tokens: 300,
            temperature: 0.9,
            k: 0,
            p: 0.75,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop_sequences: [],
            return_likelihoods: 'NONE'
            });
        var info = `${response.body.generations[0].text}`;
        console.log(info);                                                  
        var jsontext = JSON.stringify({
            'result':info,
            'action':'plantInfoLoaded'
            });
            console.log(jsontext);
            res.send(jsontext);
        })();
    }
}
).listen(port);

app.get('/',(req,res) => {
    res.render('welcomepage.ejs');
})

app.get('/milkweed',(req,res) => {
    res.render('milkweed.ejs');
})

app.get('/infooutput',(req,res) => {
    res.render('infooutput.ejs');
})



console.log("Server is running!");