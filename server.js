const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

// function checkWord(word){
//     console.log(word)
//     }

const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    const parsedUrl = url.parse(req.url)
    const queryString = parsedUrl.query
    const params = querystring.parse(queryString)

    if (page == '/') {
        // console.log(`${userInput}`)
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
      else if (page == '/style.css'){
        fs.readFile('style.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }else if (page == '/main.js'){
        fs.readFile('main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      else if (page == '/api') {
        console.log(params)
        
  const revWord = params.word.split("").reverse("")
  const result = revWord.join("")

        if('word' in params){
          if(params.word == `${result}`){
            res.writeHead(200, {'Content-Type': 'application/json'});
            const objToJson = {
              result:true
            }  // random: genRandom(params.word)
      // console.log('true')
     
               
      // console.log(revWord)
               console.log(objToJson)
               res.end(JSON.stringify(objToJson));
          }
          else if(params.word != `${result}`){
            res.writeHead(200, {'Content-Type': 'application/json'});
            const objToJson = {
              result: false
            }
            // console.log('WRONG!')
         
            res.end(JSON.stringify(objToJson));
          }


        }
      }
});

server.listen(7000);
//need to get displaying in the dom

