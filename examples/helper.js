var conf = require("../api_envs"),
    Vzaar = require("../lib/vzaar");

module.exports = {
  getConf: function(name) {
    var env = process.env.API_ENV || "development";
    return conf[env][name];
  },

  init: function(_params){
    var params = _params || {},
        api = new Vzaar.Api({
          login: (params.login === undefined ? this.getConf("login") : params.login),
          token: (params.token === undefined ? this.getConf("token") : params.token),
          hostname: params.hostname || this.getConf("hostname"),
          forceHttp: params.forceHttp || this.getConf("forceHttp")
        });

    return api;
  },

  randStr: function(len){
    var text = "",
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
