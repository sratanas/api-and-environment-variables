var express = require('express');
var router = express.Router();

var request = require('request');

router.get('/search', function(req, res){

    var keyword = req.query.q //passes keyword back to server side

    var fullRequestUrl = 'https://api.giphy.com/v1/gifs/search';
    fullRequestUrl += '?q=' + keyword; //the order doesn't matter but the first one has to be a question mark.
    fullRequestUrl += '&api_key=' + process.env.GIPHY_API_KEY;
    fullRequestUrl += '&rating=g';

request(fullRequestUrl, function (error, response, body) {
    if (error){
        console.log('error making search giphy request', error);
        res.sendStatus(500);
        
    } else{
        res.send(body);
    }

});

})


router.get('/random', function(req, res){
    
        var fullRequestUrl = 'https://api.giphy.com/v1/gifs/random';
        fullRequestUrl += '?api_key=' + process.env.GIPHY_API_KEY; //'z1ifBR8WW5O5DECDL0bRfpyl6MOrsPTl';
        fullRequestUrl += '&rating=g';

    request(fullRequestUrl, function (error, response, body) {
        if (error){
            console.log('error making random giphy request', error);
            res.sendStatus(500);
            
        } else{
            res.send(body);
        }
    
    });
    
    })

module.exports = router;