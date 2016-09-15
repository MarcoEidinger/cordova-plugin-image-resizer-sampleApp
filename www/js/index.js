var app = {

    initialize: function() {
        this.bindEvents();
    },

    log: function() {
        var args = Array.prototype.slice.call(arguments, 0);
        document.getElementById('output').innerHTML += args.join(" ") + "\n";
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        app.log('Received Event: ' + id);
    },

    previewFile: function() {
      var oPreviewImgDomElement = document.querySelector('img');
      var oFile    = document.querySelector('input[type=file]').files[0];
      var oFileReader  = new FileReader();

      oFileReader.onload = function () {
          var sDataUri = oFileReader.result;
          var sMimeType = sDataUri.split(",")[0].split(":")[1].split(";")[0];
          var sData = sDataUri.split(",")[1];

          if (!app.isMimeTypeSupported(sMimeType)) {
              app.log("ERROR: File not supported");
              return;
          }

          if (window.imageResizer) {
              window.imageResizer.resizeImage(
                  function(data) {
                      oPreviewImgDomElement.src = "data:" + sMimeType + ";base64," + data.imageData;
                  }, function (error) {
                      app.log("Error : \r\n" + error);
                  }, sData, 0.1, 0.1, {
                      resizeType: ImageResizer.RESIZE_TYPE_FACTOR,
                      imageDataType: ImageResizer.IMAGE_DATA_TYPE_BASE64
                  }
              );
          } else {
              app.log("ERROR: Plugin not available");
          }
      };

      if (oFile) {
        oFileReader.readAsDataURL(oFile);
      }
    },

    isMimeTypeSupported: function(sMimeType) {
      switch (sMimeType) {
        case "image/png":
        case "image/jpeg":
          return true;
          break;
        default:
          return false;
      }
    }

};

app.initialize();
