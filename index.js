let myhttp = require('http');

let myserver = myhttp.createServer(
  
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let myresponsetext;
    
    if ( myrequest.url === "/hey" ) {
        myresponsetext = "Well hello there folks...";
    }  
    else {
      myresponsetext = "I don't know you!";  
    }
    
    switch ( myrequest.url ) {
      case "/hey":
        myresponsetext = "That was hey!";
        break;
      case "/what":
        myresponsetext = "That was what?";
        break;
    }
    
    myresponse.writeHead(
      200,
      {
        "Content-Type": "text/plain"
      }
    );
    myresponse.end(
      myresponsetext
    );
  }
  
);

myserver.listen(80, "0.0.0.0");