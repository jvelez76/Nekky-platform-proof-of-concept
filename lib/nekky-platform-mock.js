/**
 * Created by felipeg on 9/4/14.
 */
//The following code will emulate the Nekky Platform

var _class = require('prototype');


/**
 * NekkyPlatformPlugin class
 */
var NekkyPlatformPlugin = _class.Class.create();

NekkyPlatformPlugin.prototype = {
    /**
     * @constructor
     */
    initialize:function(){
        "use strict";
    },
    /**
     * A unique identifier for the plugin.
     */
    uuid : undefined,
    /**
     * Plugin's name.
     */
    name : undefined,
    /**
     * Init function for set initial state.
     */
    init : function() {},

    /**
     * Post function. This function will be executed
     * after the Start function.
     */
    post : function() {},

    /**
     * Destroy function. This function will be executed
     * when the plugin is being disposed.
     */
    destroy: function(){},

    /**
     * Start function. This function will start the plugin.
     * The implementation of this function is mandatory.
     * @param opts, a map
     */
    start: function(opts){throw 'No start method implemented.'},

    /**
     * Stop function. This function will stop the plugin.
     * @param opts, a map
     */
    stop: function(opts){throw 'No stop method implemented.'},







    /**
     * This function will receive any messages.
     * @param message
     */
    onMessage : function(message){}







};


/**
 * NekkyPlatformManager class
 */
var NekkyPlatformManager = _class.Class.create();

NekkyPlatformManager.prototype = {
    /**
     * @constructor
     */
    initialize:function(){
        "use strict";
        this.pluginList = [];
    },

    /**
     * Register the plugins.
     * @param plugin
     */
    register: function(plugin){
        "use strict";
        this.pluginList.push(plugin);
    },

    /**
     * Init function. Will execute any init implementation from
     * the plugin list.
     */
    init:function(opts){
        "use strict";
        if(this.pluginList.length == 0)
            console.log('[NekkyPlatformManager] There are no plugins registered');
        this.pluginList.forEach(function(plugin){
            plugin.init(opts);
        });
    },

    start:function(opts){
        "use strict";
        this.pluginList.forEach(function(plugin){

            plugin.start(opts);
        });
    },

    stop:function(opts){
        "use strict";
        this.pluginList.forEach(function(plugin){
            plugin.stop(opts);
        });
    }
};

module.exports = {
    getInstance : function(type){
        "use strict";
        var instance = null;
        switch(type){
            case 'NekkyPlatformPlugin':
                instance = new NekkyPlatformPlugin();
                break;
            case 'NekkyPlatformManager':
                instance = new NekkyPlatformManager();
                break;
            default:
                instance = null;
                break;
        }
        return instance;
    }
};

