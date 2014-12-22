var Connection = require("./connection"),
    Requests = require("./requests");

module.exports = (function(){
  var Api = function(opts){
    this.options = opts;
  };

  Api.prototype = {
    whoAmI: function(callback){
      var req = new Requests.WhoAmI(this.options);
      req.execute(callback);
    },

    accountType: function(accountTypeId, opts){},
    userDetails: function(login, opts){},
    videoDetails: function(videoId, opts){},
    videoList: function(login, opts){},
    videos: function(opts){},
    deleteVideo: function(videoId, opts){},
    editVideo: function(videoId, opts){},
    signature: function(opts){},
    processVideo: function(opts){},
    uploadVideo: function(opts){},
    addSubtitle: function(videoId, opts){},
    uploadThumbnail: function(videoId, opts){}
  };

  return Api;
})();