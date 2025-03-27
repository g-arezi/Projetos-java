const tmi = require('tmi.js');
const options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    // identidade de login user e oauth
    identity:{
        username:"gsaboti",
        password: "oauth:rawma0wl79tpxu4hzi2iekc52ive22"
    },
        //Canal vinculado a live:
    channels: [ "xGsa"], 

};

var client = new tmi.client(options);
client.connect();

client.on("chat", function(channel, user, message, self){
//comando para interação
    if(message === "slv"){
        message.send("salve man, tu ta bem?");
    }
    
    });
