/**
 * Created by felipeg on 9/4/14.
 */
var _class = require('prototype');

/**
 * Message definition
 */
var Message = _class.Class.create();


Message.prototype = {
    /**
     * @constructor
     * @param opts
     */
    initialize: function(opts){
        "use strict";
        if(opts){
            this.body = opts.body;
            this.headers = opts.headers;
        }
    },

    /**
     * Message Body
     */
    body : undefined,
    /**
     * Message headers. A map.
     */
    headers : {}
}

module.exports = Message;
