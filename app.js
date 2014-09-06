/**
 * Created by felipeg on 9/4/14.
 */

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Example for Messaging
//var Message = require('./lib/message');
//
//
//var msg = new Message({body:'hi',headers: { 'flag':true}});
//console.log(msg);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Example Platform/Plugin
var uuid = require('node-uuid');
var _class = require('prototype');

var NekkyPlatform = require('./lib/nekky-platform-mock');

// -------------------------------------------------------------------
var NekkyChat = _class.Class.create();
var pluginInterface = NekkyPlatform.getInstance('NekkyPlatformPlugin');

NekkyChat.prototype = Object.extend(pluginInterface, {
    uuid : uuid.v1(),
    name : 'Nekky Chat',
    init: function() {
        "use strict";
        console.log("hola mundo");

    },
    start:function(){
        "use strict";
    }
});

NekkyChat.prototype.server = function(){
    //
}

var chat = new NekkyChat();
var manager = NekkyPlatform.getInstance('NekkyPlatformManager');
manager.register(chat);
manager.init();
manager.start();



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var nekkyLogin = _class.Class.create();
var plginIface =  NekkyPlatform.getInstance('NekkyPlatformPlugin');

nekkyLogin.prototype = Object.extend(plginIface, {
   uuid: uuid.v1(),
   name: 'Nekky Users',
   init: function(opts) {
     "use strict";
     console.log("Init with options: "+JSON.stringify(opts));






   },
   start: function(opts){
     "use strict";
     console.log("Stat with options: "+JSON.stringify(opts));
   },
   stop: function(opts){
     "use strict";
     console.log("Stop with options: "+JSON.stringify(opts));
   }

});


var login = new nekkyLogin();
var loginManager = NekkyPlatform.getInstance('NekkyPlatformManager');
loginManager.register(login);
loginManager.init({"auth":"facebook"});
loginManager.start({"username":"javierv@nekky.org", "passwd":"1a2b3c4d5e"});
loginManager.stop({"saveSession": true});











//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//manager
//    .send(new Message({body:'{"email":"javierv@nekky.org","pwd:"123","action":"authenticate'}))
//    .to('security://localhost:3000?timeout=5.minutes&data={"status":"active"}')
//    .to('cms://localhost');






