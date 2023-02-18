var express = require("express");
var app = express();
var port = 3000;

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
    if (z['action']=='searchInfo') {
        var loc = "what are some native plants for " + z['location'] + '\n\n';
        const cohere = require('cohere-ai');
        cohere.init('h7JSQUtT7IFzLNDPRqTpxTbjvupYA3e7sbRYCrLe'); // This is your trial API key
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
        var plantList = `Prediction: ${response.body.generations[0].text}`;
        console.log(plantList);                                                           
        var jsontext = JSON.stringify({
            'result':plantList,
            'action':'infoLoaded'
            });
            console.log(jsontext);
            res.send(jsontext);
})();
    //check if the request action is evaluatePassword
}
}
).listen(port);

app.get('/',(req,res) => {
    res.render('test');
})

app.get('/milkweed',(req,res) => {
    res.render('milkweed.ejs');
})

app.get('/infooutput',(req,res) => {
    res.render('infooutput.ejs');
})

app.get('/welcomepage',(req,res) => {
    res.render('welcomepage.ejs');
})



console.log("Server is running!");